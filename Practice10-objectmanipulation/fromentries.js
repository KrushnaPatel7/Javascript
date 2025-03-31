const person1 = [
    ['name', 'Krushna'],
    ['age', 23],
    ['city', 'Pune']
  ];
  
  // Convert the array of key-value pairs to an object
  const per = Object.fromEntries(person1);
  
  console.log(per);
  
  