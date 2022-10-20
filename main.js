const token = "abc" + Math.floor(Math.random() * 100000000000);

const token2 = {
  name: token,
};

// console.log(JSON.stringify(token2));
// move token to localstorage

// localStorage.setItem("token2 name ", JSON.stringify(token2));

let data = JSON.parse(localStorage.clear("token2 name "));
console.log("abc");
console.log(data);
console.log(244);
console.log("test commit");
