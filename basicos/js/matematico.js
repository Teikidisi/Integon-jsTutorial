//4 funciones sum subtract mult divide 

function Suma(num1, num2){
    return num1+num2;
    
}

function Resta(num1,num2){
    return num1-num2;
}

function Multiplicar(num1,num2){
    return num1*num2;
}

function Dividir(num1,num2){
    
    if (num2 != 0){
        return num1 / num2;
    }
    return "No se puede dividir por 0";
}