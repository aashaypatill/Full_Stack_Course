let x="100"
let z=parseInt(x)
let y=Number(x)

console.log(typeof(z))//number
console.log(typeof (x))//string
console.log(typeof(y))//number
// #############################################################

let a=Number("100px")//number ha attribute px value assign nahi kart 
let b=parseInt("200px")

console.log(a)//nan
console.log(b)//200
console.log("100"/2)//50
//###############################################################
let p
console.log(p)//undifined
console.log(1/0)//infinity
console.log("abc"/10)//nan