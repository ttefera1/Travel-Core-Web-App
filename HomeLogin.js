let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
});

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
});



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
//Loading in the variables for getting user information post-login
var table = JSON.parse(localStorage.getItem('table'));
var username = localStorage.getItem('username');

//Logic to add the username on the login page
username = username.replace(/['"]+/g, '');
document.getElementById("userName").innerHTML =  username;
// Hash table to create a local storage for
class HashTable {
    constructor() {
        this.size = 0;
        this.table = new Array(50);
        
    }
  
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.table.size;
    }
  
    set(key, value) {
        const index = this._hash(key);
    this.table[index] = [key, value];
    this.size++;}
  
    get(key) {
      
      return this.table[this._hash(key)]; 
    }
  
    remove(key) {
      const index = this._hash(key);
      if (this.table[index]) {
        for (let i = 0; i < this.table[index].length; i++) {
          if (this.table[index][i][0] === key) {
            this.table[index].splice(i, 1);
            return;
          }
        }
      }
    }
    checkUser_passwordValidity(key, value){
        const currentUser = this.get(key);
        
        if(currentUser !== undefined){
            const currentPassword = currentUser[1];
            if(value === currentPassword){
                return true;
            }
            else {
                return false;
            }
         } else{
            alert("user not found please create a new user");

            }
    }
   checkUser(key){
    const user = this.get(key);
    if(user === undefined){
        return false;
    }
    else return true;

   }
   make_Hash_Table(arr){
    var atb = arr['table'];
    console.log(atb);
    Object.keys(atb).forEach(key => {
        if(atb[key]!= null){
        console.log(atb[key])
        this.set(atb[key][0],atb[key][1])}
      });
}
}
  
function signoutTasks(){
    localStorage.removeItem('username');
}

var HashTab = new HashTable();
HashTab.make_Hash_Table(table);
localStorage.setItem('username',JSON.stringify(username))
localStorage.setItem('table',JSON.stringify(HashTab));

function openFlight(){
    location.href = 'Flight.html';
}
function openWeather(){
    location.href = 'Weather.html';
}
function openHotels(){
    location.href = 'Hotels.html';
}
function openCar(){
    location.href = 'Car_Rental.html';
}
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

