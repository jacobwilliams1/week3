function myButton_Click() {
    alert("Clicked!");
}
$(function() {
//wire up the click event handler.
$("#myButton").on("click", myButton_Click);
});
