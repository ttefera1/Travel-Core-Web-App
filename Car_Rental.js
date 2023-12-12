
document.getElementById("search-button").addEventListener("click", function (event) {
    event.preventDefault()
    
    const url = 'https://booking-com15.p.rapidapi.com/api/v1/cars/searchDestination?query=Chicago';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5b85b141e5msh52d159991e8a6e0p1a13b6jsn1581ff0348d7',
            'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
        }
    };
    
    let city = document.getElementById('Pick-up').value;
    let pickupDate = document.getElementById('start-date').value;
let dropoffDate = document.getElementById('end-date').value;
    document.getElementById('title1').innerHTML = `<h3> Car rentals in ${city} :- </h3>`
    fetch(`https://booking-com15.p.rapidapi.com/api/v1/cars/searchDestination?query=${city}`,options)
    .then(res=> res.json())
    .then(res => {
        let des_data = res.data
    des_data.map(item=> {
        console.log(item.coordinates.latitude);
        console.log(item.coordinates.longitude);
            fetch(`https://booking-com15.p.rapidapi.com/api/v1/cars/searchCarRentals?pick_up_latitude=${item.coordinates.latitude}&pick_up_longitude=${item.coordinates.longitude}&drop_off_latitude=${item.coordinates.latitude}&drop_off_longitude=${item.coordinates.longitude}&pick_up_date=${pickupDate}&drop_off_date=${dropoffDate}&pick_up_time=10%3A00&drop_off_time=10%3A00&driver_age=30&currency_code=USD`,options)
            .then(response => response.json())
            .then(response => {
                let source = response.data.search_results;
                console.log(source);
     
                source.map(data1 => {
                    //let price = data1.priceBreakdown.grossPrice;
                    console.log(data1.vehicle_info.name);
                    document.getElementById('hotel').innerHTML += `
                    <div class="hotel-item">
                <div class="images/hotel-img" >
                    <img src="${data1.vehicle_info.image_url}"  id="hotel_pic" alt="images">
                </div>
                <div class="hotel-descriptions"><ul class =" preview-hotel-descriptions"><li>
                    <p class="description-of-hotel" id="hotel_name" > <b>Supplier:</b> ${data1.supplier_info.name}</p>
                    <p class="description-of-hotel" id="hotel_name" ><b> Pickup & Dropoff locations:</b> ${data1.supplier_info.address}</p>
                    <p class="description-of-hotel" id="hotel_name" > <b>Car Name:</b> ${data1.vehicle_info.v_name}</p>
                    <p class="description-of-hotel" id="hotel_name" > <b>Seats:</b>  ${data1.vehicle_info.seats}</p>
                    <p class="description-of-hotel" id="hotel_name" > <b>Average Rating:</b> ${data1.rating_info.average}</p>
                    <p class="description-of-hotel" id="hotel_name" > <b>Price:</b> ${data1.pricing_info.price} ${data1.pricing_info.currency}</p>
                    </li>
                    
                </div>
               </div>`
    
                })
            })
            
        })
    })
    .catch(err =>console.log(err));
});
function checkCity() {
    let cityName = document.getElementById('Pick-up').value;
    if (cityName.length !== 0) {
        document.getElementById('hotel').innerHTML = '';
    } else {
        alert("Please enter a city")
    }
}