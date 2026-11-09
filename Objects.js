const tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true
};

const elephant = {
  species: "Elephant",
  age: 10,
  isEndangered: true
};

const getSpecies = (animal) => {
  return animal.species;
};

console.log(getSpecies(tiger));

const getAge = (animal) => {
  return animal.age;
};

console.log(getAge(tiger));

const addHabitat = (animal, habitat) => {
  animal.habitat = habitat;
  return animal;
};

console.log(addHabitat(tiger, "Rainforest"));

const updateAge = (animal, newAge) => {
  animal.age = newAge;
  return animal;
};

console.log(updateAge(elephant, 12));

const removeEndangeredStatus = (animal) => {
  delete animal.isEndangered;
  return animal;
};

console.log(removeEndangeredStatus(tiger));

const hasHabitat = (animal) => {
  return animal.hasOwnProperty("habitat");
};

console.log(hasHabitat(tiger));
console.log(hasHabitat(elephant));

const getProperty = (animal, propertyName) => {
  return animal[propertyName];
};
console.log(getProperty(tiger, "species"));
console.log(getProperty(elephant, "age"));


const recipes = [];

const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe2 = {
  name: "Chicken Curry",
  ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: ""
};

recipes.push(recipe1, recipe2, recipe3);

function getTotalIngredients(ingredientsArray) {
  return ingredientsArray.length;
}

function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime <= 60) {
    return "medium";
  } else {
    return "hard";
  }
}

recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

console.log(recipes);


const collection = {
  101: {
    title: "Golden Mask",
    category: "Ceremonial",
    curator: {
      id: 201,
      name: "Earl Sinclair",
    },
    locations: [
      { gallery: "Hall A", year: 2020 },
      { gallery: "Hall C", year: 2024 },
    ],
    tags: ["gold", "egypt"],
    onDisplay: true,
  },
  102: {
    title: "Bronze Tablet",
    category: "Inscription",
    curator: {
      id: 202,
      name: "Robert Sinclair",
    },
    locations: [{ gallery: "Archive Wing", year: 2019 }],
    tags: ["bronze", "writing"],
    onDisplay: false,
  },
};

console.log(collection[101].title);
console.log(collection[101].curator.name);

function getArtifactTitle(id) {
  const artifact = collection[id];
  return artifact ? artifact.title : "Artifact not found";
}

console.log(getArtifactTitle(102));

function addTag(id, tag) {
  const artifact = collection[id];
  if (artifact && !artifact.tags.includes(tag)) {
    artifact.tags.push(tag);
  }
}

addTag(101, "royal");
console.log(collection[101].tags);

function moveArtifact(id, gallery, year) {
  const artifact = collection[id];
  if (artifact) {
    artifact.locations.push({ gallery, year });
  }
}

moveArtifact(102, "Hall B", 2026);
console.log(collection[102].locations);

function toggleDisplayStatus(id) {
  const artifact = collection[id];
  if (artifact) {
    artifact.onDisplay = !artifact.onDisplay;
  }
}

console.log(collection[102].onDisplay);
toggleDisplayStatus(102);
console.log(collection[102].onDisplay);

function updateCurator(id, name) {
  const artifact = collection[id];
  if (artifact) {
    artifact.curator.name = name;
  }
}

updateCurator(101, "Fran Sinclair");
console.log(collection[101].curator.name);

function buildSummary(id) {
  const artifact = collection[id];
  if (!artifact) {
    return "Artifact not found";
  }
  const currentLocation = artifact.locations[artifact.locations.length - 1];
  return `${artifact.title}
Category: ${artifact.category}
Curator: ${artifact.curator.name}
Current Gallery: ${currentLocation.gallery}
On Display: ${artifact.onDisplay}`;
}

console.log(buildSummary(101));