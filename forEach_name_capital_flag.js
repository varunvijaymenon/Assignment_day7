var XMLHttpRequest = require('xhr2');

let url = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json'

var xhr = new XMLHttpRequest();
xhr.open('GET', url)

xhr.send();

xhr.onload = function(){

    if(xhr.status === 200){
        let data = JSON.parse(this.responseText);

        data.forEach(element => console.log(element.name, element.capital, element.flag))
    }
};  

/* output: Afghanistan Kabul https://restcountries.eu/data/afg.svg
Åland Islands Mariehamn https://restcountries.eu/data/ala.svg
Albania Tirana https://restcountries.eu/data/alb.svg
Algeria Algiers https://restcountries.eu/data/dza.svg
American Samoa Pago Pago https://restcountries.eu/data/asm.svg
Andorra Andorra la Vella https://restcountries.eu/data/and.svg
Angola Luanda https://restcountries.eu/data/ago.svg
Anguilla The Valley https://restcountries.eu/data/aia.svg
Antarctica  https://restcountries.eu/data/ata.svg
Antigua and Barbuda Saint John's https://restcountries.eu/data/atg.svg
Argentina Buenos Aires https://restcountries.eu/data/arg.svg
Armenia Yerevan https://restcountries.eu/data/arm.svg
Aruba Oranjestad https://restcountries.eu/data/abw.svg
Australia Canberra https://restcountries.eu/data/aus.svg
Austria Vienna https://restcountries.eu/data/aut.svg
Azerbaijan Baku https://restcountries.eu/data/aze.svg
Bahamas Nassau https://restcountries.eu/data/bhs.svg
Bahrain Manama https://restcountries.eu/data/bhr.svg
Bangladesh Dhaka https://restcountries.eu/data/bgd.svg
Barbados Bridgetown https://restcountries.eu/data/brb.svg
Belarus Minsk https://restcountries.eu/data/blr.svg
Belgium Brussels https://restcountries.eu/data/bel.svg
Belize Belmopan https://restcountries.eu/data/blz.svg
Benin Porto-Novo https://restcountries.eu/data/ben.svg
Bermuda Hamilton https://restcountries.eu/data/bmu.svg
Bhutan Thimphu https://restcountries.eu/data/btn.svg
Bolivia (Plurinational State of) Sucre https://restcountries.eu/data/bol.svg
Bonaire, Sint Eustatius and Saba Kralendijk https://restcountries.eu/data/bes.svg
Bosnia and Herzegovina Sarajevo https://restcountries.eu/data/bih.svg
Botswana Gaborone https://restcountries.eu/data/bwa.svg
Bouvet Island  https://restcountries.eu/data/bvt.svg
Brazil Brasília https://restcountries.eu/data/bra.svg
British Indian Ocean Territory Diego Garcia https://restcountries.eu/data/iot.svg
United States Minor Outlying Islands  https://restcountries.eu/data/umi.svg
Virgin Islands (British) Road Town https://restcountries.eu/data/vgb.svg
Virgin Islands (U.S.) Charlotte Amalie https://restcountries.eu/data/vir.svg
Brunei Darussalam Bandar Seri Begawan https://restcountries.eu/data/brn.svg
Bulgaria Sofia https://restcountries.eu/data/bgr.svg
Burkina Faso Ouagadougou https://restcountries.eu/data/bfa.svg
Burundi Bujumbura https://restcountries.eu/data/bdi.svg
Cambodia Phnom Penh https://restcountries.eu/data/khm.svg
Cameroon Yaoundé https://restcountries.eu/data/cmr.svg
Canada Ottawa https://restcountries.eu/data/can.svg
Cabo Verde Praia https://restcountries.eu/data/cpv.svg
Cayman Islands George Town https://restcountries.eu/data/cym.svg
Central African Republic Bangui https://restcountries.eu/data/caf.svg
Chad N'Djamena https://restcountries.eu/data/tcd.svg
Chile Santiago https://restcountries.eu/data/chl.svg
China Beijing https://restcountries.eu/data/chn.svg
Christmas Island Flying Fish Cove https://restcountries.eu/data/cxr.svg
Cocos (Keeling) Islands West Island https://restcountries.eu/data/cck.svg
Colombia Bogotá https://restcountries.eu/data/col.svg
Comoros Moroni https://restcountries.eu/data/com.svg
Congo Brazzaville https://restcountries.eu/data/cog.svg
Congo (Democratic Republic of the) Kinshasa https://restcountries.eu/data/cod.svg
Cook Islands Avarua https://restcountries.eu/data/cok.svg
Costa Rica San José https://restcountries.eu/data/cri.svg
Croatia Zagreb https://restcountries.eu/data/hrv.svg
Cuba Havana https://restcountries.eu/data/cub.svg
Curaçao Willemstad https://restcountries.eu/data/cuw.svg
Cyprus Nicosia https://restcountries.eu/data/cyp.svg
Czech Republic Prague https://restcountries.eu/data/cze.svg
Denmark Copenhagen https://restcountries.eu/data/dnk.svg
Djibouti Djibouti https://restcountries.eu/data/dji.svg
Dominica Roseau https://restcountries.eu/data/dma.svg
Dominican Republic Santo Domingo https://restcountries.eu/data/dom.svg
Ecuador Quito https://restcountries.eu/data/ecu.svg
Egypt Cairo https://restcountries.eu/data/egy.svg
El Salvador San Salvador https://restcountries.eu/data/slv.svg
Equatorial Guinea Malabo https://restcountries.eu/data/gnq.svg
Eritrea Asmara https://restcountries.eu/data/eri.svg
Estonia Tallinn https://restcountries.eu/data/est.svg
Ethiopia Addis Ababa https://restcountries.eu/data/eth.svg
Falkland Islands (Malvinas) Stanley https://restcountries.eu/data/flk.svg
Faroe Islands Tórshavn https://restcountries.eu/data/fro.svg
Fiji Suva https://restcountries.eu/data/fji.svg
Finland Helsinki https://restcountries.eu/data/fin.svg
France Paris https://restcountries.eu/data/fra.svg
French Guiana Cayenne https://restcountries.eu/data/guf.svg
French Polynesia Papeetē https://restcountries.eu/data/pyf.svg
French Southern Territories Port-aux-Français https://restcountries.eu/data/atf.svg
Gabon Libreville https://restcountries.eu/data/gab.svg
Gambia Banjul https://restcountries.eu/data/gmb.svg
Georgia Tbilisi https://restcountries.eu/data/geo.svg
Germany Berlin https://restcountries.eu/data/deu.svg
Ghana Accra https://restcountries.eu/data/gha.svg
Gibraltar Gibraltar https://restcountries.eu/data/gib.svg
Greece Athens https://restcountries.eu/data/grc.svg
Greenland Nuuk https://restcountries.eu/data/grl.svg
Grenada St. George's https://restcountries.eu/data/grd.svg
Guadeloupe Basse-Terre https://restcountries.eu/data/glp.svg
Guam Hagåtña https://restcountries.eu/data/gum.svg
Guatemala Guatemala City https://restcountries.eu/data/gtm.svg
Guernsey St. Peter Port https://restcountries.eu/data/ggy.svg
Guinea Conakry https://restcountries.eu/data/gin.svg
Guinea-Bissau Bissau https://restcountries.eu/data/gnb.svg
Guyana Georgetown https://restcountries.eu/data/guy.svg
Haiti Port-au-Prince https://restcountries.eu/data/hti.svg
Heard Island and McDonald Islands  https://restcountries.eu/data/hmd.svg
Holy See Rome https://restcountries.eu/data/vat.svg
Honduras Tegucigalpa https://restcountries.eu/data/hnd.svg
Hong Kong City of Victoria https://restcountries.eu/data/hkg.svg
Hungary Budapest https://restcountries.eu/data/hun.svg
Iceland Reykjavík https://restcountries.eu/data/isl.svg
India New Delhi https://restcountries.eu/data/ind.svg
Indonesia Jakarta https://restcountries.eu/data/idn.svg
Côte d'Ivoire Yamoussoukro https://restcountries.eu/data/civ.svg
Iran (Islamic Republic of) Tehran https://restcountries.eu/data/irn.svg
Iraq Baghdad https://restcountries.eu/data/irq.svg
Ireland Dublin https://restcountries.eu/data/irl.svg
Isle of Man Douglas https://restcountries.eu/data/imn.svg
Israel Jerusalem https://restcountries.eu/data/isr.svg
Italy Rome https://restcountries.eu/data/ita.svg
Jamaica Kingston https://restcountries.eu/data/jam.svg
Japan Tokyo https://restcountries.eu/data/jpn.svg
Jersey Saint Helier https://restcountries.eu/data/jey.svg
Jordan Amman https://restcountries.eu/data/jor.svg
Kazakhstan Astana https://restcountries.eu/data/kaz.svg
Kenya Nairobi https://restcountries.eu/data/ken.svg
Kiribati South Tarawa https://restcountries.eu/data/kir.svg
Kuwait Kuwait City https://restcountries.eu/data/kwt.svg
Kyrgyzstan Bishkek https://restcountries.eu/data/kgz.svg
Lao People's Democratic Republic Vientiane https://restcountries.eu/data/lao.svg
Latvia Riga https://restcountries.eu/data/lva.svg
Lebanon Beirut https://restcountries.eu/data/lbn.svg
Lesotho Maseru https://restcountries.eu/data/lso.svg
Liberia Monrovia https://restcountries.eu/data/lbr.svg
Libya Tripoli https://restcountries.eu/data/lby.svg
Liechtenstein Vaduz https://restcountries.eu/data/lie.svg
Lithuania Vilnius https://restcountries.eu/data/ltu.svg
Luxembourg Luxembourg https://restcountries.eu/data/lux.svg
Macao  https://restcountries.eu/data/mac.svg
Macedonia (the former Yugoslav Republic of) Skopje https://restcountries.eu/data/mkd.svg
Madagascar Antananarivo https://restcountries.eu/data/mdg.svg
Malawi Lilongwe https://restcountries.eu/data/mwi.svg
Malaysia Kuala Lumpur https://restcountries.eu/data/mys.svg
Maldives Malé https://restcountries.eu/data/mdv.svg
Mali Bamako https://restcountries.eu/data/mli.svg
Malta Valletta https://restcountries.eu/data/mlt.svg
Marshall Islands Majuro https://restcountries.eu/data/mhl.svg
Martinique Fort-de-France https://restcountries.eu/data/mtq.svg
Mauritania Nouakchott https://restcountries.eu/data/mrt.svg
Mauritius Port Louis https://restcountries.eu/data/mus.svg
Mayotte Mamoudzou https://restcountries.eu/data/myt.svg
Mexico Mexico City https://restcountries.eu/data/mex.svg
Micronesia (Federated States of) Palikir https://restcountries.eu/data/fsm.svg
Moldova (Republic of) Chișinău https://restcountries.eu/data/mda.svg
Monaco Monaco https://restcountries.eu/data/mco.svg
Mongolia Ulan Bator https://restcountries.eu/data/mng.svg
Montenegro Podgorica https://restcountries.eu/data/mne.svg
Montserrat Plymouth https://restcountries.eu/data/msr.svg
Morocco Rabat https://restcountries.eu/data/mar.svg
Mozambique Maputo https://restcountries.eu/data/moz.svg
Myanmar Naypyidaw https://restcountries.eu/data/mmr.svg
Namibia Windhoek https://restcountries.eu/data/nam.svg
Nauru Yaren https://restcountries.eu/data/nru.svg
Nepal Kathmandu https://restcountries.eu/data/npl.svg
Netherlands Amsterdam https://restcountries.eu/data/nld.svg
New Caledonia Nouméa https://restcountries.eu/data/ncl.svg
New Zealand Wellington https://restcountries.eu/data/nzl.svg
Nicaragua Managua https://restcountries.eu/data/nic.svg
Niger Niamey https://restcountries.eu/data/ner.svg
Nigeria Abuja https://restcountries.eu/data/nga.svg
Niue Alofi https://restcountries.eu/data/niu.svg
Norfolk Island Kingston https://restcountries.eu/data/nfk.svg
Korea (Democratic People's Republic of) Pyongyang https://restcountries.eu/data/prk.svg
Northern Mariana Islands Saipan https://restcountries.eu/data/mnp.svg
Norway Oslo https://restcountries.eu/data/nor.svg
Oman Muscat https://restcountries.eu/data/omn.svg
Pakistan Islamabad https://restcountries.eu/data/pak.svg
Palau Ngerulmud https://restcountries.eu/data/plw.svg
Palestine, State of Ramallah https://restcountries.eu/data/pse.svg
Panama Panama City https://restcountries.eu/data/pan.svg
Papua New Guinea Port Moresby https://restcountries.eu/data/png.svg
Paraguay Asunción https://restcountries.eu/data/pry.svg
Peru Lima https://restcountries.eu/data/per.svg
Philippines Manila https://restcountries.eu/data/phl.svg
Pitcairn Adamstown https://restcountries.eu/data/pcn.svg
Poland Warsaw https://restcountries.eu/data/pol.svg
Portugal Lisbon https://restcountries.eu/data/prt.svg
Puerto Rico San Juan https://restcountries.eu/data/pri.svg
Qatar Doha https://restcountries.eu/data/qat.svg
Republic of Kosovo Pristina https://restcountries.eu/data/kos.svg
Réunion Saint-Denis https://restcountries.eu/data/reu.svg
Romania Bucharest https://restcountries.eu/data/rou.svg
Russian Federation Moscow https://restcountries.eu/data/rus.svg
Rwanda Kigali https://restcountries.eu/data/rwa.svg
Saint Barthélemy Gustavia https://restcountries.eu/data/blm.svg
Saint Helena, Ascension and Tristan da Cunha Jamestown https://restcountries.eu/data/shn.svg
Saint Kitts and Nevis Basseterre https://restcountries.eu/data/kna.svg
Saint Lucia Castries https://restcountries.eu/data/lca.svg
Saint Martin (French part) Marigot https://restcountries.eu/data/maf.svg
Saint Pierre and Miquelon Saint-Pierre https://restcountries.eu/data/spm.svg
Saint Vincent and the Grenadines Kingstown https://restcountries.eu/data/vct.svg
Samoa Apia https://restcountries.eu/data/wsm.svg
San Marino City of San Marino https://restcountries.eu/data/smr.svg
Sao Tome and Principe São Tomé https://restcountries.eu/data/stp.svg
Saudi Arabia Riyadh https://restcountries.eu/data/sau.svg
Senegal Dakar https://restcountries.eu/data/sen.svg
Serbia Belgrade https://restcountries.eu/data/srb.svg
Seychelles Victoria https://restcountries.eu/data/syc.svg
Sierra Leone Freetown https://restcountries.eu/data/sle.svg
Singapore Singapore https://restcountries.eu/data/sgp.svg
Sint Maarten (Dutch part) Philipsburg https://restcountries.eu/data/sxm.svg
Slovakia Bratislava https://restcountries.eu/data/svk.svg
Slovenia Ljubljana https://restcountries.eu/data/svn.svg
Solomon Islands Honiara https://restcountries.eu/data/slb.svg
Somalia Mogadishu https://restcountries.eu/data/som.svg
South Africa Pretoria https://restcountries.eu/data/zaf.svg
South Georgia and the South Sandwich Islands King Edward Point https://restcountries.eu/data/sgs.svg
Korea (Republic of) Seoul https://restcountries.eu/data/kor.svg
South Sudan Juba https://restcountries.eu/data/ssd.svg
Spain Madrid https://restcountries.eu/data/esp.svg
Sri Lanka Colombo https://restcountries.eu/data/lka.svg
Sudan Khartoum https://restcountries.eu/data/sdn.svg
Suriname Paramaribo https://restcountries.eu/data/sur.svg
Svalbard and Jan Mayen Longyearbyen https://restcountries.eu/data/sjm.svg
Swaziland Lobamba https://restcountries.eu/data/swz.svg
Sweden Stockholm https://restcountries.eu/data/swe.svg
Switzerland Bern https://restcountries.eu/data/che.svg
Syrian Arab Republic Damascus https://restcountries.eu/data/syr.svg
Taiwan Taipei https://restcountries.eu/data/twn.svg
Tajikistan Dushanbe https://restcountries.eu/data/tjk.svg
Tanzania, United Republic of Dodoma https://restcountries.eu/data/tza.svg
Thailand Bangkok https://restcountries.eu/data/tha.svg
Timor-Leste Dili https://restcountries.eu/data/tls.svg
Togo Lomé https://restcountries.eu/data/tgo.svg
Tokelau Fakaofo https://restcountries.eu/data/tkl.svg
Tonga Nuku'alofa https://restcountries.eu/data/ton.svg
Trinidad and Tobago Port of Spain https://restcountries.eu/data/tto.svg
Tunisia Tunis https://restcountries.eu/data/tun.svg
Turkey Ankara https://restcountries.eu/data/tur.svg
Turkmenistan Ashgabat https://restcountries.eu/data/tkm.svg
Turks and Caicos Islands Cockburn Town https://restcountries.eu/data/tca.svg
Tuvalu Funafuti https://restcountries.eu/data/tuv.svg
Uganda Kampala https://restcountries.eu/data/uga.svg
Ukraine Kiev https://restcountries.eu/data/ukr.svg
United Arab Emirates Abu Dhabi https://restcountries.eu/data/are.svg
United Kingdom of Great Britain and Northern Ireland London https://restcountries.eu/data/gbr.svg
United States of America Washington, D.C. https://restcountries.eu/data/usa.svg
Uruguay Montevideo https://restcountries.eu/data/ury.svg
Uzbekistan Tashkent https://restcountries.eu/data/uzb.svg
Vanuatu Port Vila https://restcountries.eu/data/vut.svg
Venezuela (Bolivarian Republic of) Caracas https://restcountries.eu/data/ven.svg
Viet Nam Hanoi https://restcountries.eu/data/vnm.svg
Wallis and Futuna Mata-Utu https://restcountries.eu/data/wlf.svg
Western Sahara El Aaiún https://restcountries.eu/data/esh.svg
Yemen Sana'a https://restcountries.eu/data/yem.svg
Zambia Lusaka https://restcountries.eu/data/zmb.svg
Zimbabwe Harare https://restcountries.eu/data/zwe.svg */