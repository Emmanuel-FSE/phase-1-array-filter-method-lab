function findMatching(drivers, name){
    const names = drivers.filter(function(driver){
        if(driver == name || driver == name.toLowerCase()){
            return driver;
        }
    })
    return names;
}

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];


function fuzzyMatch(drivers, str){
     let names = drivers.filter(function(driver){
        if(driver.charAt(0) == str || driver.slice(0, 2) == str){
            return driver;
        }
    })
    return names;
}

console.log (fuzzyMatch(drivers, "Sa"));


  function matchName(drivers, str){
    const names = drivers.filter(function(driver){
        if(driver.name == str){
            return driver;
        }
    })
    return names;
  }