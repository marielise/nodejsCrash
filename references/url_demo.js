const url = require("url");

const myUrl = new URL("http://mywebsite:8000/mypage.html?id=40&status=active");

console.log(myUrl.href); //=>http://mywebsite:8000/mypage.html?id=40&status=active
console.log(myUrl.toString()); //=> http://mywebsite:8000/mypage.html?id=40&status=active

console.log(myUrl.host); //=> mywebsite:8000
console.log(myUrl.hostname); //=> mywebsite

console.log(myUrl.port); //=> 8000

//Serialized query
console.log(myUrl.search); //=> ?id=40&status=active

console.log(myUrl.searchParams); //object => URLSearchParams { 'id' => '40', 'status' => 'active' }
myUrl.searchParams.append("abc", "234");

console.log(myUrl.searchParams); //object => URLSearchParams { 'id' => '40', 'status' => 'active', 'abc' => '234' }

myUrl.searchParams.forEach((value, key) => {
  console.log(` ${key} : ${value} `);
});
