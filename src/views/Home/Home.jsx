//Despacha las actions que traen todos los paises y todas las actividades(para el filter por actividad) renderiza CardsContainer y footer
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCountries, getActivities } from "../../redux/actions";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCountries());
        dispatch(getActivities());
    }, [dispatch]);

    return (
        <div>
            <CardsContainer />
            <Footer />
      </div>
    )
};

export default Home;