let idade = 14
let nome = 'Rodrigo'

if(idade >= 18 && idade < 100){
    console.log(`${nome}: - Gostaria de uma cerveja`)
    console.log('Vendedor: - Claro senhor! Tome aqui!')
} 

else if (idade < 18){
    console.log(`${nome}: - Gostaria de uma cerveja`)
    console.log('Vendedor: -Desculpe senhor. Bebidas alcólicas apenas para maiores de idade.')
} 

else if(idade >= 100){
    console.log(`${nome}: - Gostaria de uma cerveja`)
    console.log('Vendedor: - Com esta idade não recomendo que beba bebidas alcólicas. E isso se estiver vivo ainda.')
}