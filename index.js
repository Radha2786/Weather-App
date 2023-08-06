const f = document.querySelector('form');
const APIKey= "dc988be56cf71167a5cc501e7ea3f789" ;
f.addEventListener('submit',(e)=>{
    e.preventDefault();
    // console.dir(f.elements[0].value);
    // console.log('submitted');
    const inpText=f.elements[0].value;
    getWeather(inpText,APIKey);
})

function getWeather(searchText,APIKey){
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${APIKey}&units=metric`
    axios.get(url).then((res)=>{
        console.log(res);
        cityName.innerHTML= res.data.name ;
       Temp.innerHTML= res.data.main.temp;
       windspeed.innerHTML=res.data.wind.speed
       humidity.innerHTML=res.data.main.humidity;
       cloudy.innerHTML=res.data.weather[0].description;
    })
 
}

getWeather("Delhi","dc988be56cf71167a5cc501e7ea3f789");
  