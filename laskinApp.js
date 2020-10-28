const ruutu = document.getElementById("input");

let ekaNumero

const add = function(operation){

    /*if lause estää operaattoreiden peräkkäisen lisäämisen*/

    if(operation === "+" ||
       operation === "-" ||
       operation === "." ||
       operation === "*" ||
        operation === "/"){
        if(ruutu.innerHTML.split("")[ruutu.innerHTML.split("").length-1] !=="+" 
        && ruutu.innerHTML.split("")[ruutu.innerHTML.split("").length-1] !=="-"
        && ruutu.innerHTML.split("")[ruutu.innerHTML.split("").length-1] !=="."
        && ruutu.innerHTML.split("")[ruutu.innerHTML.split("").length-1] !=="*"
        && ruutu.innerHTML.split("")[ruutu.innerHTML.split("").length-1] !=="/"){
            ruutu.innerHTML += operation;
        }
    }
    else{  
        document.getElementById("input").innerHTML += operation;  /* else lisää merkin */
    }
}

const clear1 = function(){
    document.getElementById("input").innerHTML = "";  /* pyyhkii ruudun */
}


const laske = function(){   /* eval hoitaa laskun */
    try{
        const laskutoimitus = ruutu.innerHTML;
        ruutu.innerHTML = eval(laskutoimitus);
    }
    catch{
        ruutu.innerHTML = "ERROR";
    }
}



