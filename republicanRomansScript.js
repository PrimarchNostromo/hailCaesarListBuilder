//global variable for the list part
var value = 1;




//add a unit to the list
function addItem(name, points) {
   // document.getElementById("unitBox").innerHTML += "<br>";
   //select which division these chumps go into
    var ddl = document.getElementById("dropdown");
    var selectedValue = ddl.options[ddl.selectedIndex].value;
 
    //add the item to the list itself
    document.getElementById(selectedValue).innerHTML += "<div id='" + window.value + "'>" + name + " " + points 
            + "<button type='button' onclick='removeItem(" + window.value + "," + points + ")'>Delete</button></div>";
    window.value++;
    //update points
    document.getElementById("pointsTotal").innerHTML = 
            parseFloat(document.getElementById("pointsTotal").innerHTML) + parseFloat(points);
}

//delete a unit from the list
function removeItem(id, points){
    var div = document.getElementById(id);
    div.remove();
    //update points
    document.getElementById("pointsTotal").innerHTML = 
            parseFloat(document.getElementById("pointsTotal").innerHTML) - parseFloat(points);
    }
