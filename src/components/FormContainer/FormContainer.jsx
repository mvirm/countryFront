//creo la logica para el renderizado del form, creo los estados locales input y errors, seto los estado locales con el inputHandler, despacho el submit seteando los estado globales al estado inicial
import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styles from './FormContainer.module.css'
import {useNavigate } from 'react-router-dom';
import { postActivity } from '../../redux/actions';
import validation from './validation';
import imagenSuccess from '../img/imagenSuccess.png'

const FormContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const countries = useSelector(state => state.countries);
    const sortCountries = countries.sort((a, b) => {
        if(a.name > b.name) {return 1}
        if(b.name > a.name) {return -1}
        return 0
    })
    const levelsDiff = [1, 2, 3, 4, 5];
    const seasons = ['Summer', 'Autumn', 'Winter', 'Spring'];

    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countryId: []
    });

    const [errors, setErrors] = useState({        
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countryId: ''
    });

    const [formComplete, setFormComplete] = useState(false);
    const [success, setSuccess] = useState(false);

    const inputHandler = (e) => {
        if(e.target.name === 'countryId'){
            setInput({
                ...input,
                countryId: [...input.countryId, e.target.value]//traigo todo lo que esta en el array y le concateno el nuevo valor
                
            })  
        } else {
            setInput({
                ...input,
                [e.target.name] : e.target.value
            });
        }
        setErrors(validation({
            ...input,
            [e.target.name]: e.target.value
        }));
    };

    useEffect(() => {
        let values = Object.values(input);
        let notComplete = values.filter( value => value === "" || value === [])
        let error = Object.keys(errors);

        if(!notComplete.length && !error.length) setFormComplete(true)
    }, [input, errors])

    const deleteHandler = (id) => {
        setInput({
            ...input,
            countryId: input.countryId.filter(c => c !== id)
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(formComplete) {
            dispatch(postActivity(input));
            setSuccess(true);
            setInput({
                name: '',
                difficulty: '',
                duration: '',
                season: '',
                countryId: [], 
            });
            setErrors({
                name: '',
                difficulty: '',
                duration: '',
                season: '',
                countryId: ''  
            });  
            setTimeout(function(){
                navigate('/home') //una vez enviado el form me redirige a home  
            }, 2000)

        } else {
            alert('missing or incorrect data');
        }
    }

   return(
    <div className={styles.contenedor}>
    <div className={styles.img}>
        <div className={styles.titulo}>
            <h4 className={styles.subtitulo}>Create a...</h4>
            <h3 className={styles.titulo1}>Tourist Activity</h3>
        </div>
        <div className={styles.anclaje}>
            <button className={styles.btnHome} onClick={() => navigate('/home')}>Go Home</button><span className={styles.span}>...or complete this form</span>
        </div>
        <form onSubmit={submitHandler} className={styles.form}>
            {success && <img classname={styles.success} src={imagenSuccess} alt='form submitted successfully'/> }
            {!success && <div>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input  className={styles.option} id='name' type='text'  value={input.name} name='name' placeholder='of tourist activity' onChange={inputHandler}/>
                    {errors.name ? <p className={styles.vDanger}>{errors.name}</p> : null}
                </div>
                <div>
                    <label htmlFor='difficulty'>Difficulty:</label>
                    <select className={styles.option} name='difficulty' id='difficulty' onChange={inputHandler}>
                        <option value='' readOnly hidden>choose...</option>
                        {levelsDiff.map(level => {
                            return(
                                <option key={level} value={level}>{level}</option>
                            )
                        })}
                    </select>
                    {errors.difficulty ? <p className={styles.vDanger}>{errors.difficulty}</p> : null}  
                </div>    
                <div>
                    <label htmlFor='duration'>Duration:</label>
                    <input  className={styles.option} id= 'duration'type='text' value={input.duration} name='duration' placeholder='hh:mm format' onChange={inputHandler}/>
                    {errors.duration ? <p className={styles.vDanger}>{errors.duration}</p> : null}
                </div>
                <div>
                    <label htmlFor='season'>Season:</label>
                    <select className={styles.option} id='season' name='season' onChange={inputHandler}>
                        <option value='' readOnly hidden>choose...</option>
                        {seasons.map(season => {
                            return(
                                <option key={season} value={season}>{season}</option>
                            )
                        })}
                    </select>
                    {errors.season ? <p className={styles.vDanger}>{errors.season}</p> : null}
                </div>
                <div>
                    <label htmlFor='countryId'>Countries where it is performed:</label>
                    <select className={styles.optionCountries} name='countryId' id='countryId' onChange={inputHandler}>
                        <option value='' readOnly hidden>choose one or more...</option>
                        {sortCountries && sortCountries.map(country => {
                            return(
                                <option key={country.id} value={country.id}>{country.id}-{country.name}</option>
                            )})
                        }
                    </select>
                    {errors.countryId ? <p className={styles.vDanger}>{errors.countryId}</p> : null}
                </div>
            </div>}
            <button className={formComplete ? styles.btnCreate : styles.btnInhabilitado} disabled={!formComplete} type='submit'>Create</button>
                
        </form>
            <div className={styles.countriesSelected}>
                {input.countryId.length ? <label className={styles.label} htmlFor='selected'>Selected countries</label> : null}
                {input.countryId.map(id => {
                    return(
                        <div className={styles.id}>
                                <p key={id}>{id}</p>
                                <button className={styles.btnDelete} onClick={() => deleteHandler(id)}>x</button>
                            </div>
                        )
                    })}
                </div>
                
    </div>

    </div>
   )
}

export default FormContainer

