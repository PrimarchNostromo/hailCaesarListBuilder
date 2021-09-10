function fun()
{
 var ddl = document.getElementById("dropdown");
 var selectedValue = ddl.options[ddl.selectedIndex].value;

 document.getElementById("unitBox").innerHTML = selectedValue;
}


function changeColor(color) {
   document.querySelector(".name").style.color = color;
}

function addItem(name, points) {
   // document.getElementById("unitBox").innerHTML += "<br>";
    document.getElementById("unitBox").innerHTML += "<br>" + name + " " + points;
    document.getElementById("pointsTotal").innerHTML = 
            parseFloat(document.getElementById("pointsTotal").innerHTML) + parseFloat(points);
}
