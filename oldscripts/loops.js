/*// while 
var count = 1;
while(count <= 5)
{
    console.log(count);
    count++;
}
*/
// for each
var names =["bob", "steve", "kanine", "jimmie"];
//console.log(names);
//console.log(names[2]);


for (var x in names) {
    if(names[x][0] == "b"){
    console.log("this name starts with b: " + names[x][0]);
}

 if(names[x][0] == "s"){
    console.log("this name starts with s: " + names[x][0]);
}

 if(names[x][0] == "k") {
    console.log("this name starts with k: " + names[x][0]);
}

 if(names[x][0] == "j") {
    console.log("this name starts with j: " + names[x][0]);
}}

// for
for (var i = 1; i <= 100; i+=2 ) {
    console.log(i);
    
}




// do while

