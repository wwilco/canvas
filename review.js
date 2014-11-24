//Given 2 integers, return true if one is negative and one is positive.
//
// posNeg(1, -1)
// // true
// posNeg(-1, 1)
// // true
// posNeg(-4, -5)
// // false

function posNeg(x, y) {
  if ((x < 0) && (y < 0)) {
    console.log(false);
  }
  else if ((x > 0) && (y > 0)) {
    console.log(false);
  }
  else {
    console.log(true);
  }
}
posNeg(-2,-1);


// var num = process.argv[2];
// num = parseInt(num);

// var int = 3
//
// function double(num) {
//   var answer = num * 2
//   //output of function
//   return answer
// };
//
// var x = double(int);
// console.log(x); // returns 6... 3*2

// console.log(double(4)) returns 8

//
//
// function posNeg(x, y) {
//   if ((x === -x) && (y === -y)){
//     console.log("false");
//   }
//   else if ((x === x) && (y === y)){
//     console.log("false");
//   }
//   else {
//     console.log("true");
//   }
// }
//
// posNeg(2,-1);


function count_xx(y) {
  for (var i = 0; i < y.length; i++) {
    if (i == "xx"){
      console.log(1);
    }
    else if (i == "xxx"){
      console.log(2);
    }
    else if (i == "xxxx"){
      console.log(3);
    }
  }
}
count_xx("abcxx");
