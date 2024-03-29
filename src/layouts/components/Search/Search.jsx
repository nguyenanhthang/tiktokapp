import TippyH from '@tippyjs/react/headless';
import  * as searchServices from '~/Services/searchService';
import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/components/Accountitem/Accountitem';
import style from './Search.module.scss';
import { useDebounce } from '~/hooks/hooks';
import { Wrapper as PopperWrapper } from '~/components/Popper/Popper';
const cx = classNames.bind(style);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResult,setShowResult]= useState(true)
    const [loading,setLoading]= useState(false)
    const inputRef = useRef();
    const debouncedValue = useDebounce(searchValue,500)
    useEffect(() => {
        if(!debouncedValue.trim()){
            setSearchResults([])
            return;
        }
        const fetApi = async()=>{
            setLoading(true)
            const results = await searchServices.search(debouncedValue)
            setSearchResults(results)
            setLoading(false)
        }
        fetApi()
    }, [debouncedValue]);
    const handleOutside =()=>{
        setShowResult(false)
    }
    const handleChange =(e)=>{
        const searchValue = e.target.value
        if(!searchValue.startsWith(' ')){
            setSearchValue(searchValue)
        }
    }
    return (
        <div>
            <TippyH
                interactive
                visible={showResult && searchResults.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResults.map((result)=>{
                                return (
                                    <AccountItem key={result.id} data={result}/>
                                )
                            })}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleOutside}
            >
                <div className={cx('search')}>
                    <input
                        onFocus={()=> setShowResult(!handleOutside())}
                        ref={inputRef}
                        value={searchValue}
                        spellCheck={false}
                        placeholder="Search accounts and videos..."
                        onChange={handleChange}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={() => {
                            setSearchValue('')
                            setSearchResults([]);
                            inputRef.current.focus()
                        }}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={(e)=> e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </TippyH>
        </div>
    );
}

export default Search;
