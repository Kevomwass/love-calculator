
function lovecalc() {
	

let hisname = prompt("What is his name?")

let hername = prompt("What is her name?")


let randnum = Math.random()*100;
let randnum1 = Math.floor(randnum);
console.log(randnum1);

if (randnum1 < 39) {
	alert("Relationship between " + hisname + " and " + hername + " cannot work");
}else if (randnum1 >= 40 && randnum1 <= 54) {
	alert("Relationship between " + hisname + " and " + hername + " is under siege");
}else if (randnum1 >= 55 && randnum1 <= 75) {
	alert("Relationship between " + hisname + " and " + hername + " is moderately working");
}else if (randnum1 >=76 && randnum1 <= 100) {
	alert("Congratulation relationship between " + hisname + " and " + hername + " is perfectly working");
}else{
	alert ("please check your entry");
}

};

