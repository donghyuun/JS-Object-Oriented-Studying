/*
var kim = {
  name: 'kim',
  first: 10,
  second: 20,
  third:30,
  sum: function () {
    return this.first + this.second + this.third;//내부적으로 가지고 있는 상태를 함수(여기선 메서드)에서 참조할 수 있다.
  }
}//this는 자신이 속한 메서드가 속한 객체를 가리킨다.
*/

//객체를 찍어내는 공장을 만들어보자
var d1 = new Date('2019-4-10');//객체를 만들어서 d1에게 return해줌(공장을 통해 만들어짐)
console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth());//2019-4-10이라는 내부상태를 가지고 있는 객체에게 월을 물어본다

console.log('Date', Date);//Date는 함수이며 내용은 native code(내장된 코드)이다.

//객체를 만드는 함수(생성자함수(construtor function))
function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function () {
    return this.first + this.second + this.third;
  }
}

console.log('Person()', Person());//함수를 호출, return값이 없으므로 undefind로 나온다
console.log('new Person()', new Person());//Person이라는 객체가 만들어졌다. 함수의 이름앞에 new가 붙으면 객체를 생성하는 생성자 함수(construtor)가 된다.

var kim = new Person('kim', 10, 20, 30);
var lee = new Person('lee', 10, 10, 10);
//생성자함수(construtor function)을 이용해 객체 생성

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

