'use strict'

async function getCountryData() {
    let url = 'https://restcountries.com/v3.1/region/asia';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderCountry() {
    let countries = await getCountryData();
    let html = '';
    countries.find(data => { 
        let language = Object.values(data.languages) 
      let htmlSegment = `
                    <div class="card">
                        <div class="card-inner">
                            <div class="card-front">
                                 <img src="${data.flags.png}" alt="Flag" style="width:200px;height:200px;">
                            </div>
                            <div class="card-back">
                                <h3>${data.name.common}</h3> 
                                <p>${data.subregion}</p> 
                                <p>Lang: ${language}</p>
                                <p>${(+data.population / 1000000).toFixed(2)} people</p>
                            </div>
                         </div>
                     </div>
                                `
        html += htmlSegment;
    })
    let wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML = html;
}

renderCountry()
