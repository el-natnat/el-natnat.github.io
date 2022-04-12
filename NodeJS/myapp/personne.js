export { Personne };
class Personne {

    const
    contructor(nom,prenom,adresse){
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
    }

    get nom(){
        return this.nom;
    }

    get prenom(){
        return this.prenom;
    }

    get adresse(){
        return this.adresse;
    }
}