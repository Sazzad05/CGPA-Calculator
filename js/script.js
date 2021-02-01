console.log("CGPA Calculator Made By Sazzad Alam Bhuiyan.");

let output = document.getElementById("outputCGPA");
let outputC = document.getElementById("outputCredit");




function calcunation(ce, cgpa, c, gpa) {
  return (((ce * cgpa) + (c * gpa)) / (ce * 1 + 1 * c));
}


function removeCourse(ce, cgpa, c, gpa) {
  return (((ce * cgpa) - (c * gpa)) / (ce * 1 - 1 * c));
}

var creditEarned = document.querySelector(".CreditEarned");
var currnetCGPA = document.querySelector(".CurrnetCGPA");
var courseCredit = document.querySelector(".CourseCredit");
var earnedGPA = document.querySelector(".EarnedGPA");
var retakeCredit = document.querySelector(".retakecredit");
var previousGPA = document.querySelector(".oldgpa");
var updatedGPA = document.querySelector(".newgpa");
var ans;
var credit;

function liveInput() {
  console.log(creditEarned.value);
  console.log(currnetCGPA.value);
  console.log(courseCredit.value);
  console.log(earnedGPA.value);
  console.log(output);

  if (creditEarned.value <= 999 && courseCredit.value <= 99) {
    if (currnetCGPA.value >= 0 && earnedGPA.value >= 0 && currnetCGPA.value <= 4 && earnedGPA.value <= 4) {
      ans = calcunation(creditEarned.value, currnetCGPA.value, courseCredit.value, earnedGPA.value);
      output.innerText = ans.toFixed(2);
      credit = (creditEarned.value * 1 + 1 * courseCredit.value);
      outputC.innerText = credit.toFixed(1);
    } else {
      output.innerHTML = "<h4>Invalid</h4>";
    }
  } else {
    outputC.innerHTML = "<h4>Invalid</h4>";
  }
}


function updateInputBox() {
  creditEarned.value = (creditEarned.value * 1 + 1 * courseCredit.value);
  currnetCGPA.value = ans;
  courseCredit.value = '';
  earnedGPA.value = '';
}

function addRetake() {
  creditEarned.value = (creditEarned.value * 1 + 1 * courseCredit.value);
  currnetCGPA.value = ans;
  courseCredit.value = '';
  earnedGPA.value = '';

  if (retakeCredit.value * 1 <= creditEarned.value * 1 &&
    previousGPA.value * 1 <= currnetCGPA.value * 1 &&
    retakeCredit.value * 1 <= 99 &&
    retakeCredit.value * 1 >= 0 &&
    previousGPA.value * 1 <= 4 &&
    previousGPA.value * 1 >= 0 &&
    updatedGPA.value * 1 >= 0 &&
    updatedGPA.value * 1 <= 4) {
    console.log(previousGPA.value);
    console.log(updatedGPA.value);
    let temp1 = removeCourse(credit, ans, retakeCredit.value, previousGPA.value);
    let temp2 = (credit * 1 - 1 * retakeCredit.value);
    console.log(currnetCGPA.value);
    // creditEarned.value = credit;
    ans = calcunation(temp2, temp1, retakeCredit.value, updatedGPA.value);
    currnetCGPA.value = ans;
    creditEarned.value = credit;
    output.innerText = ans.toFixed(2);
    outputC.innerText = credit.toFixed(1);
    courseCredit.value = '';
    earnedGPA.value = '';
    retakeCredit.value = '';
    previousGPA.value = '';
    updatedGPA.value = '';
  } else {
    alert("Input error. Make sure to input correct value");
    courseCredit.value = '';
    earnedGPA.value = '';
    retakeCredit.value = '';
    previousGPA.value = '';
    updatedGPA.value = '';
  }
}
