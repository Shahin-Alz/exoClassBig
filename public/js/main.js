



class Malade {
    constructor(nom, maladie, argent, poche, etatDeSante, traitement) {
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatDeSante = etatDeSante;
        this.traitement = traitement;
    }

    goTo(depart, arrive) {
        pharma.lieux.push(Malade)        
        docteur.cabinet.push(Malade)
    }

    takeCare() {

    }

    paye() {
        if (Malade.argent >= prixTraitement) {


            Malade.argent -= prixTraitement;
            pharma.caisse += prixTraitement;
            this.personne.push(Malade);

        } 
        else {
            console.log(`${Malade.nom} est mort.`)
        }
    }
}


let marcus = new Malade("Marcus", "Mal indenté", 100, [], "malade", []);
let optimus = new Malade("Optimus", "Unsave", 200, [], "malade", []);
let sangoku = new Malade("Sangoku", "404", 80, [], "malade", []);
let darthvader = new Malade("DarthVader", "azmatique", 100, [], "malade", []);
let semicolon = new Malade("Semicolon", "Syntaxerror", 60, [], "malade", []);

//PARTIE DOCTEUR

let docteur = {
    nom: 'docdoc',
    argent: 0,
    cabinet: ["chat"],
    diagnostique: [],
    prescription: [`Pctrl+maj+f`, `PsaveOnFocusChange`, `PCheckLinkRelation`, `PVentoline`, `Pf12+doc`],

    patientIn(depart, arrive) {
        waiting.splice(1);
        this.cabinet.push(Malade)
        this.argent = 0 + 50
        Malade.argent = -50
    },

    examen(prescri) {
        switch (Malade.maladie) {
            case "mal indenté":
                Malade.poche.push(docteur.prescription[0])
                docteur.prescription.splice(0, 1);
                break;
            case "Unsave":
                Malade.poche.push(docteur.prescription[1])
                docteur.prescription.splice(1, 1);
                break;
            case "404":
                Malade.poche.push(docteur.prescription[2])
                docteur.prescription.splice(2, 1);
                break;
            case "azmatique":
                Malade.poche.push(docteur.prescription[3])
                docteur.prescription.splice(3, 1);
                break;
            case "Syntaxerror":
                Malade.poche.push(docteur.prescription[4])
                docteur.prescription.splice(4, 1);
                break;

        }
    },

    patientOut(depart, arrive) {
        pharma.lieux.push(Malade)
        docteur.cabinet.splice(1);

    },
}


let pharma = {

    lieux: [],
    traitement: [`ctrl+maj+f`, `saveOnFocusChange`, `CheckLinkRelation`, `Ventoline`, `f12+doc`],
    caisse: 0,
}



let waiting = [marcus, optimus, sangoku, darthvader, semicolon];


marcus.goTo(waiting, docteur.cabinet)
waiting.splice(0, 1);
console.log(waiting);
console.log(docteur.cabinet);