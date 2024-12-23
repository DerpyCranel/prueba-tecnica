// Funciones necesarias para la fórmula
const primo = (num) => {
    if (num  === 0) return false;

    const limite = Math.sqrt(num);
    for (let i = 2; i <= limite; i++) {
      if (num % i === 0) return false;
    }

    return num;
  };
  
  const triangular = (num) => {
    return (num * (num + 1)) / 2;
  };
  

  const fibonacci = (num) => {
    const fib=[0,1];

    for(let i = 2;i<= num;i++){
        fib[i]=fib[i-1]+fib[i-2];
    }

    return fib[num];
  };
  
  const formula = (n) => {
    const primoValue = primo(n + 3);
    const triangularValue = triangular(n - 1);
    const fibonacciValue = fibonacci(n - 2);
  
    if (fibonacciValue === 0) return null; 
    return (primoValue * triangularValue) / fibonacciValue;
  };
  
  // Pruebas de la fórmula
  test("Prueba de la fórmula para los 10 primeros números naturales", () => {
    expect(formula(1)).toBe(NaN); 
    expect(formula(2)).toBe(null); 
    expect(formula(3)).toBe(0); 
    expect(formula(4)).toBe(42); 
    expect(formula(5)).toBe(0); 
    expect(formula(6)).toBe(0); 
    expect(formula(7)).toBe(0); 
    expect(formula(8)).toBe(38.5); 
    expect(formula(9)).toBe(0); 
    expect(formula(10)).toBe(27.857142857142858); 
  });
  