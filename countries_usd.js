var XMLHttpRequest = require('xhr2');

let url = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json'

var countries_USD_currency = new Array();
var xhr = new XMLHttpRequest();
xhr.open('GET', url)

xhr.send();

xhr.onload = function(){

    if(xhr.status === 200){
        let data = JSON.parse(this.responseText);

        function currency_filter(value){
            let currency_list = value.currencies;

            for (let i = 0; i < currency_list.length; i++){
                if(currency_list[i].code == "USD"){
                    return true;
                }
            }
        }

        let filtered = data.filter(currency_filter);
        
        for (let i = 0; i < filtered.length; i++){
            countries_USD_currency.push(filtered[i].name);
        }
        
        console.log(countries_USD_currency);
    }
};  

/*ouput: [
  'American Samoa',
  'Bonaire, Sint Eustatius and Saba',
  'British Indian Ocean Territory',
  'United States Minor Outlying Islands',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Cambodia',
  'Ecuador',
  'El Salvador',
  'Guam',
  'Marshall Islands',
  'Micronesia (Federated States of)',
  'Northern Mariana Islands',
  'Palau',
  'Panama',
  'Puerto Rico',
  'Timor-Leste',
  'Turks and Caicos Islands',
  'United States of America',
  'Zimbabwe'
] */