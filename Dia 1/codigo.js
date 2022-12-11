
function pregunta1(e){
    let valor=document.getElementById("input1").value;
    let lista=valor.split("\n");

    let suma=0;
    let maximo=0;
    for (let i = 0; i < lista.length; i++) {
        if(lista[i]==""){
            if(suma>maximo){
                maximo=suma;
            }
            suma=0;
        }
        else suma+=parseInt(lista[i]);
        
    }
    document.getElementById("respuesta1").innerHTML="Respuesta: " +maximo;
    //console.log(valor.split("\n"));
}

function pregunta2(){
    let valor=document.getElementById("input2").value;
    let lista=valor.split("\n");

    let suma=0;
    let maximos=[0,0,0];
    for (let i = 0; i < lista.length; i++) {
        //console.log(maximos[2]);
        if(lista[i]==""){
            if(suma>=maximos[0]){
                maximos[0]=suma;
                maximos.sort((a,b)=>a-b);
                
            } 
            suma=0;
        }
        else suma+=parseInt(lista[i]);
    }
    total=(maximos[0]+maximos[1]+maximos[2]);
    document.getElementById("respuesta2").innerHTML=`Respuesta: ${maximos[0]}, ${maximos[1]} y ${maximos[2]}. 
            La suma de ellos es ${total}`;
    //console.log(maximos);
}