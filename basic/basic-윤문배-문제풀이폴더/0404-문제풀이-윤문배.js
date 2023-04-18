const users = [
    {
      id: 1,
      name: "문다은",
      age: 20,
      height: 165,
    },
    {
      id: 2,
      name: "윤진섭",
      age: 24,
      height: 177,
    },
    {
      id: 3,
      name: "윤국현",
      age: 22,
      height: 175,
    },
    {
      id: 4,
      name: "배상아",
      age: 23,
      height: 168,
    },
  ];
  



  console.log(" ------------ 1번 문제(0404) - 문다은")

  // 1번 문제
  // {id: 5, name: "이지형", age: 19, height: 200} 데이터를 추가하기
  /* 
  [
      { id: 1, name: '문다은', age: 20, height: 165 },
      { id: 2, name: '윤진섭', age: 24, height: 177 },
      { id: 3, name: '윤국현', age: 22, height: 175 },
      { id: 4, name: '배상아', age: 23, height: 168 },
      { id: 5, name: '이지형', age: 19, height: 200 }
  ]
  */


// 1번 윤진섭 풀이
// users.push(
//     {
//         id: 5,
//         name: "이지형",
//         age: 19,
//         height: 200
//     }
// )
// console.log(users)



// 1번 다은님 풀이
// const newUser = {
//   ...users,
//   4: { id: 5, name: "이지형", age: 19, height: 200 },
// };
// console.log(newUser);


// 1번 윤진섭 풀이
// users.push({id: 5, name: "이지형", age: 19, height: 200})






console.log(" ------------ 2번 문제(0404) - 배상아")

// 2번 문제
// 객체의 데이터를 통해 해당 값만 출력하기
  // [ { id: 4, name: '배상아', age: 23, height: 168 } ]


// 2번 문다은님 풀이
// const result_user = users.filter((item) => item.name == "배상아");
// console.log(result_user);


// 2번 윤진섭 풀이
// let result = users["3"]; // 인덱스로 풀기
// let result = users.3; // 결과는?
// let result = users.map((user) => user)[3] // map 으로 풀기
// let result = users.filter((user) => user.name === "배상아").map((user) => user) // filter, map 으로 풀기








console.log(" ------------ 3번 문제(0404) - 윤진섭")

  // 3번 문제
  // 객체의 해당 데이터 값만 수정하기
  // 데이터중 name이 '윤진섭'에 해당하는 height만 190으로 데이터를 변경하고
  // 나머지 데이터들까지 모두 출력한다.
  
  /*
  [
    { id: 1, name: '문다은', age: 20, height: 165 },
    { id: 2, name: '윤진섭', age: 24, height: 190 },
    { id: 3, name: '윤국현', age: 22, height: 175 },
    { id: 4, name: '배상아', age: 23, height: 168 }
  ]
  */

// 3번문제 윤진섭 풀이
// let source1 = users.filter((user) => user.name === "윤진섭").map((user) => user.height = 190);
// console.log(users)

// 3번문제 다은님 풀이
// const result_user = users.map((item) => {
//   if (item.name == "윤진섭") {
//     item.height = 190;
//   }
//   return item;
// });

// console.log(result_user);


 
 



console.log(" ------------ 4번 문제(0404) - 문다은")
// 4번 문제
// height가 170 이하인 user만 출력하시오
 
 /*
 [
   { id: 1, name: '문다은', age: 20, height: 165 },
   { id: 4, name: '배상아', age: 23, height: 168 }
 ]
 */
 

// 4번 다은님 풀이
//  const result_user = users.filter((item) => item.height <= 170);
//  console.log(result_user);


// 4번 윤진섭 풀이
// let result = users.filter(user => user.height <= 170).map(user => user);
// console.log(result);








console.log(" ------------ 5번 문제(0404) - 배상아")

   // 5번 문제 (심화) (배상아)
  // name의 첫 글자가 '윤'으로 시작하는 이름만 출력하시오
  
  /*
  [
    { id: 2, name: '윤진섭', age: 24, height: 177 },
    { id: 3, name: '윤국현', age: 22, height: 175 }
  ]
  */


// 5번 풀이 - 윤진섭 
// let result = users.filter(user => user.name[0] === "윤");
// console.log(result);