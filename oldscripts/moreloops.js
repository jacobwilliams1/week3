/* for (var x = 100; x >= 0; x--) {
       
if (x % 25 == 0 && x != 0) {
        console.log(x + " is divisible by 25");
} else{
        console.log(x);
}
}
*/
//count to 100 and print
for (var f = 1; f<=100; f++) {
      
   //if f is divisbible by 3 and 5 write fizz buzz only
    if (f % 5 == 0 && f % 3 == 0) {
        console.log("fizz buzz");
    }
        //if f is divisible by 3 write fizz only
   else if (f % 3 == 0) {
        console.log("fizz");
    }
    //if f is divisible by 5 write buzz only
    else if (f % 5 == 0) {
    console.log("buzz");
    }
    else {
      console.log(f);
  }   
}