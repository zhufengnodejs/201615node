/*function Point(x,y){
    this.x = x;
    this.y = y;
}
Point.prototype.toString = function(){
    console.log(`点的坐是(${this.x},${this.y})`);
}
Point.color = 'red';
let point = new Point(100,100);
point.toString()*/


class Point{
    //构造函数用来初始化私有属性 当实例化一个类的时候会立刻调用的
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    static getColor(){
        console.log('red');
    }
    toString(){
        return `(${this.x},${this.y})`;// (x,y)
    }
}
/*Point.weight = 'bold';
let point = new Point(50,50);
point.toString();
console.log(point.__proto__ === Point.prototype);
Point.getColor();
console.log(Point.weight);*/


/*function Point(x,y){
    this.x=x;//实例上的私有属性
    this.y=y;
}
Point.prototype.toString=function(){
    console.log(`点的坐标是(${this.x},${this.y})`);
}
Point.getColor=function(){
    console.log('red');
}*/
// 子类继承了父类
class ColorPoint extends Point{
  //当子类继承父类的时候，必须先调用父类的构造函数
  constructor(x,y,color){
      super(x,y);//super代表父类的构造函数
      this.color = color;
  }
  getColor(){
      console.log(this.color);
  }
  /*//在原型上的方法里super表示父类
  toString(){
      //console.log(`${this.color}(${this.x},${this.y})`);
      return `${this.color}${super.toString()}`
  }*/
}
let colorPoint = new ColorPoint(100,100,'red');
console.log(colorPoint.toString());



function ColorPoint(x,y,color){
    Point.call(this,x,y);
    this.color = color;
}

ColorPoint.prototype = Object.create(Point.prototype);
ColorPoint.prototype.getColor = function(){

}


