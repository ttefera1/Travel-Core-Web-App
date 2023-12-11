
document.getElementById("search-button").addEventListener("click", function (event) {
    event.preventDefault()
    
    const url = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=Chicago';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5b85b141e5msh52d159991e8a6e0p1a13b6jsn1581ff0348d7',
		'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
	}
};
let city = document.getElementById('arrival').value;
console.log(city);
document.getElementById('title1').innerHTML = `<h3> Hotels in  ${city}:- </h3>`
fetch(`https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=${city}`,options)
.then(res=> res.json())
.then(res => {
    let des_data = res.data
des_data.map(item=> {
        console.log(item.dest_id);
        console.log(item.search_type);
        fetch(`https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=${item.dest_id}&search_type=district&arrival_date=2023-12-14&departure_date=2023-12-22&adults=1&children_age=0%2C17&room_qty=1&page_number=1&languagecode=en-us&currency_code=USD`,options)
        .then(response => response.json())
        .then(response => {
            let source = response.data.hotels;
            console.log(source);
 
            source.map(data1 => {
                //let price = data1.priceBreakdown.grossPrice;
                console.log(data1.property.name);
                document.getElementById('hotel').innerHTML += `
                <div class="hotel-item">
                <div class="images/hotel-img" >
                    <img src="${data1.property.photoUrls}"  id="hotel_pic" alt="images">
                </div>
                <div class="hotel-descriptions"><ul class =" preview-hotel-descriptions"><li>
                
                <p class="description-of-hotel" id="hotel_name" > ${splitIntoSentences(data1.accessibilityLabel)}</p>
                
                </li></lu>
                
            </div>
           </div>`

            })
        })
        
    })
})
.catch(err =>console.log(err));
});
function checkCity() {
    let cityName = document.getElementById('arrival').value;
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
  
  // Example usage
  