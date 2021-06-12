var memberArray = ['egoing', 'graphittie', 'leezche'];
//console.group("array loop");
var i = 0;
while(i < memberArray.length){
  console.log(memberArray[i]);
  i = i + 1;
}
//console.groupEnd("array loop");
var memberObject = {
  manager:'egoing',
  developer:'graphittie',
  designer:'leezche'
}
//console.group('object loop');
for(var name in memberObject){
  console.log(name, memberObject[name]);
}
//객체의 반복문에서는 for문이 아니라 for-in문을 사용한다.
//console.groupEnd('object loop');

