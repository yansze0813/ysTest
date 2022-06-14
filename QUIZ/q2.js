function uniqueValue(array) {
    for (var index = 0, single = []; index < array.length; index++) {
      if (array.indexOf(array[index], array.indexOf(array[index]) + 1) == -1)
        single.push(array[index]);
    };
    return single;
};
  
var items = [4, 5, 6, 5, 6];
  
console.log(uniqueValue( items ))