
reset=()=> {
  document.getElementById("user_id").value = "";
  document.getElementById("password").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("country").value = "";
  document.getElementById("zip_code").value = "";
  document.getElementById("email").value = "";
  document.getElementById("male").checked = false;
  document.getElementById("female").checked = false;
  document.getElementById("english").checked = true;
  document.getElementById("non_english").checked = false;
  document.getElementById("about").value = "";
}

document.getElementById("reset").addEventListener("click", reset);
