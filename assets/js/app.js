
let today = new Date().toLocaleString();
data.innerHTML = today;

const URL1 = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

let ratesNBU = await fetch(URL1);
ratesNBU = await ratesNBU.json();

const URL2 = 'https://restcountries.com/v3.1/all';

let countries = await fetch(URL2);
countries = await countries.json();

countries = countries.filter(item => item.currencies)
                    .map(item => ({
                        title: item.name.common,
                        flag: item.flags.svg,
                        cc: Object.keys(item.currencies)
                    }));
                    console.log(countries);

for(let key of ratesNBU) {
                        key.countries = countries.filter(item => item.cc.includes(key.cc));
                    } 
                    
                    console.log(ratesNBU);

ratesNBU.forEach(element => {

output.innerHTML = ratesNBU.map(item => `

                                <tr class="table-bordered border border-secondary">
                                    <td>${item.txt}</td>
                                    <td>${item.rate}</td>  
                                        ${item.countries.map(item => `
                                    <td><img src=" 
                                        ${item.flag}" 
                                        title="${item.title}" 
                                        alt= "flag"
                                        class="border border-dark">
                                    </td>`).join('')}       
                    
                            `).join('');
    
});

