
let short ="Uwielbiam JavaScript"
let txt1 = short.length;
let long = "Jestem świetnym programistą";
let txt2 = long.length;

function longerText(txt1, txt2) {
    if (txt1 > txt2) {
        let result = txt1;
        return short;
    }
    else if (txt1 < txt2) {
        let result = txt2;
        return long
    }

}



console.log(longerText(txt1, txt2));