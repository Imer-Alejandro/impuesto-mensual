
function calcularISR(salarioMensual) {
  const salarioAnual = salarioMensual * 12;

  if (salarioAnual < 416220.00) {
      alert('salario exento de impuesto')
  }
  else{
      // Define las tasas y los umbrales de la tabla de escalas
      const tasas = [0.15, 0.20, 0.25];
      const umbrales = [416220.00, 624329.00, 867123.00];

      // Inicializa el impuesto a cero
      let impuestoAnual = 0;

      // Calcula el impuesto escalonado
      for (let i = 0; i < tasas.length; i++) {
        if (salarioAnual > umbrales[i]) {
          impuestoAnual += (umbrales[i] - (i === 0 ? 0 : umbrales[i - 1])) * tasas[i];
        } else {
          impuestoAnual += (salarioAnual - (i === 0 ? 0 : umbrales[i - 1])) * tasas[i];
          break; // Sale del bucle porque se ha aplicado la tasa correspondiente
        }
      }

      // Divide el impuesto anual por 12 para obtener el impuesto mensual
      const impuestoMensual = impuestoAnual / 12;

      return impuestoMensual;
  }
  
  
}




  document.querySelector('button').addEventListener('click',()=>{
    let salario= document.querySelector('input')
    let salarioMensual=parseInt(salario.value)
    
    if (salario.value != '') {
      const impuestoMensual = calcularISR(salarioMensual);
      document.getElementById("resultado").innerHTML=`${impuestoMensual.toFixed(2)}`
    }else{
        alert("Ingrese un valor")   
    }
  
  })