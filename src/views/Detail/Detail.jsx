//despacha la action que muestra el detalle por ID y renderiza el DetailContainers
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import DetailContainer from '../../components/DetailContainer/DetailContainer';
import { getCountryById } from '../../redux/actions';
import Footer from '../../components/Footer/Footer';


const Detail = () => {
    const dispatch = useDispatch();
    const {detailId} = useParams();


    useEffect(() => {
        dispatch(getCountryById(detailId))
    }, [detailId])

    return (
        <div>
            <DetailContainer/>
            <Footer/>
        </div>
    )
};



export default Detail;