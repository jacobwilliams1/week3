for (var i = 1; i <= 20; i++) {

if (i % 2 == 0) {
    console.log(i + " is even");
}
else{
    console.log(i + " is odd");
}
}

 for (var x = 0; x <= 10; x++) { 
     console.log(x + " * 9 = " + (x * 9));    
 }
 for (var grade = 60; grade <= 100; grade++) { 
     //var grade = 66;
     if (grade >= 0 && grade <= 59) {
         console.log("For " + grade + " you FAIL!!!");
     }
     if (grade >= 60 && grade <= 69) {
         console.log("For " + grade + ", you get an D")
     }
     if (grade >= 70 && grade <= 79) {
         console.log("For " + grade + " you get an C")
     }
     if (grade >= 80 && grade <= 89) {
         console.log("For " + grade + " you get an B")
     }
     if (grade >= 90 && grade <= 99) {
         console.log("For " + grade + " you get an A")
     }
     if (grade == 100) {
         console.log("For " + grade + " Perfect Score Awesome! ")
     }
 }



 function assignGrade(score) {
     if (score >= 90){
         return "A";
     }
     if (score >= 80) {
         return "B";
     }
     if (score >= 70) {
         return "C";
     }
     if (score >= 60) {
         return "D";
     }
 }
 for (var c = 60; c <= 100; c++) {
     console.log("For " + c + " , you got an " + assignGrade(c));
     
 }