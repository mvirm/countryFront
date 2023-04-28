//creo la logica del renderizado del sort dentro selects, con los handlers despacho las actions de sort
import React from "react";
import styles from './Order.module.css';
import {useDispatch} from 'react-redux';
import {sortByPopulation, sortByName} from "../../redux/actions";

const Order = () => {
  const dispatch = useDispatch();

  const handlerSortByPop = (e) => {
    dispatch(sortByPopulation(e.target.value))
  };
  const handlerSortByName = (e) => {
    dispatch(sortByName(e.target.value))
  }

    return(
        <div className={styles.order}>
            <h3>Sort by:</h3>
            <div>
              <div className={styles.ordenador}>
                <label htmlFor="nameOrder" className={styles.label}>Name:</label>
                <select className={styles.option} name="nameOrder" onChange={handlerSortByName}>
                  <option value='' readOnly hidden>Choise...</option>
                    <option value="Asc">A to Z</option>
                    <option value="Desc">Z to A</option>
                </select>
              </div>
              <div className={styles.separador}>
                <label htmlFor="populationOrder" className={styles.label}>Population:</label>
                <select className={styles.option} name="populationOrder"onChange={handlerSortByPop}>
                    <option value='' readOnly hidden>Choise...</option>
                    <option value="Asc">Minor to Major</option>
                    <option value="Desc">Major to Minor</option>
                </select>           
              </div>
            </div>
        </div>
    )
};

export default Order