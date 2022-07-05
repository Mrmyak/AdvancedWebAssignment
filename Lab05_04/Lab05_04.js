const amt = document.getElementById("amount");
const disc = document.getElementById("discount");
const total = document.getElementById("total");

const price = 135;

function increment() {
  amt.value++;
  calculateValue();
}

function decrement() {
  if (amt.value == 0) {
    return;
  }
  amt.value--;
  calculateValue();
}

function calculateValue() {
  dis = disc.value;
  if (dis != "") {
    dis = parseInt(dis, 10);
  } else {
    dis = 0;
    
  }
  tot = parseInt(amt.value, 10) * price;
  dis < 0 ? (tot -= 0) : (tot -= dis);
  if (tot ==0 && dis == 0) setTotal("Rs.0","black"); 


  if (tot < 0) {
    setTotal("Error", "red");
    return;
  }

  setTotal("Rs." + tot, "black");
}

function setTotal(value, color) {
  total.style.color = color;
  total.innerText = value;
}

document.getElementById("subtract").addEventListener("click", decrement);
document.getElementById("add").addEventListener("click", increment);
document.getElementById("discount").addEventListener("keyup", calculateValue);
