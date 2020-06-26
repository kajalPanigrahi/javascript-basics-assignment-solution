// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

 // Fruit object
 class Fruits
 {
     constructor(name,colour,price){
         this.name = name;
         this.colour = colour;
         this.price = price;
     }
     // Return the specific fruit details
     getFruit(){
         return `${this.name} :: Colour : ${this.colour} , price: ${this.price}`;
     }
 }
 // Creating Fruit list in Array Structure  
 fruitList = [
     new Fruits('Apple','Brown','120/kg'),
     new Fruits('Grapes','Green','70/kg'),
     new Fruits('Banana','Yello','50/kg'),
     new Fruits('Orange','Yello','100/Kg'),
     new Fruits('pomegranate','Red','180/kg')
 ];

 // Serching Operation
 let retObj = "";
 let lookUpfor = (key=>{
     fruitList.forEach(element => {
         if(element.name === key){
            retObj = element.getFruit();
         }
     });
     return retObj;
 })
 
 // Function invocation & printing in console
 let key ='pomegranate';
 let searchResult = lookUpfor(key);
 console.log(searchResult);
 
 

