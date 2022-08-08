import TippyH from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/components/Accountitem';
import style from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
const cx = classNames.bind(style);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResult,setShowResult]= useState(true)
    const [loading,setLoading]= useState(false)
    const inputRef = useRef();
    useEffect(() => {
        if(!searchValue.trim()){
            setSearchResults([])
            return;
        }
        setLoading(true)
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
        .then(res => res.json())
        .then(res =>{
            setSearchResults(res.data)
            setLoading(false)
        })
        .catch(()=>{
            setLoading(false)
        })
    }, [searchValue]);
    const handleOutside =()=>{
        setShowResult(false)
    }
    return (
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
                    onChange={(e) => setSearchValue(e.target.value)}
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
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </TippyH>
    );
}

export default Search;
