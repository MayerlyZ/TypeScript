function fizzBuzz() {
    for (var i = 1; i <= 50; i++) {
        var resultado = (i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : ""); 
        console.log(resultado || i);
    }
}
fizzBuzz();
