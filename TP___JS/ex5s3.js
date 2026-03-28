      // function reverseString(str)
      const reverseString=(str)=>
        {
            let rev = "";
            for (let i = str.length-1; i >= 0 ;i--)
            {
                rev+=str[i];
            }
            return rev;
        }

let mot = prompt("entrer le mot a reverse : ")
console.log("chaine inreverse : " , reverseString(mot))
