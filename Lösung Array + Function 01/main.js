//Aufgabe

/*Erstelle einen Array mit 5 Studenten
Jeder Student besteht aus 'Name','Martikelnummer'
und 'NC'*/

/*Erstelle eine Funktion, die mit Hilfe einer Schleife,
jeden Studenten in die Konsole ausgibt und den NC 
aller Studenten summiert um einen Durchschnitt zu 
erhalten(Durchschnitt = Totale Summe/Anzahl)*/

//Hinweis: Funktion aufrufen!
var studentenVerzeichnis = []

function studentenAnlegen(){
    var VollerName = document.getElementById("name").value;
    var MartikelNummer = document.getElementById("matrikelnummer").value;
    var NotenSchnitt = parseFloat(document.getElementById("notenschnitt").value);

    var student = {
        Name: VollerName,
        Martikelnummer: MartikelNummer,
        NC: NotenSchnitt
    };
studentenVerzeichnis.push(student)

}


function notenDurchschnitt(){
    var notenDurchschnittListe =[];
for (let index = 0; index < studentenVerzeichnis.length; index++) {
    console.log(studentenVerzeichnis[index]);
    notenDurchschnittListe.push(studentenVerzeichnis[index].NC);

    
};
var summe = 0;
for (let j = 0; j < notenDurchschnittListe.length; j++) {
    summe += notenDurchschnittListe[j];
    
    
};
var notenSchnitt = summe / notenDurchschnittListe.length;

console.log("Notendurchschnitt gesamt: "+ notenSchnitt)
}
