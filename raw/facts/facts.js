let myArray = [13,22,45,7,8,11,12];
function cb(elem){
    return elem%2==0?elem+1:elem-1;
}
// myArray = myArray.map(trans);
function prime(elem){
    for(let i=2;i<elem;i++){
        if(elem%i==0){
            return false;
        }
    }return true;
}
// let filtered = myArray.filter(prime);
// console.log(myArray);
// console.log(filtered);

function mymap(arr,cb){
    let arr2=[];
    for(let i=0;i<arr.length;i++){
        arr2.push(cb(arr[i]));
    }
    return arr2;
}
console.log(mymap(myArray,cb));
//'''''''''''''''''''''''''''''''''''''''''''''''''//
function fn(){
    console.log("i am fn");
}
console.log(fn);
fn.myprop = "i am fn properties";
fn.myfn = function (){
    console.log("i am function inside fn function");
}
fn.myfn();