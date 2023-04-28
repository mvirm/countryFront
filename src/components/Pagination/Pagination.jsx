//logica del renderizado del paginado
import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Pagination.module.css'
import imagenPrev from '../img/imagenPrev.png';
import imagenNext from '../img/imagenNext.png';

const Pagination = ({ countriesPerPage, totalCountries, paginate, currentPage, previus, next }) => { //traigo  desectructurado las props de CardsContainer
  const lastPage = Math.ceil(totalCountries / countriesPerPage)
  console.log(currentPage);
  
  return (
      <nav className={styles.pagination}>
        {currentPage !== 1 ? <NavLink to={previus} onClick={() => paginate(previus)}><img className={styles.flechaPrev} src={imagenPrev} alt="previus"/></NavLink>: null}
          <h5 className={styles.textPage}>page </h5><h3 className={styles.pagina}> {currentPage}</h3> <h5 className={styles.textPage}>/ {lastPage}</h5>   
        {currentPage !== lastPage ? <NavLink to={next} onClick={() => paginate(next)}><img className={styles.flechaNext} src={imagenNext} alt="next"/></NavLink> : null}
      </nav>
    );
  };

  export default Pagination

  //renderizo con distintos estilos si la pag es par o impar, y si esta o no activa

//   const Pagination = ({ countriesPerPage, totalCountries, paginate, currentPage, previus, next }) => {
//       const lastPage = Math.ceil(totalCountries / countriesPerPage)
//       const pageNumbers = [];
//             for (let i = 1; i <= lastPage; i++) { 
//               pageNumbers.push(i); //pusheo cada uno de los numeros de pagina
//             }

//             return (
//               <nav>
//                 <ul className={styles.pagination}>
//                   {pageNumbers.map((number) => (
//                     <li className={number % 2 === 0 ? styles.aPar : styles.aImpar} key={number}> //renderizo con distintos estilos si la pag es par o impar, y si esta o no activa
//                     <NavLink to={number} className={currentPage === number ? styles.page : styles.link} onClick={() => paginate(number)}> 
//                       {number}
//                     </NavLink>
//                     </li>
//                   ))}
//                 </ul>
//               </nav>
//             )
//   }

// export default Pagination