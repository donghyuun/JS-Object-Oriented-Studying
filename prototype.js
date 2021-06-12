//객체를 만드는 함수(생성자함수(construtor function))
function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  //변수들은 생성자함수 내에 넣는것이 일반적
}

Person.prototype.sum = function () {
  return 'prototype : '+(this.first + this.second);
}
//생성자함수의 prototype(원형)을 정의한다. 한번만 정의되기 때문에, 그것을 참조함으로서 성능과 메모리를 절약할 수 있다.
//함수들은 특별한 이유가 없으면 생성자함수의 prototype.함수명 으로 정의한다. 일반적으로 construtor를 이용해서 객체를 생성하는 패턴.

var kim = new Person('kim', 10, 20);
kim.sum = function(){
  return 'this : '+(this.first+this.second);
}
var lee = new Person('lee', 10, 10);
//construtor function(생성자함수)는 객체를 만들고, 그 객체의 초기상태를 정의한다


console.log("kim.sum()", kim.sum());
//먼저 자신이 가지고 있는 속성이 있는지 확인하고 만약 없다면 prototype의 속성을 확인한다
console.log("lee.sum()", lee.sum());
//함수속성을 자신이 가지고 있지 않으므로 prototype의 함수가 호출됨=> 성능, 메모리 절약



