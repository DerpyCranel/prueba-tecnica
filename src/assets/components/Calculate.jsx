import React, { useEffect } from "react";

function Calculate({ n, onResult }) {
  // Función para verificar si un número es primo
  const primo = (num) => {
    if (num  === 0) return false;

    const limite = Math.sqrt(num);
    for (let i = 2; i <= limite; i++) {
      if (num % i === 0) return false;
    }

    return num; 
  };

  // Función para calcular el número triangular
  const triangular = (num) => {
    return (num * (num + 1)) / 2;
  };

  // Función para calcular el numero de Fibonacci
  const fibonacci = (num) => {
    const fib=[0,1];

    for(let i = 2;i<= num;i++){
        fib[i]=fib[i-1]+fib[i-2];
    }

    return fib[num];
  };

    // Función para calcular la fórmula
    const formula = (num) => {
        const triangularResult = triangular(num - 1);
        const fibonacciResult = fibonacci(num - 2);
        //calcular la fórmula
        return ( primo(num + 3) * triangularResult) / fibonacciResult;
      };
    

  useEffect(() => {
    const result = formula(n);
    if (result !== undefined) {
      onResult(result);
    }
  }, [n, onResult]);

  return null;
}

export default Calculate;
