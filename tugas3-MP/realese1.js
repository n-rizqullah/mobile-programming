class Animal {
    constructor(name){
        this._name = name;
        this._legs = 4;
        this._cold_blooded = false;
    }

    get name(){
        return this._name;
    }

    get legs(){
        return this._legs;
    }

    get cold_blooded(){
        return this._cold_blooded;
    }

}

class Ape extends Animal {
    constructor(name){
        super(name);
        this._legs = 2;
    }

    yell(){
        console.log("Auooo");
    }
}

class Frog extends Animal {
    constructor(name){
        super(name);
    }

    jump(){
        console.log("hop hop");
    }
}

let sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
console.log(sungokong.name);
console.log(sungokong.legs);
console.log(sungokong.cold_blooded);

let kodok = new Frog("buduk")
kodok.jump() // "hop hop"
console.log(kodok.name);
console.log(kodok.legs);
console.log(kodok.cold_blooded);
