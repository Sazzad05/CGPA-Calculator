console.log("CGPA Calculator Made By Sazzad Alam Bhuiyan.");

let output = document.getElementById("outputCGPA");
let outputC = document.getElementById("outputCredit");
let btn = document.querySelector(".btn");

console.log(btn);

function calcunation(ce, cgpa, c, gpa) {
  return (((ce * cgpa) + (c * gpa)) / (ce * 1 + 1 * c));
}

function addCourse(ce, cgpa, c, newcgpa) {
  ce = (ce * 1 + 1 * c);
  cgpa = newcgpa.toFixed(2);
  return [ce, cgpa];
}
var creditEarned = document.querySelector(".CreditEarned");
var currnetCGPA = document.querySelector(".CurrnetCGPA");
var courseCredit = document.querySelector(".CourseCredit");
var earnedGPA = document.querySelector(".EarnedGPA");
var print;
var ans;

function liveInput() {
  console.log(creditEarned.value);
  console.log(currnetCGPA.value);
  console.log(courseCredit.value);
  console.log(earnedGPA.value);
  console.log(output);

  if (creditEarned.value <= 999 && courseCredit.value <= 99) {
    if (currnetCGPA.value >= 0 && earnedGPA.value >= 0 && currnetCGPA.value <= 4 && earnedGPA.value <= 4) {
      ans = calcunation(creditEarned.value, currnetCGPA.value, courseCredit.value, earnedGPA.value);
      print = parseFloat(ans) || 0;
      output.innerText = print.toFixed(2);
      outputC.innerText = (creditEarned.value * 1 + 1 * courseCredit.value).toFixed(1);
    } else {
      output.innerHTML = "<h4>Invalid</h4>";
    }
  } else {
    outputC.innerHTML = "<h4>Invalid</h4>";
  }
}

btn.addEventListener("click", function() {
  let updated = addCourse(creditEarned.value, currnetCGPA.value, courseCredit.value, ans);
  console.log(ans)
  creditEarned.value = updated[0];
  currnetCGPA.value = ans;
  courseCredit.value = '';
  earnedGPA.value = '';

  console.log("updated: " + creditEarned.value)
  console.log("updated: " + currnetCGPA.value)

})
