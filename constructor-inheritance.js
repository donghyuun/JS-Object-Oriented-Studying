//--constructor-function-inheritance1,2 참고--
//constructor function을 이용한 inheritance
function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}
Person.prototype.sum = function () {
  return this.first + this.second;
}

function PersonPlus(name, first, second, third) {
  Person.call(this, name, first, second);
  //여기서 사용되는 this는 PersonPlus생성자가 new를 통해서 만드는 객체이다. Person()내부의 this가 Person생성자를 통해 만들어지는 객체를 가리키는 것처럼.
  this.third = third;
}

//PersonPlus.prototype.__proto__ = Person.prototype; 재생성(replace)하지않고 __proto__만 바꿈. 아니면 아래처럼

PersonPlus.prototype = Object.create(Person.prototype);/*Person.prototype라는 객체를  __proto__로 하는 새로운 객체로 재생성(replace)한다. 기존의 PersonPlus.prototype은 원래 PersonPlus를 가리키고 있었을 것이다. 하지만 새로 교체됨으로서 더 이상 PersonPlus를 가리키지 않는다. 이것까지만 입력한상태에서 PersonPlus.prototype.constructor는 Person이다.
그래서 다시 constructor프로퍼티가 PersonPlus를 가리키도록 해줘야한다.*/ 

PersonPlus.prototype.avg = function () {
  return (this.first + this.second + this.third) / 3;
}
var kim = new PersonPlus('kim', 10, 20, 30);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
console.log("kim", kim);
console.log("kim.constructor", kim.constructor);