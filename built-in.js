console.log(Math.PI);
console.log("Math.random()", Math.random());//객체에 소속된 함수는 메소드라 한다.
console.log("Math.fllor(3.9)", Math.floor(3.9));
//Math객체의 PI(변수),random(함수),floor(함수)등을 이용할 수 있다

var MyMath = {
  PI:Math.PI,
  random: function(){
    return Math.random();
  },
  floor:function(val){
    return Math.floor(val);
  }
}
//객체: 서로 연관된(같은 취지의) 변수,함수들을 객체로 그루핑하여 이름을 붙인것
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(4.2)", MyMath.floor(4.2));

MyMath_PI = Math.PI;
function MyMath_random(){
  return Math.random();
}
function MyMath_floor(val){
  return Math.floor(val);
}