const gifts = [ '***\n*cat*\n***', '****\n*game*\n****', '*****\n*socks*\n*****' ]

function wrapping(gifts) {
        
    for (gift in gifts){
        gifts[gift]=gifts[gift].replaceAll('*','').replaceAll('\n','')
        gifts[gift]='*'.repeat(gifts[gift].length)+'\n*'+gifts[gift]+'*\n'+'*'.repeat(gifts[gift].length)
    }

    return gifts
}
console.log(wrapping(gifts))