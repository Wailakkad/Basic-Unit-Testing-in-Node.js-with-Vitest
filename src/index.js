

const Max = (a , b)=>{
    if(a>b){
        return a
    }else if(a<b){
        return b
    }
}


const CheckEven = (number)=>{
    if(number % 2 === 0){
        return true
    }else{
        return false
    }
}


const ReserveString = (str)=>{
    if(!str){
        return ''
    }else{
        return str.split('').reverse().join('')
    }

}  

const Factorial = (n) => {
    if (n < 0) {
      throw new Error("Factorial is not defined for negative numbers");
    }
  
    if (n === 0 || n === 1) {
      return 1; // Base case
    }
  
    return n * Factorial(n - 1); // Recursive call
  }
  

module.exports = {CheckEven , Max, ReserveString , Factorial};