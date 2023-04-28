//contenido de la ruta About
import React from "react";
import Footer from "../../components/Footer/Footer";
import styles from './About.module.css'
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className={styles.img}>
            <div className={styles.contenedor}>
                <div className={styles.titulo}>
                    <h3 className={styles.welcome}>Welcome to</h3>
                    <h1 className={styles.name}>Global Adventures</h1>
                </div>
                <div className={styles.parrafo}>
                    <p className={styles.animacion1}>This application will allow you to expand your knowledge about the countries of the world</p>
                    <p className={styles.animacion2}>In it you can find a complete list of all the countries, accompanied by their respective flags and the continent to which they belong. In addition, you will be able to know detailed information about each country, such as its capital, its location on the continent, its geographical area and its population.</p>
                    <p className={styles.animacion3}>You will have the possibility to search for countries individually or in groups, order them by name or population, and filter them by continent or by the tourist activities they offer.</p>
                    <p className={styles.animacion4}>In addition, you will be able to create your own tourist activities, specifying their name, level of difficulty, duration, time of the year in which it takes place and assigning it to one or several countries.</p>
                </div>
                <h4 className={styles.enjoy}>Enjoy it!</h4>
            </div>
                <button className={styles.btn} onClick={() => navigate('/home')}>Go Home</button>
            </div>
            <Footer/>
        </div>
    )
};

export default About;

