
function calcularISR(salarioMensual) {
  let  salarioAnual = salarioMensual * 12;

 

      const primer_umbral =416220.00;
      const segundo_umbral =624329.00;
      const tercero_umbral =867123.00;

      let resultado_pago;


  if (salarioAnual <= 416220.00) {
      alert('salario exento de impuesto')
  }
  //primer caso
  else if ( salarioAnual > 416220.00 && salarioAnual <= 624329.00) {
    exedente=  salarioAnual - 416220.00  
    aplicar_impuesto= exedente * 0.15
     impuesto = aplicar_impuesto / 12

    document.getElementById('resultado').innerText= impuesto.toFixed(2)
  }
  //segundo caso 
  else if (salarioAnual > 624329.00 && salarioAnual <= 867123.00) {
    exedente=  salarioAnual - 624329.00
    exedente_segundo_caso=   salarioAnual- 624329.00

    primera_aplicacion= exedente * 0.15
    segunda_aplicacion=  exedente_segundo_caso * 0.20

    resultado_pago= primera_aplicacion + segunda_aplicacion

    impuesto = resultado_pago / 12
    document.getElementById('resultado').innerText= impuesto.toFixed(2)
    
  }else if (salarioAnual > 867123.00) {
    exedente=  salarioAnual - 624329.00
    exedente_segundo_caso=   salarioAnual- 624329.00
    tercer_exedente= salarioAnual - 867123.00

    primera_aplicacion= exedente * 0.15
    segunda_aplicacion=  exedente_segundo_caso * 0.20
    tercera_aplicacion= tercer_exedente* 0.25

    resultado_pago= primera_aplicacion + segunda_aplicacion + tercera_aplicacion

    impuesto=resultado_pago / 12
    
    document.getElementById('resultado').innerText=   impuesto.toFixed(2)

  }
  
}
  




  document.querySelector('button').addEventListener('click',()=>{
    let salario= document.querySelector('input')
    let salarioMensual=parseInt(salario.value)
    
    if (salario.value != '') {
       calcularISR(salarioMensual);
    }else{
        alert("Ingrese un valor")   
    }
  
  })