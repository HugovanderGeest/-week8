function Opdracht(vak, beschrijving) {
    let opdrObj = this;

    opdrObj.vak = vak;
    opdrObj.beschrijving = beschrijving;
}



function Cijfer(opdracht, cijfer) {

}

var opdrachten1 = "opracht1";
var opdrachten2 = "opracht2";
var opdrachten3 = "opracht3";


var cijfers1 = 5;
var cijfers2 = 6;
var cijfers3 = 8;

var total = opdrachten1 + opdrachten2 + opdrachten3;

let opdrachten = [];
let cijfers = [];

function Periode (opdrachten, cijfers) {
    let periodeObj = this;

    periodeObj.opdrachten = opdrachten;
    periodeObj.cijfers = cijfers;
}



console.log('#opdrachten1'+'opdrachten2'+opdrachten3 );
$('opdrachten1'+'opdrachten2'+opdrachten3).addClass('active');



var text = '{ "opdrachten" : [' +
'{ "opdrachten":"opdrachten1" , "cijfers":"cijfers1" },' +
'{ "opdrachten":"opdrachten2" , "cijfers":"cijfers2" },' +
'{ "opdrachten":"opdrachten2" , "cijfers":"cijfers2" } ]}'; 



localStorage.setItem('opdrachten1', 'opdrachten2' , 'opdrachten3');
localStorage.setItem('cijfers1', 'cijfers2' , 'cijfers3');