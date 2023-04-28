//Despacha las actions que traen todos los paises y todas las actividades(para el filter por actividad) y renderiza Searc, filters, order,CardsContainer
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCountries, getActivities } from "../../redux/actions";
import Filters from '../../components/Filters/Filters';
import Order from '../../components/Order/Order';
import SearchBar from '../../components/SearchBar/SearchBar';
import Footer from "../../components/Footer/Footer";
import styles from './Home.module.css'




const Home = () => {
    const dispatch = useDispatch();

    const handleShowAll = () => {
        dispatch(getAllCountries());
      };

    useEffect(() => {
        dispatch(getAllCountries());
        dispatch(getActivities());
    }, [dispatch]);

    return (
        <div>
            <div className={styles.selects}>
                <SearchBar />
                <Order />
                <Filters />
                <button onClick={handleShowAll} className={styles.btn}>Show all</button>
            </div>
            <CardsContainer/>
            <Footer/>
        </div>
    )
};

export default Home;