
//Checks for any missing items and alerts the items that are missing.
// If none are missing alerts "Good to Go!"

const checkItems = () => {
    let checkBox1 = document.getElementById("checkItem1");
    let checkBox2 = document.getElementById("checkItem2");
    let checkBox3 = document.getElementById("checkItem3");
    if (!checkBox1.checked) {
        alert("Missing Cord!");
    } if (!checkBox2.checked) {
        alert("Missing a Boat!");
    } if (!checkBox3.checked) {
        alert("Missing a Dock!");
    } else if (checkBox1.checked && checkBox2.checked && checkBox3.checked) {
        alert("Good to Go!");
    };

};