class Character {
    hp: number = 1;
    speed: number = 5;
    positionX: number = 0;
    positionY: number = 0;
    currentForm: "mario" | "super mario" | "fire mario" = "mario";
    invincible: boolean = false;
    fireBall: boolean = false;

    // Method
    getPowerUp() { }

    getAttack() {
        if (this.invincible == true) {
            console.log(`The attack had no effect, remaining Health ${this.hp}`);
        } else {
            this.hp -= 1;
            this.currentForm = "mario"
            console.log(`Attacked, form return to ${this.currentForm}, remaining Health ${this.hp}`);
        }
    }

    getRight() {
        this.positionX += this.speed;
        console.log(`${this.currentForm} moving to right`);
    }

    getLeft() {
        this.positionX -= this.speed;
        console.log(`${this.currentForm} moving to left`);
    }
}

class SuperMushroom extends Character {
    getPowerUp() {
        this.currentForm = "super mario";
        this.hp += 1
        console.log(`Change form to be ${this.currentForm} and Hp ${this.hp}`);
    }
}

class FireFlower extends Character {
    getBunga() {
        this.currentForm = "fire mario";
        this.hp += 1;
        this.fireBall = true;
        return (`Current character is ${this.currentForm}, health is ${this.hp} and can shooting fire ball`);
    }
}

class SuperStar extends Character {
    getPowerUp() {
        this.currentForm = "mario"
        this.invincible = true;
        // return `${this.currentForm} kebal terhadap serangan`;
        console.log(`Current character is ${this.currentForm} kebal terhadap serangan`)
    }
}


const MarioBros2 = new SuperMushroom()
MarioBros2.getPowerUp();
MarioBros2.getRight();

const Skill = new FireFlower()
console.log(Skill.getBunga());

const Skill2 = new SuperStar()
Skill2.getPowerUp();