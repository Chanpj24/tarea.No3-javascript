let text = "";
let reverse  = "";
text = prompt('ingrese la palabra')
for (let i = text.length; i >=0; i--){
    reverse = reverse + text.charAt(i);
}
if ((reverse==text)==0 || (reverse==text)==0){
    document.write(text,' no es un palindromo de ', reverse)
}
else {document.write(text,' si es un palindromo de ', reverse)}

