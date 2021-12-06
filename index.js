import myCollection from "./collection.js";
  //console.log(myCollection);

  //2c. Create a function called describeItem, which should take in an item as a parameter done //
  //(the argument handed to this function would be an item from our collection). 
    /* 
  The function should console.log a message according to how many of the item you have.
 Only one of the item in your collection,  log "I have a name. Here's what I like about it: whatILike". 
 More than one of it, the message should log "I have count names. Here's what I like about them: whatILike".
For example, the result of calling the describeItem function with the first item in our collection would be:
 "I have a School of Code mug. Here's what I like about it: It has my cute pixel character on it!"*/

  function describeItem(item) {
    if (item.count > 1 ){
    console.log("I have " + (item.name) + ". Here's what I like about them:" + (item.whatILike))
    } 
    else {
        console.log("I have a " + (item.name) + ". Here's what I like about it:" + (item.whatILike))
        
    }}
  //Call your function below where you've defined it, handing in the first item in myCollection
  //describeItem(myCollection[0])

  // 👉 2d. Now make a function called describeCollection that takes in an array as a parameter. 
  
 function describeCollection(collection) {
   collection.forEach(describeItem);
 }
 describeCollection(myCollection)
  // for(let i = 0; i < array.length; i++)
 // if( i<=3 ){ describeItem()
  //}
  //}
//describeCollection[(myCollection)]

  //The function should loop through the array, and for each item, it should call the describeItem 
  //function so it displays a message according to how many you have in your collection.
 /* 

//taak 1b
const legendaryCelebs = celebs.map(makeLegend)
console.log(legendaryCelebs)

//task 1c
function startsWithVowel (celebs) {
 return celebs.startsWith("A") || celebs.startsWith("E") 
}

let vowelCelebs = celebs.filter(startsWithVowel)
console.log(vowelCelebs);



Call your function below where you've defined it, handing in the myCollection array.

Run the file again to see the output and check that it outputs the correct message for each item 
in your collection (i.e. each object in your myCollection array).*/
