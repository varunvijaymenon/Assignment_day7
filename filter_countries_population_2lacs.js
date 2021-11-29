var XMLHttpRequest = require('xhr2');

let url = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json'

var countries = new Array();
var xhr = new XMLHttpRequest();
xhr.open('GET', url)

xhr.send();

xhr.onload = function(){

    if(xhr.status === 200){
        let data = JSON.parse(this.responseText)

        let filtered = data.filter(element => element.population < 200000)
         
        for (let i=0; i<filtered.length; i++){
            countries.push(filtered[i].name)
        }
        console.log(countries);
    }
};  

/* output: [
  'Åland Islands',
  'American Samoa',
  'Andorra',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Aruba',
  'Bermuda',
  'Bonaire, Sint Eustatius and Saba',
  'Bouvet Island',
  'British Indian Ocean Territory',
  'United States Minor Outlying Islands',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Cayman Islands',
  'Christmas Island',
  'Cocos (Keeling) Islands',
  'Cook Islands',
  'Curaçao',
  'Dominica',
  'Falkland Islands (Malvinas)',
  'Faroe Islands',
  'French Southern Territories',
  'Gibraltar',
  'Greenland',
  'Grenada',
  'Guam',
  'Guernsey',
  'Heard Island and McDonald Islands',
  'Holy See',
  'Isle of Man',
  'Jersey',
  'Kiribati',
  'Liechtenstein',
  'Marshall Islands',
  'Micronesia (Federated States of)',
  'Monaco',
  'Montserrat',
  'Nauru',
  'Niue',
  'Norfolk Island',
  'Northern Mariana Islands',
  'Palau',
  'Pitcairn',
  'Saint Barthélemy',
  'Saint Helena, Ascension and Tristan da Cunha',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin (French part)',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Seychelles',
  'Sint Maarten (Dutch part)',
  'South Georgia and the South Sandwich Islands',
  'Svalbard and Jan Mayen',
  'Tokelau',
  'Tonga',
  'Turks and Caicos Islands',
  'Tuvalu',
  'Wallis and Futuna'
] */