
function pregunta1(){
    let valor=document.getElementById("input1").value;
    let lista=valor.split("\n");
    let valores=["",""];

    sum=0;
    for (let i = 0; i < lista.length; i++) {
        valores=[lista[i].substring(0,lista[i].length/2), lista[i].substring(lista[i].length/2,lista[i].length)];
        for(let j=0; j<valores[0].length; j++){
            if(valores[1].includes(valores[0][j])){
                //a = 97
                //A = 39
                if(valores[0][j].charCodeAt(0)>96){
                    sum+=valores[0][j].charCodeAt(0)-96;
                }else{
                    sum+=valores[0][j].charCodeAt(0)-38;
                }
                //console.log(sum);
                break;
            }
        }
    }
    document.getElementById("respuesta1").innerHTML="Respuesta: " +sum;
}

function pregunta2(){
    let valor=document.getElementById("input2").value;
    let lista=valor.split("\n");
    let valores=["",""];

    sum=0;
    for (let i = 0; i < lista.length; i+=3) {

        for(let j=0; j<lista[i].length; j++){
            if(lista[i+1].includes(lista[i][j]) && lista[i+2].includes(lista[i][j])){
                //a = 97
                //A = 39
                if(lista[i][j].charCodeAt(0)>96){
                    sum+=lista[i][j].charCodeAt(0)-96;
                }else{
                    sum+=lista[i][j].charCodeAt(0)-38;
                }
                //console.log(sum);
                break;
            }
        }
    }
    document.getElementById("respuesta2").innerHTML="Respuesta: " +sum;
}