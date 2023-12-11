
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('mainMenu')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
const scrollRevealOption = {
    distance: "200px",
    origin: "top",
    duraration: 2000,
    
};
const scrollRevealOption1 = {
    distance: "400px",
    origin: "left",
    duraration: 2000,
    
};
const scrollRevealOption2 = {
    distance: "800px",
    origin: "right",
    duraration: 2000,
    
};
ScrollReveal().reveal(".promlogo h1", scrollRevealOption);
ScrollReveal().reveal(".form-box", {
 ...scrollRevealOption,
delay: 1000,
});
ScrollReveal().reveal(".promImage", { ...scrollRevealOption1,
    delay: 1000,
  });
ScrollReveal().reveal(".news", scrollRevealOption1);
ScrollReveal().reveal(".destination", scrollRevealOption1);
ScrollReveal().reveal(".container", { ...scrollRevealOption2,
    delay: 1000,
  });
  //Sliding picutre 
 

/*window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content")
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
*/

const username = localStorage.getItem('UserName');

document.getElementById('ur1').textContent = username;
var dispayUser = document.getElementById('ur1');
dispayUser.style.display = 'block';

//for image sliding

function openFlight(){
    location.href = 'Flight.html';
}
function openWeather(){
    location.href = 'Map.html';
}
function openHotels(){
    location.href = 'Hotels.html';
}
function openCar(){
    location.href = 'Car_Rental.html';
}

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})
let revers = (22-11-2018);

function checkCityState() {
    var cityName = document.getElementById('city_name').value;
    localStorage.setItem('cityinput',cityName);
    location.href = 'Map.html';
    return false;
}
document.getElementById("search-button").addEventListener("click", function (event) {
    event.preventDefault()
    
    const url = 'https://booking-com15.p.rapidapi.com/api/v1/attraction/searchLocation?query=Chicago&languagecode=en-us';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5b85b141e5msh52d159991e8a6e0p1a13b6jsn1581ff0348d7',
		'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
	}
};
let city = document.getElementById('destination').value;
console.log(city);
fetch(`https://booking-com15.p.rapidapi.com/api/v1/attraction/searchLocation?query=${city}&languagecode=en-us`,options)
.then(res=> res.json())
.then(res => {
    let des_data = res.data.products
des_data.map(item=> {
        console.log(item.id);
        fetch(`https://booking-com15.p.rapidapi.com/api/v1/attraction/searchAttractions?id=${item.id}&currency_code=USD&languagecode=en-us`,options)
        .then(response => response.json())
        .then(response => {
            let source = response.data.products;
            console.log(source);
 
            source.map(data1 => {
                //let price = data1.priceBreakdown.grossPrice;
                
                document.getElementById('hotel').innerHTML += `
                <div class="hotel-item">
                <div class="images/hotel-img" >
                    <img src="${data1.primaryPhoto.small}"  id="hotel_pic" alt="images">
                </div>
                <div class="hotel-descriptions"><ul class =" preview-hotel-descriptions"><li>
                
                <p class="description-of-hotel" id="hotel_name" > ${data1.name}</p>
				<p class="description-of-hotel" id="hotel_name" > ${data1.shortDescription}</p>
				<p class="description-of-hotel" id="hotel_name" > Review: ${data1.reviewsStats.combinedNumericStats.average}</p>
				<p class="description-of-hotel" id="hotel_name" > Price: ${data1.representativePrice.chargeAmount}USD</p>
                
                </li></lu>
                
            </div>
           </div>`

            })
        })
        
    })
})
.catch(err =>console.log(err));
});