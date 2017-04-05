/*var a =5;
if(true){
    let a = 10;
}*/
/*let PI = 3.1415;
const PI = 4;*/
/*const obj = {name:'zfpx'};
obj.name = 'zfpx2';
console.log(obj)*/

// 两个 var
/*
for(var i=1;i<=3;i++){
    for(var i=0;i<=3;i++){
        console.log(i);
    }// 0 1 2 3
}
*/

// 两个 let
/*for(let i=1;i<=3;i++){
    for(let i=0;i<=3;i++){
        console.log(i);
    }//12
}*/

//
/*
for(var i=1;i<=3;i++){
    for(let i=0;i<=3;i++){
        console.log(i);
    }//12
}
*/

for(let i=1;i<=3;i++){
    for(var i=0;i<=3;i++){
        console.log(i);
    }//12
}