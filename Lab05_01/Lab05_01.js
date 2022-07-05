checkUserID=() => {
    userID = document.getElementById("user_id").value;
    if (userID.length < 5 || userID.length > 12) {
        
        return 0;
    }
  
    return 1;
  }

  checkPassword= () => {
    passlen = document.getElementById("password").value;
    if (passlen.length <=7  || passlen.length >= 12) {
      return 0;
    }
  
    return 1;
  }

onlyAlphabets=()=>
{
    e = document.getElementById("firstname").value;

   var regEx = /^[A-Za-z]+$/;
   if(e.match(regEx))
     {
      return true;
     }
   else
     {
     return false;
     }
}
onlyAlphanumeric=()=>
{
    e = document.getElementById("address").value;

   var regEx = /^[A-Za-z0-9]+$/;
   if(e.match(regEx))
     {
      return true;
     }
   else
     {
     return false;
     }
}

checkEmail=() => {
    email = document.getElementById("email").value;
  
    regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    return regex.test(email);
  
  }
  checkSex=()=>{
    male = document.getElementById('male');
    female = document.getElementById('female');
 
    if(!male.checked && !female.checked){
        return false;
    }

    return true;
  
}
checkLang=()=>{

    eng = document.getElementById("english");
    nonEng = document.getElementById("non_english");

    if ( !eng.checked && !nonEng.checked){
        return false;
    }


    return true;
}
function checkZipCode() {
    zip = document.getElementById("zip_code").value;
  
    if (zip.length == 0) return false;
  
    for (i = 0; i < zip.length; i++) {
      if (zip.charCodeAt(i) < 48 || zip.charCodeAt(i) > 57) {
        return false;
      }
    }
  
    return true;
  }
  function checkCountry() {
    country = document.getElementById("country").value;
    if (country == "") {
      return false;
    }
  
    return true;
  }
  
    
// function onlyAlphabets() {
//     e = document.getElementById("firstname").value;
//     if (
//         (e.charCodeAt() > 64 && e.charCodeAt() < 91)
//      || (e.charCodeAt() > 96 && e.charCodeAt() < 123) 
//      || (e.charCodeAt() == 32)
//        )
//     {
//         return 1;
//     }
//     else{
//         return 0;
//     }   
//     }


function getAlert() {
    if (!checkUserID()) {
      alert("User ID length must be between 5 to 12 and must not be left blank");
      return;
    }
    if (!checkPassword()) {
        alert("Password length must be 7 to 12 ");
        return;
    }
    if (!onlyAlphabets()) {
        alert("Alphabets only bruhhh ");
        return;
      }
      if (!onlyAlphanumeric()) {
        alert("Alphanumeric characters only my bruhhh ");
        return;
      }
      if (!checkZipCode()) {
        alert("Zip code must have numeric characters");
        return;
      }
      if (!checkCountry()) {
        alert("Select your country from list");
        return;
      }
    
      if (!checkZipCode()) {
        alert("Zip code must have numeric characters");
        return;
      }
      if (!checkEmail()) {
        alert("You have entered an invalid email");
        return;
      }
    
      if(!checkSex()){
        alert("Select Male/Female");
        return;
      }
    
    
      if(!checkLang()){
        alert("Language must be selected");
        return;
      }
    alert("Form Successfully Submitted");

}

document.getElementById("submit").addEventListener("click", getAlert);
