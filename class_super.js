class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    return this.first + this.second;
  }
}
//super을 이용하여 부모클래스를 불러서 부모클래스에게 일을 시키고, 부모클래스가 하지 못하는 일을 나만한다.
class PersonPlus extends Person {
  constructor(name, first, second, third) {
    super(name, first, second);
    //부모에서 name,first,second(constructor)를 받아옴
    this.third = third;
  }
  sum() {
    return super.sum()+this.third;
    //부모의 sum()을 받아옴
  }
  avg() {
    return (this.first + this.second + this.third) / 3;
  }//추가된 메소드
}
var kim = new PersonPlus('kim', 10, 20, 30);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
/*
super()는 부모 class의 생성자(constructor)를 불러오고 자식클래스에서
기능을 추가함으로서 중복을 없앤다.
super. 부모 class자체를 가리킴으로서 super.method()를 하면 부모객체의 
메소드를 사용할 수 있게 된다

슈퍼라는 기능이 없으면, 자식클래스에서 부모클래스의 속성과 기능에 추가적인 무언가를 넣어 활용할때 
다시 부모클래스의 코드를 사용해야하는 중복이 발생할 것이다.

=>super을 사용함으로서 자식클래스가 부모의 요소들을 받아오고, 거기서 필요한 부분만
   추가로 더 코딩하여 중복을 제거할 수 있다.
*/
