 let fahrenheit = document.getElementById('fahrenheit')
  let celsius = document.getElementById('celsius');
  let kelvin = document.getElementById('kelvin')


function convertor() {

  let result = celsius.value * 1 + 273.15;
 kelvin.value=result.toFixed(2)
}

function celsiusToOther(){
;
  let result = celsius.value * 1 + 273.15;
  let result2 = celsius.value *9/5+32
 kelvin.value=result.toFixed(2);
 fahrenheit.value=result2.toFixed(2)
}
celsius.oninput=celsiusToOther;


function kelvinToOther(){
 
  let result = kelvin.value * 1 - 273.15;
  let result2 = (kelvin.value * 1 - 273.15)*9/5+32
 celsius.value=result.toFixed(2)
  fahrenheit.value=result2.toFixed(2)
}
kelvin.oninput=kelvinToOther;


function fahrenheitToOther(){

  let result = (fahrenheit.value-32)*5/9+273
  let result2 = (fahrenheit.value-32)*5/9;
  kelvin.value=result.toFixed(2)
 celsius.value=result2.toFixed(2)
}
fahrenheit.oninput=fahrenheitToOther
