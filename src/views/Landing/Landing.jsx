//renderiza el landing
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Landing.module.css'

const Landing = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.img}>
            <div className={styles.titulo}>
                <h3 className={styles.welcome}>Welcome to</h3>
                <h1 className={styles.name}>Global Adventures</h1>
            </div>
            <div className={styles.anclaje}>
                <h3 className={styles.margen}>The world at your fingertips!</h3>
                <h4 className={styles.margen}>Discover new places and immerse yourself in global diversity, all from the comfort of your mobile device</h4>
                <h2 className={styles.margen}>Start exploring right now!</h2>
            </div>
            <div>
            <button className={styles.btn} onClick={() => navigate('/home')}>Let's Go!</button>
            </div>
        </div>
    )
};

export default Landing;