let a : number = 5;
let b : string = 'a';
let c : boolean = true;
let d : any;
let e : number [] = [1,2,3];
let f : Array<number> =[1,2,3];
let g : any [] = [1,'a',true];
let h : [string,number,boolean] = ['a',5,false]; //tuple

enum Payment {kredi=0, havale=1, kapıdaOdeme= 2, eft = 3};

let kredi = Payment.kredi;
let havale = Payment.havale;
let kapıdaOdeme = Payment.kapıdaOdeme;
let eft = Payment.eft;


