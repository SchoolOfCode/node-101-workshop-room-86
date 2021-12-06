let myCollection = [
    {
      name: "School of Code mug",
      count: 1,
      whatILike: "It has my cute pixel character on it!"
    },
    {
      name: "School of Code hat",
      count: 2,
      whatILike: "An often overlooked fashion accessory"
    },
    {
      name: "School of Code pillow",
      count: 1,
      whatILike: "Eat. Sleep. Code. Repeat :)"
    }
  ];
  console.log(myCollection);

  //2c. Create a function called describeItem, which should take in an item as a parameter done //
  //(the argument handed to this function would be an item from our collection). 
    /* 
  The function should console.log a message according to how many of the item you have.
 Only one of the item in your collection,  log "I have a name. Here's what I like about it: whatILike". 
 More than one of it, the message should log "I have count names. Here's what I like about them: whatILike".
For example, the result of calling the describeItem function with the first item in our collection would be:
 "I have a School of Code mug. Here's what I like about it: It has my cute pixel character on it!"*/

  function describeItem(item) {
    if (item.count === 1 ){
    console.log("I have a " + (myCollection[0].name) + ". Here's what I like about it:" + (myCollection[0].whatILike))
    } 
    else {
        console.log("I have count names. Here's what I like about them: whatILike")
    }}
  //Call your function below where you've defined it, handing in the first item in myCollection
  describeItem(myCollection[0])
