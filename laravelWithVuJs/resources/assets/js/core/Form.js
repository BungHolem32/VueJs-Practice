/**
 * Created by ilanv on 28/02/2017.
 */
let Error = new class {
    constructor(){
        this.errors = {}
    }

    add(error){
        this.errors.push(error);
    }

    remove(error){
        delete error;
    }

};