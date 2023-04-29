//creo la logica del renderizado del filter dentro selects, con los handlers despacho las actions de filter
import React from 'react';
import styles from './Filters.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { filterByContinent, filterByActivity } from '../../redux/actions';

const Filters = ({paginate}) => {
  
    const activities = useSelector(state => state.activities); // para el filtrado por actividad
    const continents = ["Africa", "Antarctica", "Asia", "Europe", "North America", "Oceania", "South America"]
    const dispatch = useDispatch();
   
    const handlerFilterContinent = (e) => {
        dispatch(filterByContinent(e.target.value))
        paginate(1);
    }
    const handlerFilterActivity = (e) => {
        dispatch(filterByActivity(e.target.value))
        paginate(1);
    }

    return(
        <div className={styles.filtro}>
            <h3>Filter by:</h3>
            <div>
                <div className={styles.ordenador}>
                <label htmlFor="continentFilter" className={styles.label}>Continet:</label>
                <select className={styles.option} name="continentFilter" onChange={handlerFilterContinent} >
                    <option value='' readOnly hidden>Choise...</option>
                    {continents && continents.map(continent => {
                        return(
                            <option key={continent} value={continent}>{continent}</option>
                        )
                    })}
                </select>
                </div>
                <div className={styles.separador}>
                <label htmlFor="activityFilter" className={styles.label}>Tourist activity:</label>
                <select className={styles.option} name="activityFilter" onChange={handlerFilterActivity}>
                    <option value='' readOnly hidden>Choise...</option>
                    {activities && activities.map(a => {
                        return(
                            <option key={a.id} value={a.name}>{a.name}</option>
                        )
                    })}
                </select>
                </div>
            </div>
        </div>
    )
}

export default Filters