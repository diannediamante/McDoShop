let burgers = [
    {"name": "Burger McDo", "price": 129.10},
    {"name": "Cheesy Burger McDo", "price": 140.00},
    {"name": "Cheeseburger", "price": 145.00},
    {"name": "Double Cheeseburger", "price": 187.00},   
    {"name": "McChicken", "price": 193.00},
    {"name": "Big Mac", "price": 222.00}
];

let desserts_drinks = [
    {"name": "Strawberry Banana Sundae", "price": 35.00},
    {"name": "Apple Pie", "price": 37.00},
    {"name": "Coke McFloat", "price": 52.00},
    {"name": "McFlurry w/ Oreo", "price": 52.00},   
    {"name": "McCafe Iced Coffee Original", "price": 59.00},
    {"name": "Chocolate Shake", "price": 94.00}
];

let ala_carte = [
    {"name": "Burger McDo", "price": 35.00},
    {"name": "McCrispy Chicken Fillet", "price": 59.00},
    {"name": "1-pc Chicken McDo", "price": 75.00},
    {"name": "McSpaghetti", "price": 59.00},   
    {"name": "1-pc Spicy Chicken McDo", "price": 78.00},
    {"name": "6-pc McNuggets", "price": 123.00}
];

let fries_extras = [
    {"name": "Extra Plain Rice", "price": 25.00},
    {"name": "Hash Brown", "price": 37.00},
    {"name": "Mushroom Soup", "price": 39.00},
    {"name": "Fries", "price": 55.00},
    {"name": "Shake Shake Fries BBQ", "price": 65.00},
    {"name": "BFF Fries", "price": 134.00}
];

let menu = [burgers, desserts_drinks, ala_carte, fries_extras];                 //array of items
let label = ["Burgers", "Desserts & Drinks", "A la Carte", "Fries & Extras"];   //array of menu categories
let cart = [];  //array of items bought

//dynamically add checkboxes on the html
var container = document.getElementById("menu_cont");   //get div id
for (i = 0; i < menu.length; i++){
    var lab = document.createElement("label");  //create label tag
    var t = document.createTextNode(label[i]);  //create text

    lab.setAttribute("class", "menu_lbl");      //set class name of the label
    lab.appendChild(t);                         //add text to label
    container.appendChild(lab);                 //add label to div
    container.appendChild(document.createElement("br"));    //add a new line
 
    for (j = 0; j < menu[i].length; j++){
        var x = document.createElement("input");    //create input tag
        var lbl = document.createElement("label");  //create label tag
        
        x.setAttribute("type", "checkbox");         //set input type as checkbox
        x.setAttribute("class", "menu");            //set class as menu
        x.setAttribute("onclick", "checkItem()");   //add click event
        x.setAttribute("name", menu[i][j].name);    //set name as the name of the item
        x.setAttribute("value", menu[i][j].price.toFixed(2).toString());    //set value as the price of the item
       
        container.appendChild(x);       //add checkbox to div, there' no label yet
        lbl.appendChild(document.createTextNode(x.name));   //add lable to checkbox
        lbl.appendChild(document.createElement("br"));      //add new line

        var price = document.createElement("label");        //add label tag
        var price_txt = document.createTextNode("Php " + x.value);  //add text
        price.setAttribute("class", "price_lbl");               //set class name to "price_lbl"
        price.appendChild(price_txt);                           //add price label
    
        container.appendChild(lbl);                             //add item name to div
        container.appendChild(price);                           //add item price ot div
        container.appendChild(document.createElement("br"));    //add new line
        container.appendChild(document.createElement("br"));    //add new line
    }
    container.appendChild(document.createElement("br"));        //add new line
}

//iupdate customer info
function updateInfo(){
    document.getElementById("cust_name").innerHTML = document.getElementById("c_name").value; 
    document.getElementById("cust_addr").innerHTML = document.getElementById("c_addr").value; 
    document.getElementById("cust_mail").innerHTML = document.getElementById("c_mail").value; 
}

function updateCartList(total){
    // refresh cart list
    document.getElementById("curr_order").innerHTML = "";
    
    //create an unordered list
    var ul_list = document.createElement("ul");
    ul_list.setAttribute("id", "cart-list");
    (document.getElementById("curr_order")).appendChild(ul_list);
    
    //update list of orders
    var node = document.getElementById("cart-list");
    for (k = 0; k < cart.length; k++){
        var newNode = document.createElement("li");
        newNode.appendChild(document.createTextNode(cart[k].name + "  [" + cart[k].price + "]" ));
        node.appendChild(newNode);
    }
    //update total amount
    document.getElementById("tot_txt").innerHTML = "Php " + total.toString();
}

function checkItems(){      //check selected items
    var elem = document.getElementsByClassName("menu");     //get the list of the elements with class name "menu"
    var amount = 0.00;      //initial total amount

    cart = [];      //refresh/empty cart
    for (k = 0; k < elem.length; k++){
        if (elem.item(k).checked == true){
            //add to cart
            cart.push({"name":elem.item(k).name, "price":(parseFloat(elem.item(k).value)).toFixed(2)});

            //update total amount
            amount = (parseFloat(amount) + parseFloat(elem.item(k).value)).toFixed(2);
        }
    }
    return amount;  //return the total amount to the function who called checkItems()
}

function checkItem(){   //update cart and total amount
    //get total sum
    var total = checkItems();
    console.log("Total: " + total.toString());
    console.log(cart);
    updateCartList(total);
}

function onSubmit(){
    var objName = {
        "cust_name":document.getElementById("c_name").value,
        "cust_addr":document.getElementById("c_addr").value,
        "cust_email":document.getElementById("c_mail").value,
        "cust_order":cart
    }
    console.log(objName);

    var stringy = JSON.stringify(objName);
    console.log(stringy);
}
