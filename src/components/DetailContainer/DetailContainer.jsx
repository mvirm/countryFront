//crea el contenido del detail usando el estado global country
import React from 'react';
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './DetailContainer.module.css';

const DetailContainer = () => {
    const country = useSelector(state => state.country);
    const navigate = useNavigate();

    return (
        <div className={styles.detail}>
            <div className={styles.contenedor}>
                <div className={styles.titulo}>
                    <h3>{country.id}</h3>
                    <h1>{country.name}</h1>
                </div>
                <img src={country.flagImg} alt="flag" className={styles.flag}/>
                <div className={styles.detalles}>
                    <div className={styles.alineado}>
                        <h5 className={styles.h5}>Continent</h5>
                        <h4 className={styles.h4}>{country.continent}</h4>
                    </div>
                    <div className={styles.alineado}>
                        <h5 className={styles.h5}>Capital</h5>
                        <h4 className={styles.h4}>{country.capital}</h4>
                    </div>
                    <div className={styles.alineado}>
                        <h5 className={styles.h5}>Subregion</h5>
                        <h4 className={styles.h4}>{country.subregion ? country.subregion : 'subregion not found'}</h4>
                    </div>
                    <div className={styles.alineado}>
                        <h5 className={styles.h5}>Area</h5>
                        <h4 className={styles.h4}> {country.area ? country.area : 'area not found'}</h4>
                    </div>
                    <div className={styles.alineado}>
                        <h5 className={styles.h5}>Population</h5>
                        <h4 className={styles.h4}>{country.population}</h4>
                    </div>
                </div>
            </div>
            <button className={styles.btn} onClick={() => navigate('/home')}>Go Home</button>
        </div>
    ) 
};

export default DetailContainer