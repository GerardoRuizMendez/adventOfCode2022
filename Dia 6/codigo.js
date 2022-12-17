
function pregunta1(){
    let valor=document.getElementById("input1").value;
    let res="";
    
    for(let i=0; i<valor.length;i++){
        let sec=valor.substring(i,i+4);

        let flag=true;
        for(let j=0;j<sec.length;j++){
            if(sec.split(sec.charAt(j)).length-1>1){
                flag=false;
            }
        }
        if(flag){
            res=i+4;
            break;
        }
    }

    document.getElementById("respuesta1").innerHTML="Respuesta: " +res;
}

function pregunta2(){
    let valor=document.getElementById("input2").value;
    let res="";
    
    for(let i=0; i<valor.length;i++){
        let sec=valor.substring(i,i+14);

        let flag=true;
        for(let j=0;j<sec.length;j++){
            if(sec.split(sec.charAt(j)).length-1>1){
                flag=false;
            }
        }
        if(flag){
            res=i+14;
            break;
        }
    }

    document.getElementById("respuesta2").innerHTML="Respuesta: " +res;
}