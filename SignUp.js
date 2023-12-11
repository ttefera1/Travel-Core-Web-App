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
}
  
const user_hashtable = new HashTable();
user_hashtable.set('tg', '1234');
var input_name = document.getElementById("input_name");
let input_email = document.getElementById("input_email");
let input_password = document.getElementById("input_password");
let title = document.getElementById("title");
let input_email_hidden = false;
let signinbtn = document.getElementById("signinbtn");
let signupbtn = document.getElementById("signupbtn");
signinbtn.addEventListener("click", function(){
var username=document.getElementById("name").value;
var password=document.getElementById("password").value;
//const target = this.get(username)
    if( !input_email_hidden){
         input_email.style.display = 'none';
         title.innerHTML = "Sign In";
         input_email_hidden = true;
    
    }else if(username == null || username == "" || password == "" || password == null){
            alert("Username or Password cannot be empty!");
            
          }
        else{
            if(user_hashtable.checkUser_passwordValidity(username, password)){
                //alert(user_hashtable.checkUser_passwordValidity(username, password));
                  alert("Welcome " + username);
                    localStorage.setItem('username',JSON.stringify(username))
                    localStorage.setItem('table',JSON.stringify(user_hashtable))
                    location.href='HomeLogin.html';
                  
               }
               else{
                  alert("failed" )
               }
        } 
});
signupbtn.addEventListener("click", function(){
    var username=document.getElementById("name").value;
    var password=document.getElementById("password").value;
    //const target = this.get(username)
        if( input_email_hidden){
             input_email.style.display = 'block';
             title.innerHTML = "Sign Up";
             input_email_hidden = false;
        
        }else if(username == null || username == "" || password == "" || password == null){
                alert("Username or Password cannot be empty!");
                
              }
            else{
                if(user_hashtable.checkUser(username)){
                    user_hashtable.set(username, password);
                    console.log(user_hashtable.get(username))
                    alert("User successfully Registered")
                    
                }
                else{
                    alert("User already created");
                    return false;
                }
            } 
    });
function validitUser(username, password){
 if(user_hashtable.checkUser_passwordValidity(username, password)){
  //alert(user_hashtable.checkUser_passwordValidity(username, password));
    alert("Welcome " + username);
    localStorage.setItem('username',JSON.stringify(username))
      localStorage.setItem('table',JSON.stringify(user_table))
    location.href = 'HomeLogin.html';
    
 }
 else{
    alert("failed" )
 }
}


