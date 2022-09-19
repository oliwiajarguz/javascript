let n1 = 9;
let n2 = 17;

function math(ran, ran2) {
    let adds = ran + ran2;
    let subs = ran - ran2;
    let muls = ran * ran2;

    if (adds > 0) {
        console.log("Wynik dodawania wynosi " + adds);
    } else if (adds < 0) {
        console.log("Wynik jest nieprawidłowy");
    }



    if (subs >= 0) {
        console.log("Wynik odejmowania wynosi" + subs);
    }
    else if (subs <= 0) {
        console.log("Wynik jest nieprawidłowy");
    }



    if (muls > 0) {
        console.log("Wynik mnozenia wynosi" + " " + muls);
    } else if (muls < 0) {
        console.log("Wynik jest nieprawidłowy");
    }



}
(math(n1, n2));