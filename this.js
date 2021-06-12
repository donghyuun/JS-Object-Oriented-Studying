var kim = {
  name: 'kim',
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;//내부적으로 가지고 있는 상태를 함수(여기선 메서드)에서 참조할 수 있다.
  }
}//여기서 this는 자신이 속한 메서드가 속한 객체를 가리킨다.
//console.log("kim.sum(kim.first,kim.second)", kim.sum(kim.first, kim.second));
console.log("kim.sum()", kim.sum());