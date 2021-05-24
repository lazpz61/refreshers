toUC = (word) => {
    let upper = word.toUpperCase();
    let arr = upper.concat(" ", "throw")
    return arr.split(" ");
  }
  
  toUC("basketball");
  
//   Returns [ 'BASKETBALL', 'throw' ]``


  const arr = ["laz", "ayisha", "rabia"]
  
  
  arr.forEach( element =>{
    let bigWord = element.toUpperCase();
    console.log(bigWord);
  })


// //   returns on console
// LAZ
// AYISHA
// RABIA




  
