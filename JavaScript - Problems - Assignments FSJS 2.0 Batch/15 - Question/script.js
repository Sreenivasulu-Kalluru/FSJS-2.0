/* 15. Write a program which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F
*/

function gradeEvaluation(marks) {
  if (marks >= 80 && marks <= 100) {
    return 'Your grade is A';
  } else if (marks >= 70 && marks <= 79) {
    return 'Your grade is B';
  } else if (marks >= 60 && marks <= 69) {
    return 'Your grade is C.';
  } else if (marks >= 50 && marks <= 59) {
    return 'Your grade is D';
  } else if (marks >= 0 && marks <= 49) {
    return 'Your grade is F or You have failed in the exam';
  } else {
    return 'Either you have entered incorrect marks i.e, negative marks or marks greater than 100';
  }
}
const marksObtained = gradeEvaluation(44);
console.log(marksObtained);
