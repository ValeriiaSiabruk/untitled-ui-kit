const bodyParts = [
    "mouth",
    "ears",
    "legs",
    "body",
    "hands",
    "fingers"
];
const adjectives = [
    "smelly",
    "stupid",
    "boring",
    "detestable",
    "slippery",
    "bony",
    "repulsive", 
];
const animals = [
    "rat",
    "monkey",
    "wombat",
    "parrot",
    "cockroach",
    "giraffe",
    "hake",
    "hippo",
    "pig", 
];
const animalBodyParts = [
    "teeth",
    "tail",
    "muzzle",
    "nous",
    "mouth",
    "eyes",
    "gut",
    "claws", 
];
const randomBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
const randomAnimals = animals[Math.floor(Math.random() * animals.length)];
const randomAnimalBodyPart = animalBodyParts[Math.floor(Math.random() * animalBodyParts.length)];
const randomInsult = [
    "Your",
    randomBodyPart,
    "is",
    "more",
    randomAdjective,
    "than",
    "a",
    randomAnimals + "`s",
    randomAnimalBodyPart + "!!!", 
].join(" ");
console.log(randomInsult);
const randomInsult2 = "Your " + randomBodyPart + " is more " + randomAdjective + " than " + "a " + randomAnimals + "`s " + randomAnimalBodyPart + "!!!";
console.log(randomInsult2);
const numbers = [
    3,
    2,
    1
];
const numbersArray = [
    numbers[0],
    "is",
    "bigger",
    "than",
    numbers[1],
    "is",
    "bigger",
    "than",
    numbers[2], 
].join(" ");
console.log(numbersArray);

//# sourceMappingURL=index.689bb7a9.js.map
