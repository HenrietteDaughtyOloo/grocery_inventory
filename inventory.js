
           //QUESTION 1
//Create an array containing the names of all items in the inventory maximum of 10.
const groceryItems = ["Mango", "Guava", "Mangosteen", "Lettuce", "Kales", "Carrots", "Juice", "Milk",
"Banana", "Apples"]


            //QUESTION1B
//Create a separate array with the corresponding stock quantities of each item maximum of 10.
 const stockQuantities = [8, 5, 5, 2, 6, 3, 8,10, 7,2]
 

console.log("Question2");


            //QUESTION 2
 //Write a function to add a new item to the inventory, updating both arrays.
 function addNew(newItem,newQuantity){
    groceryItems.push(newItem)
    stockQuantities.push(newQuantity)
 }
 addNew("Grapes", 6)

 console.log({groceryItems});
 console.log({stockQuantities});

 //Alternative Way to do it
function updateArray(product,number){
  groceryItems.unshift(product)&&stockQuantities.unshift(number);
}
updateArray("onions",34);
console.log(groceryItems);


 console.log("Question3");


            //QUESTION 3
//Write a function to update the stock quantity of an existing item.
function updateStock(existingStock,quantityUpdate){
    for(let i = 0; i<= groceryItems.length; i++){
        let d = groceryItems.indexOf(existingStock)
        
       if(d===stockQuantities[i]){
        console.log("nine")}
           stockQuantities.splice(d, 1, quantityUpdate);
        // console.log(stockQuantities);
        }
    console.log(stockQuantities);

     }


updateStock("Mango",9)
updateStock("Guava", 0)

//An Alternative way to do it
function update() {
    let inventory = stockQuantities.slice(-1).map(number => number * 2);
    // let invent2=quantitiesOfInventory.slice(-2).map(number=>number-10)
    console.log(inventory);
}
 console.log(stockQuantities)
update();


console.log("Question4");


//Write a function to calculate the total number of items in the inventory.
// let sum = 0
function totalNumberOfItems(){
    let sum=0;
    for (let i=0; i < stockQuantities.length; i++){
        sum += stockQuantities[i];
    }
    return sum;
}
console.log(totalNumberOfItems())


console.log("Question5");

// Write a function to find the item with the lowest stock quantity.
function findtheLowest(){
    let lowest = stockQuantities[0];
    let item = 0;
    for(let i = 1; i < stockQuantities.length; i++){
        if(stockQuantities[i] < lowest){
            lowest = stockQuantities[i];
            index = i;
        }
    }
    return  groceryItems[item];
}
console.log(findtheLowest());
function findLowest(){

let lowest = stockQuantities[0];
  let index = 0;
  for(let i = 1; i < stockQuantities.length; i++){
      if(stockQuantities[i] < lowest){
          lowest = stockQuantities[i];
          index = i;
      }
  }
  return  groceryItems[index];
}
console.log(findLowest());










