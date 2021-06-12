/*
var superObj = { superVal: 'super' }
var subObj = { subVal: 'sub' }
subObj.__proto__ = superObj;//정석은아님
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);//먼저 subObj에서 superVal을 찾고 없다면 상속받는 superObj에서 superVal을 찾는다.
subObj.superVal = 'sub';
//subObj라고 하는 객체의 값을 바꿨을 뿐, __proto__가 가리키고 있는 객체를 바꾼것이 아니다.(객체를 바꾸는거지 객체의 proto를 바꾼것이 아니다.)
console.log('superObj.superVal =>',superObj.superVal);//proto는 안바뀜
console.log('subObj.superVal =>', subObj.superVal);//객체의 값을 바꿈
*/
/*-------더 좋은, 표준화된 방식으로 ---------*/
var superObj = { superVal: 'super' }
//var subObj = { subVal: 'sub' }
//subObj.__proto__ = superObj;
var subObj = Object.create(superObj);//superObj를 부모로 하는 새로운 객체, 객체와 객체간의 상속관계, protolink를 지정해줌
subObj.subVal = 'sub';
debugger;//객체들의 상태를 탐색할 수 있다.(개발자도구에서 Sources -> watch 등...)
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);
console.log('subObj.superVal =>', subObj.superVal);

//consturctor function을 이용해서 상속하는건 아직안했고 수작업으로 만든 객체를 상속하는 방법을 다루고 있음
var kim = {
  name: 'kim',
  first: 10, second: 20,
  sum: function () { return this.first + this.second }
}
//var lee = {
//  name: 'lee',
// first: 10, second: 10,
//  avg: function () {
//    return (this.first + this.second) / 2;
//  }
//}
//lee.__proto__ = kim;
var lee = Object.create(kim);//더 좋은 표준화된 방법
lee.name='lee';
lee.first=10;
lee.second=10;
lee.avg = function(){
  return (this.first+this.second)/2;
}

console.log("lee.sum() => ", lee.sum());
console.log("lee.avg() => ", lee.avg());
