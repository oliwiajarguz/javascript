
let short ="Uwielbiam JavaScript";
let long = "Jestem świetnym programistą";


function longerText(txt1, txt2) {
    if (txt1.length < txt2.length) {
        let result = txt2;
        return result;
    }
    else {
        let other = txt1;
        return other;
    }

}
console.log(longerText(short, long));


