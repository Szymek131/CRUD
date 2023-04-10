const dateToStr = function(dateObject){
  return dateObject.toISOString().slice(0, 10);
};

export default dateToStr;