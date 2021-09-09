function fun()
{
 var ddl = document.getElementById("dropdown");
 var selectedValue = ddl.options[ddl.selectedIndex].value;

 document.getElementById("unitBox").innerHTML = selectedValue;
}


function changeColor(color) {
   document.querySelector(".name").style.color = color;
}
