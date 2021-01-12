console.log("CGPA Calculator Made By Sazzad Alam Bhuiyan.");

let output=document.getElementById("output");

function calcunation(ce,cgpa,c,gpa){
	return (((ce*cgpa)+(c*gpa))/(ce*1+1*c));
}

function lineInput(){
const creditEarned=document.querySelector(".CreditEarned");
const currnetCGPA=document.querySelector(".CurrnetCGPA");
const courseCredit=document.querySelector(".CourseCredit");
const earnedGPA=document.querySelector(".EarnedGPA");
console.log(creditEarned.value);
console.log(currnetCGPA.value);
console.log(courseCredit.value);
console.log(earnedGPA.value);
console.log(output);
let ans=calcunation(creditEarned.value,currnetCGPA.value,courseCredit.value,earnedGPA.value);
// if (isNaN("ans")) {
// 	output.innerText="0.00";
// };
let print=parseFloat(ans) || 0; 
output.innerText=print.toFixed(2);
}

