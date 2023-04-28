const regexName = new RegExp("[a-zA-Z ]{2,254}"); //eXpresion regular para que no contenga numeros ni caracteres especiales
const regexDuration = new RegExp("^[0-2][0-9]:[0-5][0-9]$")//expresion regular para que tenga el formato hh:mm

const validation = (input) => {
    let errors = {}
    //validacion del nombre
    if(!input.name) {errors.name = 'You must enter a name for the tourist activity'}
    else if(!regexName.test(input.name)) {errors.name = 'The name of the activity must not contain numbers'}
    else if(input.name.length < 3) {errors.name = 'The name of the activity must not have more than 3 characters'}
    else if(input.name.length > 25) {errors.name = 'The name of the activity is too long'}
    //validacion de la dificultad
    if(!input.difficulty) {errors.difficulty= 'You must choose a level of difficulty for the activity'}
    //validacion de la  duracion    
    let time = input.duration;
    let hr = time.split(':')[0]
    if(!input.duration) {errors.duration= 'You must assign a duration time for the activity'}
    if(!regexDuration.test(input.duration)) {errors.duration = 'The duration must have the format hh : mm'}
    console.log(regexDuration.test(input.duration));
    if(hr >= 12) {errors.duration= 'The duration cannot be greater than 11:59hr'}
//validacion de la temporada   
    if(!input.season) {errors.season = 'You must choise the season in which the activity is carried out'}
//validacion de la eleccion de paises   
    if(!input.countryId.length) {errors.countryId = 'You must indicate at least one country where the activity is carried out'}

    
 return errors
}

export default validation