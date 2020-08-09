var num;
var fib = []; 

fib[0] = 0;
fib[1] = 1;

for (num = 2; num <= 10; num++) {
  fib[num] = fib[num - 2] + fib[num - 1];
  console.log(fib[num]);
}