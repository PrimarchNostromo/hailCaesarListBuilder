/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function fun()
{
 var ddl = document.getElementById("dropdown");
 var selectedValue = ddl.options[ddl.selectedIndex].value;

 document.getElementById("unitBox").innerHTML = "fuck";
 document.write(selectedValue);
}
