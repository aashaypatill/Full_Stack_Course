//returning value from the function
function getmessage(fname){
    let msj="hello"+fname
    return msj
}
function area(r){
    let a=3.14*r*r
    return a
}
let s1=getmessage("abc")
console.log(s1)
let x=area(1.2)
console.log("Area is "+x)
