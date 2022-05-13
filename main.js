menu_list_array = ["Veg Margherita Pizza","Chicken Tandoori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza" ];

function getmenu(){
var htmldata ="";
menu_list_array.sort();
for(var p = 0;p < menu_list_array.length ; p++) {
htmldata = htmldata + menu_list_array[p] + "<br>" ;
}
var listmenu = document.getElementById("display_menu").innerHTML=htmldata
}

function add_item(){
var htmldata;
var img = '<img id="im1" src="images/pizzimg.png"/>'
menu_list_array.sort();
for(var p = 0;p < menu_list_array.length ; p++) {
htmldata = htmldata + img + menu_list_array[p] + "<br>" ;
}
var item=document.getElementById("add_item").value;
document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_top(){
//Complete the code
}