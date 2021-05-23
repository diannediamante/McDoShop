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

let menu = [burgers, desserts_drinks, ala_carte, fries_extras];
let label = ["Burgers", "Desserts & Drinks", "A la Carte", "Fries & Extras"];





var container = document.getElementById("menu_cont");
id_cnt = 0;
for (i = 0; i < menu.length; i++){
    var lab = document.createElement("label");
    var t = document.createTextNode(label[i]);

    lab.setAttribute("class", "menu_lbl");
    lab.appendChild(t);
    container.appendChild(lab);
    container.appendChild(document.createElement("br"));
 
    for (j = 0; j < menu[i].length; j++){
        //set id of each object
        Object.defineProperty(menu[i][j], "id", {value: id_cnt})
        // console.log(menu[i][j].id);
        id_cnt++;


        var x = document.createElement("input");
        var lbl = document.createElement("label");
        
        x.setAttribute("type", "checkbox");
        x.setAttribute("class", "menu");
        x.setAttribute("onclick", "checkItem(this)");
        x.setAttribute("value", menu[i][j].id.toString());
       
        container.appendChild(x);
        lbl.appendChild(document.createTextNode(menu[i][j].name));
        lbl.appendChild(document.createElement("br"));

        var price = document.createElement("label");
        var price_txt = document.createTextNode("Php " + menu[i][j].price.toFixed(2).toString());
        price.setAttribute("class", "price_lbl");
        price.appendChild(price_txt);
    
        container.appendChild(lbl);
        container.appendChild(price);
        container.appendChild(document.createElement("br"));
        container.appendChild(document.createElement("br"));
    }
    container.appendChild(document.createElement("br"));
}

// $("input:checkbox").each(function (){
//     console.log(this.value);
// });

function getPrice(id_num){
    for (k = 0; k < menu.length; k++){
        for (l = 0; l < menu[k].length; l++){
            // console.log("i: " + i.toString() + " j: " + j.toString())
            if (menu[k][l].id == Number(id_num)){
                // console.log("found!");
                // console.log(menu[k][l].name);
                // break;
                // return menu[k][l].price;
                console.log(menu[k][l].price);
                break;
            }
        }
    }
}

function checkTotal(){
    var elem = document.getElementsByClassName("menu");
    var amount = 0;
    for (k = 0; k < elem.length; k++){
        if (elem.item(k).checked == true){
            console.log(elem.item(k).value);
            amount = amount + getPrice(elem.item(k).value);
        }
    }
    console.log("total: " + amount.toString());
}

function checkItem(param){
    // console.log(param.value);
    for (k = 0; k < menu.length; k++){
        for (l = 0; l < menu[k].length; l++){
            // console.log("i: " + i.toString() + " j: " + j.toString())
            if (menu[k][l].id == Number(param.value)){
                // console.log("found!");
                // console.log(menu[k][l].name);
                break;
            }
        }
    }
    //add to receipt
    //add total sum
    checkTotal();
}

// function tryClick(){
//     console.log("try!");
// }
// console.log(Number(document.getElementById("menu").value) + 10);

// console.log(menu[3][0].name);
// console.log(menu[3].length);


// function load_menu(){

// }

// function check_burgers(){

// }

// function check_desserts_drinks(){
    
// }

// function check_ala_carte(){
    
// }
// function check_fries_extras(){
    
// }