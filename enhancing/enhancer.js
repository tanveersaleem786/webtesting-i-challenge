module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {  
  let upt_enhancement = '';
  if(item.enhancement < 0)
    upt_enhancement = 0;
  else if(item.enhancement >= 20)
    upt_enhancement = 20;
  else
    upt_enhancement = item.enhancement+1;
  
  //return { ...item, enhancement: item.enhancement+1};
  return { ...item, enhancement: upt_enhancement}; 
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100};
}

function get(item) {
  return { ...item };
}
