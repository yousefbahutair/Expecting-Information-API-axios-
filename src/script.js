const fetchNextPlanets = (url) => {
    console.log(url);
    return axios.get(url);
}
const printPlanets = ({data}) => {
    console.log(data);
    for(let planet of data){
        console.log("PLANET NAME:", planet.name)
    }
    return Promise.resolve(data.next)
}
const morePlanets = ({data}) => {
    console.log(data);
    console.log("ANOTHER PLANETS:\n");
    for(let planet of data){
        console.log("PLANET NAME:", planet.name)
    }
}

fetchNextPlanets('https://swapi.dev/api/planets/')
.then(printPlanets)
.then(fetchNextPlanets)
.then(morePlanets)
.catch((err) => {
    console.log('AN ERROR OCURR', err);
})