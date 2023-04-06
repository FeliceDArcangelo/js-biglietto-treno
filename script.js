let chilometri = parseInt(prompt(`Quanti chilometri dovrai percorrere?`))
chilometri = chilometri.toFixed(2)
const age = parseInt(prompt(`Quanti anni hai?`))
let price = chilometri * 0.21
price = price.toFixed(2)
let young_discount = price * 20 / 100
young_discount = young_discount.toFixed(2)
let young_price = price - young_discount
young_price = young_price.toFixed(2)
let over_discount = price * 40 / 100
over_discount = over_discount.toFixed(2)
let over_price = price - over_discount
over_price = over_price.toFixed(2)


if (isNaN(chilometri) || isNaN(age)){
    document.getElementById(`price`).innerHTML = ` ` + `Bisogna inserire solo caratteri numerici!` + `€`
} else if (age <= 17){
    document.getElementById(`price`).innerHTML = ` ` + young_price + `€`
} else if (age >= 65){
    document.getElementById(`price`).innerHTML = ` ` + over_price + `€`
} else{
    document.getElementById(`price`).innerHTML =  ` ` + price + `€`
} 
