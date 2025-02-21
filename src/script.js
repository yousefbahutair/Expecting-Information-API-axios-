axios.get('https://swapi.dev/api/planets/')
.then(({data}) => {
    for( planet of data){
    console.log('PLANET NAME: ', planet.name);
    }
    return axios.get(data.next);
})
.then(({data}) => {
    console.log('ANOTHER PLANETS:\n')
    for(planet of data){
        console.log('PLANET NAME:', planet.name);
    }
})
.catch((err) => {
    console.log('AN ERROR OCURR', err);
})