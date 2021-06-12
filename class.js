//constructor function(생성자함수)를 대체하는 더 좋은 방법
class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }//constructor(): 그 객체의 초기상태를 정의하기 위한, 객체가 만들어지기 직전에 실행(호출)되도록 약속된 함수
  sum() {
    return 'prototype : ' + (this.first + this.second);
  }//constructor아닌곳의 속성은 prototype이다. 같은 class에 속해 있는 모든 객체가 공유한다.
}
//먼저 생성된 class의 요소만 바꾸어도 상속받은 클래스까지 모두(동시다발적으로) 바꿀 수 있어 효율적이다. 

class PersonPlus extends Person {
  //(constructor, prototype등..)을 상속받음으로써 코드가 간결해진다.
  //부모클래스가 굳이 필요로 하지 않는 코드들을 추가함으로써 상황에 따라 자식클래스를 필요할때 알맞게 사용할 수 있다.
  avg() {
    return (this.first + this.second) / 2;
  }
}

var kim = new PersonPlus('kim', 10, 20);//Person이라는 이름의 객체가 생성됨
console.log("kim.sum()", kim.sum());
//먼저 자신이 sum()을 가지고 있는지 확인하고 없으면 PersonPlus클래스안에(prototype이 정의되는 위치에) sum()함수가 정의되어있는지 확인한다. 없으면 상속받는 상위클래스로 가서 찾음.
//sum()은 Person클래스에서 상속받은것.
console.log("kim.avg()", kim.avg());
//PersonPlus클래스에 있는 함수

