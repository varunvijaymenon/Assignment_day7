var XMLHttpRequest = require('xhr2');

let url = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json'

var asian_countries = new Array();
var xhr = new XMLHttpRequest();
xhr.open('GET', url)

xhr.send();

xhr.onload = function(){

    if(xhr.status === 200){
        let data = JSON.parse(this.responseText);

        function asia_filter(value){
            return value.region.toLowerCase() === "asia"
        }

        let filtered = data.filter(asia_filter);
        
        for (let i = 0; i < filtered.length; i++){
            asian_countries.push(filtered[i].name);
        }
        
        console.log(asian_countries);
    }
};  

/*output: [
  'Afghanistan',
  'Armenia',
  'Azerbaijan',
  'Bahrain',
  'Bangladesh',
  'Bhutan',
  'Brunei Darussalam',
  'Cambodia',
  'China',
  'Georgia',
  'Hong Kong',
  'India',
  'Indonesia',
  'Iran (Islamic Republic of)',
  'Iraq',
  'Israel',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kuwait',
  'Kyrgyzstan',
  "Lao People's Democratic Republic",
  'Lebanon',
  'Macao',
  'Malaysia',
  'Maldives',
  'Mongolia',
  'Myanmar',
  'Nepal',
  "Korea (Democratic People's Republic of)",
  'Oman',
  'Pakistan',
  'Palestine, State of',
  'Philippines',
  'Qatar',
  'Saudi Arabia',
  'Singapore',
  'Korea (Republic of)',
  'Sri Lanka',
  'Syrian Arab Republic',
  'Taiwan',
  'Tajikistan',
  'Thailand',
  'Timor-Leste',
  'Turkey',
  'Turkmenistan',
  'United Arab Emirates',
  'Uzbekistan',
  'Viet Nam',
  'Yemen'
]*/