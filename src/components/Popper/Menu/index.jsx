import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from'./MenuItem.jsx';
import Header from './Header';
const cx = classNames.bind(styles);
function Menu({children,items=[],onChange}) {
    const [history,setHistory] = useState([{
        data:items
    }])
    const current = history[history.length-1]
    const renderItem =()=>{
        return current.data.map((item,index)=>{
            const isParent = !!item.children
            return <MenuItem key={index} data={item} onClick={()=>{
                if(isParent){
                    console.log(item.children);
                    setHistory(prev => [...prev,item.children])
                }else {
                    onChange(item);
                }
            }}/>
        })
    }
    return (
        <Tippy
        delay={[0,700]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title="language" onBack={()=>{
                            setHistory(prev => prev.slice(0,prev.length -1))
                        }}/>}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
