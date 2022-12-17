
function pregunta1(){
    let valor=document.getElementById("input1").value;
    let lista=valor.split("\n");

    let crates=[];
    for(let i=1;i<10;i++){
        crates[i]=[];
    }

    for(let i=0;i<8;i++){
        //console.log(lista[i]);
        let array=[];
        for(let j=1;j<lista[i].length; j+=4){
            array.push(lista[i].substring(j,j+1));
            if(lista[i].substring(j,j+1)!=" "){
                crates[array.length].push(lista[i].substring(j,j+1));
            }
        }

    }

    for (let i = 10; i < lista.length; i++) {
        let moves=lista[i].split(" ");
        for(let j=0;j<moves[1];j++){
            crates[moves[5]].unshift(crates[moves[3]].shift())
            //console.log(j);
        }//MQSHJMWNH
        //
    }
    
    let res="";
    for(let i=1;i<10;i++){
        res+=crates[i][0];
    }

    document.getElementById("respuesta1").innerHTML="Respuesta: " +res;
}

function pregunta2(){
    let valor=document.getElementById("input2").value;
    let lista=valor.split("\n");

    let crates=[];
    for(let i=0;i<10;i++){
        crates[i]=[];
    }

    for(let i=0;i<8;i++){
        //console.log(lista[i]);
        let array=[];
        for(let j=1;j<lista[i].length; j+=4){
            array.push(lista[i].substring(j,j+1));
            if(lista[i].substring(j,j+1)!=" "){
                crates[array.length].push(lista[i].substring(j,j+1));
            }
        }

    }

    for (let i = 10; i < lista.length; i++) {
        let moves=lista[i].split(" ");
        //console.log(moves);
        for(let j=0;j<moves[1];j++){
            crates[0].unshift(crates[moves[3]].shift())
            
        }

        for(let j=0;j<moves[1];j++){
            crates[moves[5]].unshift(crates[0].shift());
        }
    }
    
    let res="";
    for(let i=1;i<10;i++){
        res+=crates[i][0];
    }

    document.getElementById("respuesta2").innerHTML="Respuesta: " +res;
}