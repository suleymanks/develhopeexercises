function sumUntil(maxValue) {
  let sumValue=0;
  for(let i= 1; maxValue >= i; i++){
    sumValue +=i;
  }
  return sumValue;
}

console.log(sumUntil(5));