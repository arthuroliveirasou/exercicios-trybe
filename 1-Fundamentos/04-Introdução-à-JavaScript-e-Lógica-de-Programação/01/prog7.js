let percentageGrade = 82;
let grade = {};

if (percentageGrade > 100 || percentageGrade < 0) {
 console.log('Invalid grade, the grade must be a value between 0 and 100.');
}
else if (percentageGrade >= 90) {
 grade = 'A';
 console.log('Your grade is ' + grade +'.');
}else if (percentageGrade >= 80) {
 grade = 'B';
 console.log('Your grade is ' + grade +'.');
} else if (percentageGrade >= 70) {
 grade = 'C';
 console.log('Your grade is ' + grade +'.');
} else if (percentageGrade >= 60) {
 grade = 'D';
 console.log('Your grade is ' + grade +'.');
} else if (percentageGrade >= 50) {
 grade = 'E';
 console.log('Your grade is ' + grade +'.');
} else {
 grade = 'F';
 console.log('Your grade is ' + grade +'.');
}