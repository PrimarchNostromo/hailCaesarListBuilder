//global variable for the list part
var value = 1;




//add a unit to the list
//parameters: name of the unit to add, how many points they cost, what kind of unit they are, and which row it is
function addItem(name, points, unitType, row) {
   // document.getElementById("unitBox").innerHTML += "<br>";
   //select which division these chumps go into
    var ddl = document.getElementById("dropdown");
    var selectedValue = ddl.options[ddl.selectedIndex].value;
 
    //add the item to the list itself, including a delete button

    document.getElementById(selectedValue).innerHTML += "<div id='" + window.value + "'>" + name + " " + points 
            + "<button type='button' onclick='removeItem(" + window.value + "," + points + "," + JSON.stringify(unitType) + "," + JSON.stringify(row) + ")'>Delete</button></div>";
    window.value++;        


    //update points
    document.getElementById("pointsTotal").innerHTML = 
            parseFloat(document.getElementById("pointsTotal").innerHTML) + parseFloat(points);
    
    //update unit types
    if (unitType === "infantry")
    {
       document.getElementById("infantry").innerHTML =  parseFloat(document.getElementById("infantry").innerHTML) + 1; 
    }
    else if (unitType === "skirmisher")
    {
      document.getElementById("skirmisher").innerHTML =  parseFloat(document.getElementById("skirmisher").innerHTML) + 1;   
    }
    else if (unitType === "missileInfantry")
    {
       document.getElementById("missileInfantry").innerHTML =  parseFloat(document.getElementById("missileInfantry").innerHTML) + 1;  
    }
    else if (unitType === "cavalry")
    {
        document.getElementById("cavalry").innerHTML =  parseFloat(document.getElementById("cavalry").innerHTML) + 1; 
    }
    else if (unitType === "elephant")
    {
        document.getElementById("elephant").innerHTML =  parseFloat(document.getElementById("elephant").innerHTML) + 1; 
    }
    else
    {
        //don't do anything
    }
    //also update the count in the table
    document.getElementById(row).innerHTML =  parseFloat(document.getElementById(row).innerHTML) + 1;
}

//delete a unit from the list
//parameters: name of the unit to subtract, how many points they cost, what kind of unit they are, and which row it is from
function removeItem(id, points, unitType, row){
    //remove from the list builder
    var div = document.getElementById(id);
    div.remove();
    
    //update points
    document.getElementById("pointsTotal").innerHTML = 
            parseFloat(document.getElementById("pointsTotal").innerHTML) - parseFloat(points);
    
    //update unit counts
    if (unitType == "infantry")
    {
       document.getElementById("infantry").innerHTML =  parseFloat(document.getElementById("infantry").innerHTML) - 1; 
    }
    else if (unitType == "skirmisher")
    {
      document.getElementById("skirmisher").innerHTML =  parseFloat(document.getElementById("skirmisher").innerHTML) - 1;   
    }
    else if (unitType == "missileInfantry")
    {
       document.getElementById("missileInfantry").innerHTML =  parseFloat(document.getElementById("missileInfantry").innerHTML) - 1;  
    }
    else if (unitType == "cavalry")
    {
        document.getElementById("cavalry").innerHTML =  parseFloat(document.getElementById("cavalry").innerHTML) - 1; 
    }
    else if (unitType == "elephant")
    {
        document.getElementById("elephant").innerHTML =  parseFloat(document.getElementById("elephant").innerHTML) - 1; 
    }
    else if (unitType == "upgrade")
    {
        //don't do anything
    }
    //also update the count in the table
        //also update the count in the table
    document.getElementById(row).innerHTML =  parseFloat(document.getElementById(row).innerHTML) - 1;
    
  }
