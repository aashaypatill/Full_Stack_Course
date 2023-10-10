//arrow function
//basically it has a two part singleline and multiline arrow function
function add(x,y){
    let z=x+y
    return z
}
let add2=(x,y)=>x+y
let add3=(x,y)=>{
    let z=x+y
    return z
}
let a=add(100,200)
let b=add2(200,200)
let c=add3(500,500)
console.log( "Addition is =",a)
console.log( "Addtion is =",b)
console.log("Addtion is =",c)