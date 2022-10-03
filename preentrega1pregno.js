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
    alert("You've equipped an armor.\n Current armor: "+armor+". Current damage: "+damage+"- Weight: "+totalWeight+"/160"); break;

    case "sword": totalWeight = totalWeight+8; damage = damage + 156; 
    alert("You've equipped a sword.\n Current armor: "+armor+". Current damage: "+damage+"- Weight: "+totalWeight+"/160"); break;
    
    case "shield": totalWeight = totalWeight+20; armor = armor + 227;  
    alert("You've equipped a shield.\n Current armor: "+armor+". Current damage: "+damage+"- Weight: "+totalWeight+"/160"); break;

    default: alert("You don't have that item");
}

item = (prompt("Equip another item or type 'exit' to close the inventory"))


}while (totalWeight < 160 && item != "exit")

}

}