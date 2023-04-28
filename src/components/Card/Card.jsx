//retorno una card que sera utilizada en el cards container
import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Card.module.css';

const Card = (props) => {
    return(
        <Link to={`/detail/${props.id}`} className={styles.link}>
            <div className={styles.card}>
                <img src={props.flagImg} alt="flag" className={styles.flag}/>
                <div>
                <h3 className={styles.h3}>{props.name}</h3>
                <h5 className={styles.h5}>{props.continent}</h5>
                </div>
            </div>
        </Link>
    )

}

export default Card