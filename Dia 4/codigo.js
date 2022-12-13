
function pregunta1(){
    let valor=document.getElementById("input1").value;
    let lista=valor.split("\n");

    let sum=0;
    for (let i = 0; i < lista.length; i++) {
        let elfos=lista[i].split(",");
        let elfo1=elfos[0].split("-");
        let elfo2=elfos[1].split("-");
        

        if((parseInt(elfo1[0])>=parseInt(elfo2[0]) && parseInt(elfo1[1])<=parseInt(elfo2[1]))||(parseInt(elfo1[0])<=parseInt(elfo2[0]) && parseInt(elfo1[1])>=parseInt(elfo2[1]))){
            sum++;
        }
    }
    document.getElementById("respuesta1").innerHTML="Respuesta: " +sum;

    // 10      11
    //     20     21
}

function pregunta2(){
    let valor=document.getElementById("input2").value;
    let lista=valor.split("\n");

    let sum=0;
    for (let i = 0; i < lista.length; i++) {
        let elfos=lista[i].split(",");
        let elfo1=elfos[0].split("-");
        let elfo2=elfos[1].split("-");
        

        if((parseInt(elfo1[0])>=parseInt(elfo2[0]) && parseInt(elfo1[0])<=parseInt(elfo2[1]))||
        (parseInt(elfo1[1])>=parseInt(elfo2[0]) && parseInt(elfo1[1])<=parseInt(elfo2[1]))||
        (parseInt(elfo2[0])>=parseInt(elfo1[0]) && parseInt(elfo2[0])<=parseInt(elfo1[1]))||
        (parseInt(elfo2[1])>=parseInt(elfo1[0]) && parseInt(elfo2[1])<=parseInt(elfo1[1]))){
            sum++;
        }
    }
    document.getElementById("respuesta2").innerHTML="Respuesta: " +sum;
}