var XMLHttpRequest = require('xhr2');

let url = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json'

var xhr = new XMLHttpRequest();
xhr.open('GET', url)

xhr.send();

xhr.onload = function(){

    if(xhr.status === 200){
        let data = JSON.parse(this.responseText);

        let total_population = data.reduce((acc, element) => acc + element.population,0)
        console.log(total_population);
    }
};  

// output: 7349137231