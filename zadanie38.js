let ran = 9;
let ran2 = 17;

function math(ran, ran2) {
    adds = ran + ran2;
    subs = ran - ran2;
    muls = ran * ran2;

    function add(ran, ran2) {
        if (adds > 0) {
            let adds = ran + ran2;
            console.log("Wynik dodawania wynosi " + adds);
        } else if (adds < 0) {
            console.log("Wynik jest nieprawidłowy");
        }
    }
    console.log(add(ran, ran2));


    function sub(ran, ran2) {
        if (subs >= 0) {
            let subs = ran - ran2;
            console.log("Wynik odejmowania wynosi" + subs);
        }
        else if (subs <= 0) {
            console.log("Wynik jest nieprawidłowy");
        }
    } console.log(sub(ran, ran2));

    function mul(ran, ran2) {
        if (muls > 0) {
            let muls = ran * ran2;
            console.log("Wynik mnozenia wynosi" + " "+ muls);
        } else if (muls < 0) {
            console.log("Wynik jest nieprawidłowy");
        }

    }
    console.log(mul(ran, ran2));

}
console.log(math(ran, ran2));