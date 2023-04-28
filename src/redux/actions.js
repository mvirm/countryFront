//genero las actions que luego seran despachads en los distintos views y componentes
import axios from 'axios';
import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_ID, SEARCH_BY_NAME, FILTER_BY_CONTINENT, SORT_BY_POPULATION, SORT_BY_NAME, GET_ACTIVITIES, FILTER_BY_ACTIVITY} from './types';

export const getAllCountries = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3001/countries');
        const countries = response.data;   
        dispatch({type: GET_ALL_COUNTRIES, payload: countries})
    }
};
        
export const getCountryById = (detailId) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/countries/${detailId}`);
        const country = response.data;
        dispatch({type: GET_COUNTRY_BY_ID, payload: country})
    };
};
        
export const searchByName = (name) => {
        return async (dispatch) => {
            const response = await axios.get(`http://localhost:3001/countries?name=${name}`);
            const countries = response.data;
            dispatch({type: SEARCH_BY_NAME, payload: countries})
        };   
};

export const sortByPopulation = (payload) => {
    return{
        type: SORT_BY_POPULATION,
        payload
    }
};

export const sortByName = (payload) => {
    return{
        type: SORT_BY_NAME,
        payload
    }
};

export const filterByContinent = (continent) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload: continent
    }
}

export const postActivity = (payload) => {
    return async (dispatch) => {
        const response = await axios.post('http://localhost:3001/activities', payload);
        return response
    };
};

export const getActivities = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3001/activities');
        const activities = response.data;   
        dispatch({type: GET_ACTIVITIES, payload: activities})
    }
};

export const filterByActivity = (activity) => {
    return {
        type: FILTER_BY_ACTIVITY,
        payload: activity
    }
};
