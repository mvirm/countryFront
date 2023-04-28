// retorno el footer
import React from "react";
import styles from './Footer.module.css'

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <h5 className={styles.h5} >App created by Vir Montoya</h5>
            <p className= {styles.p}>created as PI, within the framework of a final evaluation of two instances (PI -PF) for the Full Stack Developer bootcamp of @SoyHenry</p>
        </footer>
    )

}

export default Footer