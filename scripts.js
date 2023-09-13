// /* dekho yaaar jabhi aap js pe kaam kar rahe ho to 
// sabse pahla kaam aapka hona chaiye ki yaar element ko fetch kar lo 
// taki us par operation apply karna aasan ho haye 
// //vansh....
// */

// //  fetch the data
// const usertab=document.querySelector("[data-user-weather]");
// const searchtab=document.querySelector("[data-search-weather]");

// const usercontainer=document.querySelector(".weather-container");
// const grantaccesscontainer=document.querySelector(".grant-location-container");
// const searchtabform=document.querySelector("[data-searchform]");

// const loadingscreen=document.querySelector(".loading-container");

// const userinfocontainer=document.querySelector(".user-info-container");


// let currenttab=usertab;
// const API_KEY="b29291c43aed609f21b64a3cad1bfbb2";

// currenttab.classList.add("currenttab");


// usertab.addEventListener("click",()=>{
//     switchTab(usertab);
// });

// searchtab.addEventListener("click",()=>{
//     switchTab(searchtab);
// });


// function switchTab(clickedTab)
// {
//     if(clickedTab!=currenttab)
//     {
//         currenttab.classList.remove("currenttab");
//         currenttab=clickedTab;
//         currenttab.classList.add("currenttab");

//         if(!searchtabform.classList.contains("active"))
//         {
//             userinfocontainer.classList.remove("active");
//             grantaccesscontainer.classList.remove("active");
//             searchtabform.classList.add("active");

//         }
//         else{
             
//             searchtabform.classList.remove("active");
//             userinfocontainer.classList.remove("active");
//             // grantaccesscontainer.classList.remove("active");
//             getfromsessionStorage();
//         }
//     }
// }

// function getfromsessionStorage()
// {
//     const localCordinates=sessionStorage.getItem("user-cordinates");
//     if(!localCordinates)
//     {
//         grantaccesscontainer.classList.add("active");

//     }
//     else{
//         //json.parse se jo text hota hai wo javascript ke object me convert ho jata hai
//         const cordinates=JSON.parse(localCordinates);
//         fetchuserweatherinfo(cordinates);
//     }
// }

// async function fetchuserweatherinfo(cordinates)
// {
//     const {lat,lon}=cordinates;
//     grantaccesscontainer.classList.remove("active");
//     loadingscreen.classList.add("active");
//     //api call
//     try{

//         const res=await fetch( `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
//         let data=await res.json();
//         loadingscreen.classList.remove("active");
//         userinfocontainer.classList.add("active");

//         renderweatherinfo(data);
//     }
//     catch(err)
//     {
//         loadingscreen.classList.remove("active");
//         // grantaccesscontainer.classList.add("active");
//     }


// }

// function renderweatherinfo(weatherinfo)
// {
//     //firstly we have to fetch the data from html
//     // then set the ui

//     const cityName = document.querySelector("[data-city-name]");
//     const countryIcon = document.querySelector("[data-country-icon]");
//     const desc = document.querySelector("[data-weatherDesc]");
//     const weatherIcon = document.querySelector("[data-weather-icon]");
//     const temp = document.querySelector("[data-temperature]");
//     const windspeed = document.querySelector("[data-windspeed]");
//     const humidity = document.querySelector("[data-humidity]");
//     const cloudiness = document.querySelector("[data-cloud]");



//     //set  the ui 
//     cityName.innerText = weatherinfo?.name;
//     countryIcon.src = `https://flagcdn.com/144x108/${weatherinfo?.sys?.country.toLowerCase()}.png`;
//     desc.innerText = weatherinfo?.weather?.[0]?.description;
//     weatherIcon.src = `http://openweathermap.org/img/w/${weatherinfo?.weather?.[0]?.icon}.png`;
//     temp.innerText = `${weatherinfo?.main?.temp} °C`;
//     windspeed.innerText = `${weatherinfo?.wind?.speed} m/s`;
//     humidity.innerText = `${weatherinfo?.main?.humidity}%`;
//     cloudiness.innerText = `${weatherinfo?.clouds?.all}%`;
// }


// function getlocation()
// {
//     if(navigator.geolocation)
//     {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else{
//         alert("you have not allow the location");
//     }
// }
// const grantaccessbtn=document.querySelector(["data-grantAcces-btn"]);
// grantaccessbtn.addEventListener("click",getlocation);


// function showPosition(position) {

//     const userCoordinates = {
//         lat: position.coords.latitude,
//         lon: position.coords.longitude,
//     }

//     sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));

//     fetchuserweatherinfo(userCoordinates);

// }

// const searchInput = document.querySelector("[data-searchInput]");

// searchtabform.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let cityName = searchInput.value;

//     if(cityName === "")
//         return;
//     else 
//         fetchSearchWeatherInfo(cityName);
// });

// async function fetchSearchWeatherInfo(city) {
//     loadingscreen.classList.add("active");
//     userinfocontainer.classList.remove("active");
//     grantaccesscontainer.classList.remove("active");

//     try {
//         const response = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//           );
//         const data = await response.json();
//         loadingscreen.classList.remove("active");
//         userinfocontainer.classList.add("active");
//         renderweatherinfo(data);
//     }
//     catch(err) {
//         //hW
//     }
// }

const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

//initially vairables need????

let oldTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
oldTab.classList.add("current-tab");
getfromSessionStorage();

function switchTab(newTab) {
    if(newTab != oldTab) {
        oldTab.classList.remove("current-tab");
        oldTab = newTab;
        oldTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")) {
            //kya search form wala container is invisible, if yes then make it visible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else {
            //main pehle search wale tab pr tha, ab your weather tab visible karna h 
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            //ab main your weather tab me aagya hu, toh weather bhi display karna poadega, so let's check local storage first
            //for coordinates, if we haved saved them there.
            getfromSessionStorage();
        }
    }
}

userTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(searchTab);
});

//check if cordinates are already present in session storage
function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates) {
        //agar local coordinates nahi mile
        grantAccessContainer.classList.add("active");
    }
    else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }

}

async function fetchUserWeatherInfo(coordinates) {
    const {lat, lon} = coordinates;
    // make grantcontainer invisible
    grantAccessContainer.classList.remove("active");
    //make loader visible
    loadingScreen.classList.add("active");

    //API CALL
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );
        const  data = await response.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        loadingScreen.classList.remove("active");
        //HW

    }

}

function renderWeatherInfo(weatherInfo) {
    //fistly, we have to fethc the elements 

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    console.log(weatherInfo);

    //fetch values from weatherINfo object and put it UI elements
    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;


}

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        //HW - show an alert for no gelolocation support available
    }
}

function showPosition(position) {

    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);

}

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);

const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;

    if(cityName === "")
        return;
    else 
        fetchSearchWeatherInfo(cityName);
})

async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        //hW
    }
}