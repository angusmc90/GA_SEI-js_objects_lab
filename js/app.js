console.log("js-objects-lab")

const bigFoot = {
    name:"Big Foot",
    color:"Brown",
    ifReal: true,
    height: 7, //in feet
    diet: "Vegetarian",
    woodlandFriends: ["bunny", "squirrel", "deer"],
}

function sayHello(name){
    return `Hello, ${name}`
}

// call sayHello for each woodlandFriend
bigFoot.woodlandFriends.forEach(function (friend){
    console.log(sayHello(friend))
})

console.log(bigFoot.color);
bigFoot.color ="strawberry blonde";
console.log(bigFoot.color);

console.log(bigFoot.diet);
bigFoot.diet="children's tears";
console.log(bigFoot.diet);

console.log(bigFoot.woodlandFriends[2]);