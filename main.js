let apple = new Apple();
let adam = new Human("Adam", "Male", 80);
let eva = new Human("Eva", "Female", 50);

function eatAppleByAdamNEva() {
    adam.setApple(apple);
    eva.setApple(apple);
    while (!apple.isEmpty()) {
        adam.eatApple();
        console.log(apple.getWeightInfo());
        eva.eatApple();
        console.log(apple.getWeightInfo());
    }
}
adam.speak();
eva.speak();
console.log(apple.getWeightInfo());
eatAppleByAdamNEva();





