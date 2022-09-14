let txt1= "Uwielbiam JavaScript";
let txt2= "Jestem świetnym programistą";


function longerText(one, two) {
    let result = Math.max(one.length, two.length);
    return result;



}
console.log(longerText(txt1, txt2));
