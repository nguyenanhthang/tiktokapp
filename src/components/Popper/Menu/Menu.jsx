import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper/Popper';
import styles from './Menu.module.scss';
import MenuItem from'./MenuItem.jsx';
import Header from './Header';
const cx = classNames.bind(styles);
const defaultFn = ()=>{}
function Menu({children,items=[],onChange=defaultFn,hideOnClick=false}) {
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
    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack}/>}
                <div className={cx('menu-scrollable')}>{renderItem()}</div>
            </PopperWrapper>
        </div>
    )
    const handleResetToFistPage = ()=>{
        setHistory(prev => prev.slice(0,1))
    }
    const handleBack =()=>{
        setHistory(prev => prev.slice(0,prev.length -1))
    }
    return (
        <Tippy
            offset={[12,8]}
            delay={[0,700]}
            
            hideOnClick={hideOnClick}
                interactive
                placement="bottom-end"
                render={renderResult}
                onHide={handleResetToFistPage}
            
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes={
    children:PropTypes.node.isRequired,
    items:PropTypes.array,
    onChange:PropTypes.func,
    hideOnClick:PropTypes.bool,
}
export default Menu;
