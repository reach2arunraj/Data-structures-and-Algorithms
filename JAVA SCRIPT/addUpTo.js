function addUpTo(n){
  let total = 0;
  for(let i = 1; i<=n; i++){
    total +=i;
  }
  return total;
}
console.log(addUpTo(10))



function addUpTo(n){
  return n * (n+1)/2
}
console.log(addUpTo(10))


