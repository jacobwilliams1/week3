var person = {
firstName : "Jacob",
lastName : "Williams",
email : "jacob.williams@interapthq.com",
phone : "606.792.6417",
birthday : "May 17, 1996",
fullName : function () {
    return this.firstName + " " + this.lastName;
}
};
function printDetails(p) {
    console.log(p.email);
    console.log(p.lastName);
    console.log(p.firstName);
    console.log(p.phone);
    console.log(p.birthday);
    console.log(p.fullName());
}
printDetails(person);