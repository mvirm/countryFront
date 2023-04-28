//Despacha la action que trae todos los countries para el select del Form, renderiza el Form
import { useEffect } from "react";
import {useDispatch} from 'react-redux';
import { getAllCountries } from "../../redux/actions";
import FormContainer from "../../components/FormContainer/FormContainer";


const Form = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);
    
    return (
        <FormContainer/>

    )
};

export default Form;