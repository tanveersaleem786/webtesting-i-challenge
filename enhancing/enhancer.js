
const items = [
  {name: "Weapon1", durability: 0, enhancement: 12 },
  {name: "Weapon2", durability: 10, enhancement: 15 },
  {name: "Weapon3", durability: 50, enhancement: 20 },
  {name: "Weapon4", durability: 90, enhancement: 17 },
  {name: "Weapon5", durability: 100, enhancement: "test"}
]



function succeed(item) {  
  
    let {enhancement} = item;

    if(typeof enhancement !== "number") {
      throw new TypeError("enhancment should be a number")
    }
    
    if(enhancement < 0) {

        enhancement = 0;

    } else if(enhancement >= 20) {

        enhancement = 20;

    } else {

        enhancement = enhancement+1; 

    }

    return { ...item, enhancement: enhancement};

}


function fail(item) {
  
    let {enhancement, durability} = item

    if(typeof enhancement !== "number" || typeof durability !== "number") {
      throw new TypeError("enhancment and durability should be a number")
    }
    
    if(enhancement < 15) {

          durability = (durability < 5 ? 0 : durability-5)

    } else if(enhancement >= 15) {

          durability = (durability < 10 ? 0 : durability-10)

          if(enhancement > 16)
            enhancement = enhancement-1;

    } 

    return { ...item, durability: durability , enhancement: enhancement};

}

function repair(item) {
  return { ...item, durability: 100};
}


function get(item) {

    let {name, enhancement} = item

    if(typeof enhancement !== "number") {
      throw new TypeError("enhancment should be a number")
    }
      
    if(enhancement > 0) 
        name = `[+${enhancement}]${name}`    

    return { ...item, name: name};

}



module.exports = {
  items,
  succeed,
  fail,
  repair,
  get,
  
};

