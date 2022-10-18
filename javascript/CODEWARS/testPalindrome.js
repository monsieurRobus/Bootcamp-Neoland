function palindrome(string) {
    
    if(string==="")
            return true
            
        string= string.toLowerCase().match(/[a-z]/gm)
        stringR = [...string].reverse()
        
        for (index in string)
            if(string[index] != stringR[index])
                return false
            
        return true
}

const palindrome2 = (palindromo) => 
    {
        if(palindromo==="")
            return true
            
        palindromo= palindromo.toLowerCase().match(/[a-z]/gm)
        return palindromo.reduce((x,y)=>x+y) == palindromo.reduceRight((x,y)=>x+y)
    }


const frase = "Dabale arroz a la zorra el abad"

console.log(palindrome2(frase))