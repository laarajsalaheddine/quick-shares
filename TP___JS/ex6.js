 function calculate(n1,n2,op){
    let resultat=null;
    if (op ==="+"){
        resultat=n1+n2;
    }
    else if (op==="-"){
        resultat=n1-n2;
    }
    
    else if (op==="*"){
        resultat=n1*n2;
    }
    else if (op==="/"){
        if (n2===0){
           resultat="ereur";
             
        }else{
            resultat=n1/n2;
        }
       
    }else{
        resultat="operateure inconnue"+op
    }
    return resultat;
 }
let nu1=Number(prompt("introuduire la premiere nombre "))
let nu2=Number(prompt("introuduire la deuxieme nombre "))
let op1=prompt("entrer un operateur")

let abc=calculate(nu1,nu2,op1)
console.log (abc)