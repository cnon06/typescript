var a = 5;
var b = 'a';
var c = true;
var d;
var e = [1, 2, 3];
var f = [1, 2, 3];
var g = [1, 'a', true];
var h = ['a', 5, false]; //tuple
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 1] = "havale";
    Payment[Payment["kap\u0131daOdeme"] = 2] = "kap\u0131daOdeme";
    Payment[Payment["eft"] = 3] = "eft";
})(Payment || (Payment = {}));
;
var kredi = Payment.kredi;
var havale = Payment.havale;
var kapıdaOdeme = Payment.kapıdaOdeme;
var eft = Payment.eft;
