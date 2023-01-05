
class malade {
    constructor(nom, maladie, argent, poche, etatDeSante, traitement){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatDeSante = etatDeSante;
        this.traitement = traitement;
    }

    goTo(malade){
        this.pharmacie.push(malade)
    }

    takeCare(){
        
    }

    paye(){

    }
}

let marcus = new malade("Marcus","Mal indenté", 100, [], "malade",[]);
let optimus = new malade("Optimus","Unsave", 200, [], "malade",[]);
let sangoku = new malade("Sangoku","404", 80, [], "malade",[]);
let darthvader = new malade("DarthVader","azmatique", 100, [], "malade",[]);
let semicolon = new malade("Semicolon","Syntaxerror", 60, [], "malade",[]);






class docteur {
    constructor(nom, argent, cabinet, diagnostique,){
        this.nom = nom;
        this.argent = argent;
        this.cabinet = cabinet;
        this.diagnostique = diagnostique;
    }

    patientIn(malade){
            this.cabinet.push(malade)
            this.argent = 0+50
    }
    
    diagnostique(maladie, traitement){
        switch (malade.maladie) {
            case "mal indenté":
                malade.poche.push(prescri)
                break;
        
            default:
                break;
        }

    }

    patientOut(){
        malade.goTo
    }
}

let docdoc = new docteur("Toubib", 0,["chat"], "");

let prescri1 = "index1"






class pharmacie  {
    constructor(lieux, traitement){
        this.lieux = lieux;
        this.traitement = traitement;
    }

        
}

let pharma = new  pharmacie([], [`ctrl+maj+f`, `saveOnFocusChange`, `CheckLinkRelation`, `Ventoline`, `f12+doc` ])

let waiting = [];

// class diagnostique {
//     constructor(maladie, traitement ){
//         this.maladie = maladie ;
//         this.traitement = traitement ;
//     }
// }

// let malIndente = new diagnostique("mal indenté", `ctrl+maj+f`)
// let unsave = new diagnostique("unsave", `saveOnFocusChance`)
// let error = new diagnostique("404", `checklinkrelation`)
// let azmatique = new diagnostique("azmatique", `ventoline`)
// let syntaxerror = new diagnostique("mal indenté",`f12+doc`)

