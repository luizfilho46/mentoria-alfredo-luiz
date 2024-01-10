let n = 9
menos(n)

function menos(k) {
  if (k >= 0) {
    console.log("maior: "+ k);
    
    menos(k-1)
  }
}