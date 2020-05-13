module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {  
  
  let {enhancement} = item;
  
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
  return { ...item };
}
