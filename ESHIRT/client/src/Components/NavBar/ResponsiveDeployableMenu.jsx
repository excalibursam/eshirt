import React from 'react'
import Style from './NavBar.module.css';
import Login from '../../auth/AuthenticationButton';
import {ReactComponent as CartIcon} from '../../assets/879815.svg'
import {ReactComponent as HeartFavorite} from '../../assets/2107845.svg'
import {ReactComponent as HomeButton} from '../../assets/25694.svg'
import {ReactComponent as DesignButton} from '../../assets/3456377.svg';
import {ReactComponent as CatalogueIcon} from '../../assets/4357336.svg'
import LogoutButton from '../../auth/LogoutButton'
import {NavLink} from 'react-router-dom';

export default function ResponsiveDeployableMenu({deploy, menuClose, setCartDeployed}) {


    return (
        deploy && <div className={Style.menuSection}>
            <div className={Style.topPanelIcons}>
                    <Login className={Style.loginBtn} menuClose={(arg)=>menuClose(arg)}/>
                    <div className={Style.navSeparator} style={{height: '30px'}}></div>
                <div className={Style.cart} onClick={()=> {
                    setCartDeployed(true)
                    return menuClose(false);
                    }} >
                    <CartIcon />
                </div>
                <div className={Style.navSeparator} style={{height: '30px'}}></div>
                <div className={Style.fav}>
                    <HeartFavorite />
                </div>
            </div>
            <div className={Style.responsiveNavBar}>
                <ul className={Style.navLinks}>
                <li><NavLink className={Style.eachLink} onClick={()=>menuClose(false)} exact to='/home'><HomeButton className={Style.home} iconified="true" /><span style={{marginLeft: '8px'}}>Home</span></NavLink><div className={Style.underline}></div></li>
                <div className={Style.navSeparator}></div>
                <li><NavLink className={Style.eachLink} onClick={()=>menuClose(false)} to='/catalogue'><CatalogueIcon className={Style.catalogueIcon} iconified="true"/><span style={{marginLeft: '8px'}} >Catalog</span></NavLink><div className={Style.underline}></div></li>
                <div className={Style.navSeparator}></div>
                <li><NavLink className={Style.eachLink} onClick={()=>menuClose(false)} to='/design'><DesignButton className={Style.designIcon} iconified="true"/><span style={{marginLeft: '8px'}}>Design</span></NavLink><div className={Style.underline}></div></li> 
                </ul>
            </div>
        </div>
    )
}