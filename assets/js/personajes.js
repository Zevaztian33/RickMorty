export default class Personajes{
    constructor(id){
        let _id = id;
        this.getId = () => _id;
        this.setId = (nuevoId) => _id = nuevoId;
    }

    get id(){
        return this.getId();
    }
}