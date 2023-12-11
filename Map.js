let cityinput = localStorage.getItem('cityinput');
if(cityinput!== null || cityinput !== ""){
    
    const url = 'https://booking-com15.p.rapidapi.com/api/v1/attraction/searchLocation?query=Chicago&languagecode=en-us';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5b85b141e5msh52d159991e8a6e0p1a13b6jsn1581ff0348d7',
		'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
	}
};

document.getElementById('title1').innerHTML = `<h3> Your results of ${cityinput} area attractions:- </h3>`
fetch(`https://booking-com15.p.rapidapi.com/api/v1/attraction/searchLocation?query=${cityinput}&languagecode=en-us`,options)
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
}

function checkCity() {
    let cityName = document.getElementById('destination').value;
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
	let cityinput = document.getElementById('destination').value;
	document.getElementById('title1').innerHTML = `<h3> Your results of ${cityinput} attractions:- </h3>`
	fetch(`https://booking-com15.p.rapidapi.com/api/v1/attraction/searchLocation?query=${cityinput}&languagecode=en-us`,options)
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
	
	