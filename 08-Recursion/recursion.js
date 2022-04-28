
function factorialIterativo(num) {

    let total = 1;
    while (num > 1) {
        total *= num
        num--
    }
    return total;
}

function factorial(num, total = 1) {

    if (num === 0) {
        return total;
    } else {
        total *= num
    }
    return factorial(num - 1, total);
}

function fibonacci(num) {

    let fib = [0,1]
    for(let i = 2; i < num; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    console.log(fib[fib.length - 1])
    return fib[fib.length - 1];
}

function fib(n) {
    if (n<=1) {
      return 1
    }else{
        return fib(n-1) + fib(n-2)
    }
}

function factores(n,i=2,array=[]) {
    if(n===1){
        return array
    }else if(!(n%i)){
        n = n/i
        array.push(i)
        console.log(array)
    }else{
        i++
    }
    return factores(n,i,array)
}