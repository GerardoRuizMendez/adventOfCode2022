
function pregunta1(e){
    let valor=document.getElementById("input1").value;
    let lista=valor.split("\n");

    let score=0;
    //console.log(lista);
    for (let i = 0; i < lista.length; i++) {
        [valor1, valor2]=lista[i].split(" ");
        if(valor2=="X"){
            score+=1;
            if(valor1=="A"){
                score+=3;
            }
            if(valor1=="B"){
                score+=0;
            }
            if(valor1=="C"){
                score+=6;
            }
        }
        if(valor2=="Y"){
            score+=2;
            if(valor1=="A"){
                score+=6;
            }
            if(valor1=="B"){
                score+=3;
            }
            if(valor1=="C"){
                score+=0;
            }
        }
        if(valor2=="Z"){
            score+=3;
            if(valor1=="A"){
                score+=0;
            }
            if(valor1=="B"){
                score+=6;
            }
            if(valor1=="C"){
                score+=3;
            }
        }
        console.log(score);
    }
    document.getElementById("respuesta1").innerHTML="Respuesta: " +score;
    //console.log(valor.split("\n"));
}

function pregunta2(){
    let valor=document.getElementById("input2").value;
    let lista=valor.split("\n");

    let score=0;
    //console.log(lista);
    for (let i = 0; i < lista.length; i++) {
        [valor1, valor2]=lista[i].split(" ");
        if(valor2=="X"){
            score+=0;
            if(valor1=="A"){
                score+=3;
            }
            if(valor1=="B"){
                score+=1;
            }
            if(valor1=="C"){
                score+=2;
            }
        }
        if(valor2=="Y"){
            score+=3;
            if(valor1=="A"){
                score+=1;
            }
            if(valor1=="B"){
                score+=2;
            }
            if(valor1=="C"){
                score+=3;
            }
        }
        if(valor2=="Z"){
            score+=6;
            if(valor1=="A"){
                score+=2;
            }
            if(valor1=="B"){
                score+=3;
            }
            if(valor1=="C"){
                score+=1;
            }
        }
        console.log(score);
    }
    document.getElementById("respuesta2").innerHTML="Respuesta: " +score;
}