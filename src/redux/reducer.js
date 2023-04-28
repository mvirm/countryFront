//creo el estado global, y el switch con la logica para realizar cunado se despachan las distintas actions
import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_ID, SEARCH_BY_NAME, SORT_BY_POPULATION, FILTER_BY_CONTINENT, SORT_BY_NAME, GET_ACTIVITIES, FILTER_BY_ACTIVITY, POST_ACTIVITY} from "./types";

const initialState = {
    countries: [],
    allCountries: [],
    country: {},
    activities: [],
    allActivities : []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            };  

        case GET_COUNTRY_BY_ID:
            return {
                ...state,
                country: action.payload
            };

        case SEARCH_BY_NAME:
            return {
                ...state,
                countries: action.payload
            };

        case SORT_BY_POPULATION:
            let sortArray = action.payload === 'Asc' ?
            state.countries.sort((a, b) => {
               return a.population - b.population
            }) :
            state.countries.sort((a, b) => {
                return b.population - a.population
            });
            return  {
                ...state,
                countries: [...sortArray]
            };

        case SORT_BY_NAME:
            let sortNameArray = action.payload === 'Asc' ?
            state.countries.sort((a, b) => {
                if(a.name > b.name) {
                    return 1
                }
                if(b.name > a.name) {
                    return -1
                }
                return 0
            }) :
            state.countries.sort((a, b) => {
                if(b.name > a.name) {return 1}
                if(a.name > b.name) {return -1}
                return 0
            })
            return {
                ...state, 
                countries: [...sortNameArray]
            }

        case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries;
            const filter = allCountries.filter(c => c.continent === action.payload)
            return {
                ...state,
                countries: filter
            };

        case POST_ACTIVITY:
            return {
                ...state
            };

        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
                allActivities: action.payload
            }; 

        case FILTER_BY_ACTIVITY:
            const allActivities = state.allActivities
            const findActivity = allActivities.find(a => a.name === action.payload)
                return {
                    ...state,
                    countries: findActivity.Countries
                }
            
        default:
            return {
                ...state
            }
    }
};

export default rootReducer;