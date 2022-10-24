const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,

    sleep: function () {
      console.log(`${this.name} needs a nap. Zzz...`);
      this.isTired = 1;
    },

    play: function () {
      if (this.isTired === 10) {
        console.log(`Too tired to play.`);
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} loves to play!`);
        this.isTired += 1;
      }
    }
  };

  return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

clover.isTired = 8;
francine.isTired = 9;

// my specific array that i created
const allPets = [sora, clover, baxter, cleo, francine];
//console.log(allPets);

// petArray is a parameter to placehold for any array that could be passed to the function
const showPets = function (petArray) {
  // empty the list
  pets.innerHTML = ``;

  // loop through the array
  for (let pet of petArray) {
    let status = `ready to play!`;

    if (pet.isTired >= 7) {
      status = `sleeping.`;
    }

    // create a new list item for each pet
    let li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}.`;

    // add each list item to the list of pets
    pets.append(li);
  }
};

// add click event and feed the showPets function the allPets array that i created
statusButton.addEventListener("click", function () {
  showPets(allPets);
});
