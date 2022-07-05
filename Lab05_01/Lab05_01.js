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

function onlyAlphabets()
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
    // check sequentially
  
    if (!checkUserID()) {
      alert("User ID length must be between 5 to 12 and must not be left blank");
      return;
    }
    if (!checkPassword()) {
        alert("Password length must be 7 to 12 ");
        return;
    }
    if (!onlyAlphabets()) {
        alert("Alphabets  only bruhhh ");
        return;
      }
    
}
document.getElementById("submit").addEventListener("click", getAlert);
