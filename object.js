var memberArray = ['egoing', 'graphittie', 'leezhce'];
console.log("memberArray[2]", memberArray[2]);//접근할 때 중괄호사용

var memberObject = {
  manager:'egoing',
  developer:'graphittie',
  designer:'leezhce'
}
//객체는 이름이 있는 정보들을 정리정돈할때 쓰는 도구
//객체에 있는 값을 읽을때 .이나 []사용하여 읽음
memberObject.designer = 'leezche';//update
console.log("memberObject.designer",memberObject.designer);//접근할 때 .사용
console.log("memberObject['designer']",memberObject['designer']);//접근할 때 대괄호사용
delete memberObject.manager//delete
console.log("after delete memberObject.manager", memberObject.manager);

//객체와 반복문
