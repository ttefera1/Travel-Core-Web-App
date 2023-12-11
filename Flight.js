document.getElementById("search-button").addEventListener("click", function (event) {
    event.preventDefault()
    
    const url = 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination?query=Chicago';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5b85b141e5msh52d159991e8a6e0p1a13b6jsn1581ff0348d7',
		'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
	}
};
let arrival = document.getElementById('arrival').value;
let departure = document.getElementById('departure').value;
let departDate = document.getElementById('start-date').value;
let arrivalDate = document.getElementById('end-date').value;
document.getElementById('title1').innerHTML = `<h3> Flights from ${arrival} to ${departure}:- </h3>`

fetch(`https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination?query=${arrival}`,options)
.then(res=> res.json())
.then(res => {
    let des_data = res.data
des_data.map(item=> {
    console.log(departDate);
    fetch(`https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination?query=${departure}`,options)
.then(res=> res.json())
.then(res => {
    let des_data2 = res.data;
des_data2.map(item2=> {
        console.log(arrivalDate);
        fetch(`https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights?fromId=${item.id}&toId=${item2.id}&departDate=${departDate}&returnDate=${arrivalDate}&pageNo=1&adults=1&children=0%2C17&cabinClass=ECONOMY&currency_code=USD`,options)
        .then(response => response.json())
        .then(response => {
            let source = response.data.flightOffers;
            console.log(source);
 
            source.map(data1 => {
                //let price = data1.priceBreakdown.grossPrice;
                
                document.getElementById('hotel').innerHTML += `
                <div class="hotel-item">
                <div class="images/hotel-img" >
                <i class="fa-solid fa-plane" style="color: #73a2f2;"></i><br><br>
                </div>
                <div class="hotel-descriptions"><ul class =" preview-hotel-descriptions"><li>
                
                <p class="description-of-hotel" id="hotel_name" ><i class="fa-solid fa-plane-departure" style="color: rgb(230, 210, 33);"></i>  Departure Airport:${data1.segments[0].departureAirport.name}</p>
                <p class="description-of-hotel" id="hotel_name" > Departure Time: ${data1.segments[0].departureTime}</p>
                <p class="description-of-hotel" id="hotel_name" ><i class="fa-solid fa-plane-arrival" style="color: rgb(230, 210, 33);"></i> Arrival Airport: ${data1.segments[0].arrivalAirport.name}</p>
                <p class="description-of-hotel" id="hotel_name" > Arrival Time: ${data1.segments[0].arrivalTime}</p>
                <p class="description-of-hotel" id="hotel_name" > Trip Type: ${data1.tripType}</p>
                <p class="description-of-hotel" id="hotel_name" > Round Trip Price: ${data1.priceBreakdown.total.units}${data1.priceBreakdown.total.currencyCode}</p>
                </li></lu>
                <button type="button" class="add-as-favorites" id=${item.id}>
                <i class="fa-regular fa-heart"></i>
            </button>
            </div>
           </div>`

            })
        })
        
    })
})

});
});
})
function checkCity() {
    let cityName = document.getElementById('arrival').value;
    if (cityName.length !== 0) {
        document.getElementById('hotel').innerHTML = '';
    } else {
        alert("Please enter a city")
    }
}
function checkCity2() {
    let cityName = document.getElementById('departure').value;
    if (cityName.length !== 0) {
        document.getElementById('hotel').innerHTML = '';
    } else {
        alert("Please enter a city")
    }
}
function splitIntoSentences(paragraph) {
    // Define a regular expression for matching sentences
    var sentenceRegex = /(\.|\?|!)\s+/;
  
    // Use the split method with the regular expression to split the paragraph into an array of sentences
    var sentences = paragraph.split(sentenceRegex);
    var sentence = '';
    // Remove empty strings from the array
    sentences.forEach(function(sentence1) {
        sentence = sentence + sentence1 + "\n";
      });
    return sentence;
  }
  
// Get all radio buttons
const radioButtons = document.querySelectorAll('input[name="trip"]');

// Add event listeners to each radio button
radioButtons.forEach((radio) => {
    radio.addEventListener('change', function () {
        if (this.checked) {
            console.log("Selected option:", this.value);
            // You can perform actions based on the selected value here
        }
    });
});
