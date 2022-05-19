  //reduce with another array method inside


  let list =[
      {make:'toyota', model:'celica', colors:['red', 'green', 'blue']},
      {make:'honda', model:'civic', colors:['blue', 'pink']},
      {make:'chrysler', model:'300', colors:['black','yellow', 'gold']},
      {make:'dodge', model:'caravan', colors:['red', 'blue']},
      {make:'DMC', model:'DeLorean', colors:['white', 'green','periwinkle']},
  ]


  function findCarsByColor(carList,color){
        //loop through cars
        // return list of cars that match a given color 
        //use find method on colors to see if that car has a color       

    let cars = carList.reduce((acc, car)=>{
        let hasColor = car.colors.find(carColor=>carColor===color);
        if(hasColor) acc.push(car);
        return acc;
    },[]);

    return cars;
  }

  console.log(findCarsByColor(list,'blue'));