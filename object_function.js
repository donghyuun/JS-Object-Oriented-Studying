var kim = { name: 'kim', first: 10, second: 20 }
var lee = { name: 'lee', first: 10, second: 10 }
function sum(prefix) {
  return prefix + (this.first + this.second);
}
//-----------------call-----------------
//sum();
console.log("sum.call(kim)", sum.call(kim, '=> '));
console.log("lee.call(kim)", sum.call(lee, ': '));
/*
sum.call(kim); : sum()의 this가 kim 이 되고,sum이라고 하는 객체를 실행한다.
모든 함수는 call이라는 메서드를 가지고 있음. apply와 비슷
call메서드의 첫번째 인자는 그 함수의 내부의 this를 뭐로 할지가 들어오고, 두번째부터는 그 함수의 parameter에 들어갈 인자값들이 온다.
*/
//-----------------bind-----------------
var kimSum = sum.bind(kim, '-> ');//이 함수 내부의 this를 영구적으로 kim으로 하는 새로운 함수가 만들어진다. sum에는 영향x
console.log('kimSum()', kimSum());