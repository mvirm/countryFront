//logica y linkeo de as rutas en el nav
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import imagenNav from '../img/imagenNav.png';


const Nav = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.logotipo}>
            <img src={imagenNav} className={styles.img} alt="Flags of countries"/>
            <h1 className={styles.name}>Global Adventures</h1>
            </div>
            <div className={styles.container}>
            <NavLink to='/about' className={({isActive}) => (isActive ? styles.isActive : styles.link)}>About</NavLink>
            <NavLink to='/home' className={({isActive}) => (isActive ? styles.isActive : styles.link)}>Home</NavLink> 
            <NavLink to='/form' className={styles.link}>Create Tourist Activity</NavLink>
            </div>
        </div>
    )
}

export default Nav