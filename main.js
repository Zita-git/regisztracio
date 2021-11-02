let nevHiba, jelszoHiba;




function megegyezik(){
    let egyik=document.getElementById("jelszo").value;
    let masik=document.getElementById("jelszo2").value;

    if (egyik!==masik) {
        document.getElementById("jelszoHiba").innerHTML = "A két jelszónak meg kell egyeznie!";
        jelszoHiba=true;
    }else{
        document.getElementById("jelszoHiba").innerHTML = "";
        jelszoHiba=false;
    }
}

function sikeresRegisztracio(){
    if (!jelszoHiba && !nevHiba) {
        document.getElementById("sikeres").innerHTML = 'Sikeres Regisztráció';
        document.getElementById("sikeres").classList.add("zold");
    }else{
        document.getElementById("sikeres").innerHTML = '';
    }
}
function kesleltet(e){
    setTimeout(sikeresRegisztracio, 2000);
}


function nevMegvaltozott(){

    let hossz= document.getElementById("nev").value.length;

    document.getElementById("nevHossz").innerHTML = hossz+"/20";

    if(hossz>20){
        nevHossz.classList.add("piros");
        alert("A név túl hosszú!");
        nevHiba=true;
    }
    if(hossz<=20){
        nevHossz.classList.remove("piros");
        nevHiba = false;
    }

}

function nevBillentyu(e){
    e.stopPropagation();
}



function jelszoMegvaltozott(){

    let hossz= document.getElementById("jelszo").value.length;
    document.getElementById("jelszoHossz").innerHTML = hossz+"/8";

    
    if(hossz<8){
        jelszoHossz.classList.add("piros");
        jelszoHiba=true;
    }
    if(hossz>=8){
        jelszoHossz.classList.remove("piros");
        jelszoHiba=false;
    }

}

function jelszoBillentyu(e){
    e.stopPropagation();
}




function init(){
    
    megegyezik();
    document.getElementById("nev").addEventListener("input", nevMegvaltozott);
    document.addEventListener("keydown", nevBillentyu);

    document.getElementById("jelszo").addEventListener("input", jelszoMegvaltozott);
    document.addEventListener("keydown", jelszoBillentyu);
    
    document.getElementById("reg").addEventListener("click", kesleltet);
}
document.addEventListener("DOMContentLoaded", init);