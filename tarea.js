

let bisiesto;

  bisiesto=prompt('Ingrese el Año:','');

  bisiesto=parseInt(bisiesto)


 if ((((bisiesto%100)!=0)&&((bisiesto%4)==0))||((bisiesto%400)==0)){

  document.write('El año es bisiesto ');

 }

 else{document.write('El año no es bisiesto ');}

 
 
