function takeShower() {
    return "Showering"
}

function eatBreakfast() {
 let meal = cookFood()
 return `Eating ${meal}`   
}

function cookFood() {
    let items = ["oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random()*items.length)];
}
function wakeup() {
    takeShower()
    eatBreakfast()
    console.log("Ok ready to go for work !")
}
wakeup()
