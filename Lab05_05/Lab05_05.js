const tab = document.getElementById('mult');
const val = document.getElementById('value');
v = 0;
t = 0;

function calculateTable(value,till){
    val.innerText = value;
    table = "<table>";
    for(i=1;i<(till + 1);i++){
        table += "<tr><td>" + value + " X " + i + " = " +(value * i)+ "</td></tr>";
    }
    table += "</table>";
    tab.innerHTML = table;
}


function getValues(){
    vx = prompt("Multiplication table of?");
    if (vx == null ){return;}
    till = prompt(" Multiplication table till?");
    if(till == null ){
        return;
    }

    v = parseInt(vx,10);
    t = parseInt(till,10);
}

getValues();
calculateTable(v,t);



