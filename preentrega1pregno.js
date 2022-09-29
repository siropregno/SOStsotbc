console.log("SCRIPTS OF THE SHADOWS - RPG Inventory")

function iniciar() {
    
let damage = 0
let armor = 0
let totalWeight = 0

let item = (prompt("Equip an item or type 'exit' to close the inventory"))

if (item != "exit") 
{ 

do{
    
switch(item)
{
    case "armor": totalWeight = totalWeight+18; armor = armor + 227; 
    console.log("You've equipped an armor.");
    console.log("Current armor: "+armor);
    console.log("Current damage: "+damage);
    console.log("Weight: "+totalWeight+"/160"); break;

    case "sword": totalWeight = totalWeight+8; damage = damage + 156; 
    console.log("You've equipped a sword.");
    console.log("Current armor: "+armor);
    console.log("Current damage: "+damage);
    console.log("Weight: "+totalWeight+"/160"); break;
    
    case "shield": totalWeight = totalWeight+20; armor = armor + 227;  
    console.log("You've equipped a shield.");
    console.log("Current armor: "+armor);
    console.log("Current damage: "+damage);
    console.log("Weight: "+totalWeight+"/160"); break;

    default: console.log("You don't have that item");
}

item = (prompt("Equip another item or type 'exit' to close the inventory"))


}while (totalWeight < 160 && item != "exit")

}

}