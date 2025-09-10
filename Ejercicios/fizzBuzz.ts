
//-----------------------------------------------------------------
//                      Ejercicio 1                               -
//-----------------------------------------------------------------
// Crea una función en TypeScript que recorra los números del 1 al 50.

// -   Si el número es divisible por 3, imprime `"Fizz"`.\
// -   Si el número es divisible por 5, imprime `"Buzz"`.\
// -   Si es divisible por ambos, imprime `"FizzBuzz"`.\
// -   En caso contrario, imprime el número.

// **Tip extra:** tipa el parámetro de entrada como `number` y asegúrate de
// que la función no retorne nada (`void`).
function fizzBuzz():void{
    for (let i=1;  i<=50; i++){
        let resultado=(i%3 === 0 ?"Fizz":"")+(i%5 ===0 ? "Buzz":"");
        console.log(resultado||i);
    }
    }
    fizzBuzz()


//-----------------------------------------------------------------
//                      Ejercicio 2                               -
//-----------------------------------------------------------------
// Dado el siguiente arreglo de nombres en TypeScript:

// ``` ts
// const names: string[] = ["Ana", "Luis", "Carlos", "María"];
// ```

// Crea una función que recorra el arreglo usando **`forEach`** e imprima
// en consola un mensaje personalizado para cada nombre, por ejemplo:

//     Hola Ana, bienvenido/a al sistema.

// **Tip extra:** tipa correctamente el arreglo y el parámetro de la
// función que recibe cada nombre.

const names:string[]=["Mayerly", "Roxana", "Pablo"];

names.forEach(element => {
    
    
});


//-----------------------------------------------------------------
//                      Ejercicio 3                               -
//-----------------------------------------------------------------
// Tienes un arreglo de objetos que representan estudiantes con su nombre y
// su nota:

// ``` ts
// interface Student {
//   name: string;
//   grade: number;
// }

// const students: Student[] = [
//   { name: "Ana", grade: 85 },
//   { name: "Luis", grade: 45 },
//   { name: "María", grade: 70 },
//   { name: "Carlos", grade: 50 }
// ];
// ```

// Crea una función que use el método **`filter`** para obtener solo los
// estudiantes que aprobaron (nota mayor o igual a 60) y retorne un nuevo
// arreglo con esos estudiantes.

interface Student {
  name: string;
  grade: number;
}


const students: Student[] = [
  { name: "Ana", grade: 85 },
  { name: "Luis", grade: 45 },
  { name: "María", grade: 70 },
  { name: "Carlos", grade: 50 }
];

function estudiantesAprobados(students:Student[]){
    const aprobados =students.filter(student=>student.grade >=60);
    console.log(`Los estudiantes aprobados son: ${aprobados}`);
}
