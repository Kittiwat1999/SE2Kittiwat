//variable
var name = "text";
var number = 8.9;
var array = [1,2,3,4];
var a = new Array(5);

a[0] = 49;
a[1] = "game_of_the_year";

let nameTwo= "kittiwat";
let nameThree = "kittiwat";
var object = {
    'size':10,
    'name':"dang"
}

console.log(object['name'],object['size'].toString(),number.toString());

object.name = "kittiwat";

var st = "10";
console.log((parseInt(st) + 8).toString());

st = 10;
console.log((st + 8).toString());


var checkname = (nameTwo === nameThree) ? true:false;
console.log(checkname);

var func = function(){
    console.log("call function func")
}

func();

function testVar(){
    var testname="none";
    return testname;
}
console.log(testVar());
