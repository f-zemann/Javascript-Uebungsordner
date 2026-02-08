//Aufgabe

/*Erstelle einen Array mit 5 Studenten
Jeder Student besteht aus 'Name','Martikelnummer'
und 'NC'*/

/*Erstelle eine Funktion, die mit Hilfe einer Schleife,
jeden Studenten in die Konsole ausgibt und den NC 
aller Studenten summiert um einen Durchschnitt zu 
erhalten(Durchschnitt = Totale Summe/Anzahl)*/

//Hinweis: Funktion aufrufen!


var studentenVerzeichnis = [
    {Name: 'Lisa Müller', Martikelnummer: '1234', NC: 1.0},
    {Name: 'Dan Hopkins', Martikelnummer: '2345', NC: 3.8},
    {Name: 'Hunsun Lee', Martikelnummer: '3456', NC: 1.4},
    {Name: 'Ayse Koc', Martikelnummer: '4567', NC: 2.9},
    {Name: 'Maria Lopez', Martikelnummer: '5678', NC: 3.1}
]

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
return notenSchnitt

}
console.log("Notendurchschnitt gesamt: "+notenDurchschnitt())