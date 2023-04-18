            //QUESTION 1
//Create an array containing the names of all items in the inventory maximum of 10.
const groceryItems = ["Mango", "Guava", "Mangosteen", "Lettuce", "Kales", "Carrots", "Juice", "Milk",
"Banana", "Apples"]


            //QUESTION1B
//Create a separate array with the corresponding stock quantities of each item maximum of 10.
 const stockQuantities = [8, 5, 5, 2, 6, 3, 8,10, 7,2]


            //QUESTION 2
 //Write a function to add a new item to the inventory, updating both arrays.
 function addNew(newItem,newQuantity){
    groceryItems.push(newItem)
    stockQuantities.push(newQuantity)
 }
 addNew("Grapes", 6)

 console.log({groceryItems});
 console.log({stockQuantities});


            //QUESTION 3
//Write a function to update the stock quantity of an existing item.
function updateStock(existingStock,quantityUpdate){
    for(let i = 0; i<= groceryItems.length; i++){
        let d = groceryItems.indexOf(existingStock)
        
       if(d===stockQuantities[i]){
        console.log("nine")}
           stockQuantities.splice(d, 1, quantityUpdate);
           console.log(stockQuantities);
        }
     }


updateStock("Mango",9)

//Write a function to calculate the total number of items in the inventory.





