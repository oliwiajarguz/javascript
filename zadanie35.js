let exp = 100;
let txt1 = "Liczba znajduje się w przedziale";
let txt2 = "Liczba nie znajduje się w przedziale";


function check(number) {
    if (number >= 100 && number <= 200) {
        let result = console.log(txt1);
        return result;
    } else {
        let ex = console.log(txt2);
        return ex;

    }


}

console.log(check(exp));
