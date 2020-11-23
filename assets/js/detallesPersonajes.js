import Personajes from "./personajes.js";

export default class DetallesPersonajes extends Personajes{
    constructor(id, name, species, gender, origin){
        super(id);
        let _name = name;
        this.getName = () => _name
        this.setName = (nuevoName) => _name = nuevoName

        let _species = species;
        this.getSpecies = () => _species
        this.setSpecies = (nuevaSpecies) => _species = nuevaSpecies
        
        let _gender = gender;
        this.getGender = () => _gender
        this.setGender = (nuevoGender) => _gender = nuevoGender
        
        let _origin = origin;
        this.getOrigin = () => _origin
        this.setOrigin = (nuevoOrigin) => _origin = nuevoOrigin
    }

    get name(){
        return this.getName();
    }

    get species(){
        return this.getSpecies();
    }

    get gender(){
        return this.getGender();
    }

    get origin(){
        return this.getOrigin();
    }

    //infoModal();

    infoGeneral(){
        return `
            <ul>
                <li>Id: ${this.id}</li>
                <li>${this.species}</li>
            </ul>
        `
    }
}