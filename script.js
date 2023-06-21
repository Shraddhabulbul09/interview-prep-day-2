//spread opreators - Array

const arr = [3,4,5,6,7,8,9];
for (let i=0; i< arr.length; i++){
    console.log(arr[i]);

}
console.log(...arr);

//spread opreatores - Object

const Obj1 = {
    name : "Tokyo",
    age : 25
}

const Obj2 = {
    Course : "MERN",
    ...Obj1
}

console.log(Obj1);
console.log(Obj2);

// spread opreators - function

const arr1 = [1,2,4,6]

function Sum(a,b,c){
    console.log(a,b,c);
    return a+b+c;
}
console.log(Sum(...arr1));

//setTimeout

function Display(){
        let time = new Date();
      let hr = time.toLocaleTimeString();
      console.log(hr);

      setTimeout(()=>{
        Display();
      },1000)
}
Display();

//callback function

function greet (name, callback){
    console.log(`Hii ${name}`);
    callback();
}
function callMe(){
    console.log(" I am a callback function");
}

greet('peter',callMe)

//callback Hell


function demo(callback){
    console.log("step 1");
    callback();
}
function demo2(callback){
    console.log("step 2");
    callback();
}
function demo3(callback){
    console.log("step 3");
    callback();
}
function demo4(callback){
    console.log("step 4");
    callback();
}
function demo5(){
    console.log("step 5");
}

demo(function(){
    demo2(function(){
        demo3(function(){
            demo4(function(){
                demo5();
            })
        })
    })
})

//NaN

var a = 100;
var b = "abc"
console.log(a-b);
