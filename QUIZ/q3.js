function uniqueArray(value, index, self) {
    return self.indexOf(value) === index;
}
  
  // usage example:
  var a = [4, 5, 6, 5, 6];
  var unique = a.filter(uniqueArray);
  
  console.log(unique);