function Apple() {
    this.weight = 10;

    this.getWeightInfo = function () {
        return this.weight;
    };
    this.decrease = function () {
        this.weight--;
    };
    this.isEmpty = function () {
        return this.weight <= 0;
    }
}

function Human(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.speak = function () {
        console.log("Hi, I'm " + this.name);
    };
    this.getName = function () {
        return this.name;
    };
    this.getGender = function () {
        return this.gender;
    };
    this.getWeight = function () {
        return this.weight;
    };
    this.setApple = function (apple) {
        this.apple = apple;
    };
    this.checkApple = function () {
        return !this.apple.isEmpty();
    };
    this.eatApple = function () {
        if (this.checkApple()) {
            this.apple.decrease();

        }
    }
}