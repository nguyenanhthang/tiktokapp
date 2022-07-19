import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from'./MenuItem.jsx'
const cx = classNames.bind(styles);
function Menu({children,items=[]}) {
    const renderItem =()=>{
        return items.map((item,index)=>{
            return <MenuItem key={index} data={item}/>
        })
    }
    console.log(renderItem)
    return (
        <Tippy
        delay={[0,700]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
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
