/*
let ajax = function (options) {
    console.log(url);
    console.log(type);
    console.log(data);
    console.log(dataType);
};*/

let options = {
    type:'post'
};

let ajax = function ({url=new Error('url不能为空'),type='GET',data={},dataType='json'}) {
    let data = {};
    console.log(url,type,data,dataType);
};
ajax(options);


function divide(){
    try{
       JSON.parse('{}');
    }catch(e){
        console.log(e);
    }
}
divide();