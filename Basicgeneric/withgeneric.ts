function getLength<T extends { toString(): string }>(arg: T): number{
    return arg.toString().length;  
  }
  
  console.log(getLength(123));      
  console.log(getLength("hello"));  
  