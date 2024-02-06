const sideLength = 24;
const areaPerWord = 32; // Reducing will make the words more dense, but can cause issues when the sideLength goes too low
const tableRows = sideLength;
const tableColumns = sideLength;
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const amountOfWords = 0;
const words = ['Halibut', 'Lystrosaurus', 'Stonefish', 'Alligator', 'Dachshund', 'Kiwi', 'Rhinoceros', 'Tigerfish', 'Brachiosaurus', 'Yorkie', 'Wasp', 'Sheep', 'Wallaby', 'Armadillo', 'Guppy', 'Fossa', 'Anteosaurus', 'Anaconda', 'Jackal', 'Dalmatian', 'Llama', 'Goldfish', 'Shrimp', 'Emu', 'Hamster', 'Nightingale', 'Hawk', 'Kudu', 'Chinook', 'Pomeranian', 'Hummingbird', 'Civet', 'Lizard', 'Basset', 'Chihuahua', 'Falcon', 'Heron', 'Eel', 'Quagga', 'Elephant', 'Anteater', 'Doberman', 'Grouper', 'Megalodon', 'Jaguar', 'Raccoon', 'Prawn', 'Goldeneye', 'Dragonfly', 'Quail', 'Caracal', 'Butterfly', 'Limpet', 'Bat', 'Jellyfish', 'Reindeer', 'Cow', 'Triggerfish', 'Panther', 'Axolotl', 'Stingray', 'Frigatebird', 'Titanoboa', 'Alsatian', 'Peacock', 'Ant', 'Anglerfish', 'Mockingbird', 'Ragamuffin', 'Bowfin', 'Puma', 'Labrador', 'Tuna', 'Herring', 'Bluegill', 'Sparrow', 'Gerbil', 'Porcupine', 'Wolf', 'Mamba', 'Hornbill', 'Foxhound', 'Impala', 'Yak', 'Pelican', 'Blobfish', 'Pachycephalosaurus', 'Gazelle', 'Robin', 'Toad', 'Marmoset', 'Ragdoll', 'Crab', 'Crayfish', 'Warbler', 'Gecko', 'Kingfisher', 'Monitor', 'Bluebird', 'Bird', 'Beaver', 'Turtle', 'Malamute', 'Springbok', 'Archerfish', 'Boerboel', 'Seagull', 'Dolphin', 'Baboon', 'Siamese', 'Goat', 'Monkey', 'Ladybug', 'Shark', 'Schnauzer', 'Bandicoot', 'Firefly', 'Amargasaurus', 'Warthog', 'Starling', 'Shepherd', 'Stork', 'Pug', 'Walrus', 'Bison', 'Carp', 'Parakeet', 'Puffin', 'Bluefish', 'Swordfish', 'Tortoise', 'Shrew', 'Moth', 'Angelfish', 'Ape', 'Platypus', 'Mastiff', 'Mandrill', 'Roadrunner', 'Serval', 'Dog', 'Ceratosaurus', 'Mackerel', 'Cougar', 'Newt', 'Wildebeest', 'Chicken', 'Abyssinian', 'Bee', 'Allosaurus', 'Klipspringer', 'Lion', 'Masiakasaurus', 'Centipede', 'Lemur', 'Duck', 'Moose', 'Seahorse', 'Starfish', 'Styracosaurus', 'Maltese', 'Clownfish', 'Pointer', 'Sphynx', 'Brontosaurus', 'Hyena', 'Sloth', 'Boomslang', 'Wolverine', 'Catfish', 'Deer', 'Bass', 'Adder', 'Pangolin', 'Seal', 'Narwhal', 'Elasmosaurus', 'Bullfrog', 'Cobra', 'Oxpecker', 'Sparrowhawk', 'Ox', 'Mauzer', 'Cheetah', 'Egret', 'Camel', 'Badger', 'Bloodhound', 'Lobster', 'Lionfish', 'Ibex', 'Kangaroo', 'Hippopotamus', 'Meerkat', 'Donkey', 'Krill', 'Eagle', 'Antelope', 'Mole', 'Hornet', 'Giraffe', 'Squid ', 'Beetle', 'Burmese', 'Snake', 'Koala', 'Scorpion', 'Flycatcher', 'Bear', 'Mongrel', 'Caterpillar', 'Octopus', 'Dingo', 'Wombat', 'Viper', 'Swan', 'Barracuda', 'Cockatoo', 'Hainosaurus', 'Mammoth', 'Dodo', 'Buffalo', 'Raven', 'Capybara', 'Canary', 'Swallow', 'Bulldog', 'Rat', 'Tapir', 'Flamingo', 'Lyrebird', 'Human', 'Koi', 'Cricket', 'Pufferfish', 'Possum', 'Siberian', 'Nautilus', 'Orangutan', 'Panda', 'Hedgehog', 'Beagle', 'Weasel', 'Whale', 'Penguin', 'Sardines', 'Hare', 'Rattlesnake', 'Piranha', 'Vulture', 'Tiger', 'Firehawk', 'Haddock', 'Mule', 'Pterodactyl', 'Kookaburra', 'Bobcat', 'Velociraptor', 'Gopher', 'Bully', 'Otter', 'Fish', 'Bullmastiff', 'Bullsnake', 'Chameleon', 'Trout', 'Sailfish', 'Iguana', 'Liger', 'Sturgeon', 'Tarantula', 'Poodle', 'Ray', 'Ostrich', 'Mongoose', 'Goose', 'Magpie', 'Anchovies', 'Terrier', 'Elk', 'Boa', 'Yellowfin', 'Codfish', 'Fox', 'Marlin', 'Ibis', 'Woodpecker', 'Sheepdog', 'Gorilla', 'Collie', 'Ferret', 'Jackrabbit', 'Copperhead', 'Barosaurus', 'Leopard', 'Pig', 'Bumblebee', 'Spaniel', 'Lynx', 'Frog', 'Ocelot', 'Greyhound', 'Cassowary', 'Pheasant', 'Chipmunk', 'Cockroach', 'Caribou', 'Cockle', 'Maned Wolf', 'Retriever', 'Oyster', 'Fowl', 'Hoopoe', 'Hartebeest', 'Dilophosaurus', 'Labradoodle', 'Cicada', 'Mantis', 'Rabbit', 'Buzzard', 'Grasshopper', 'Macaw', 'Mouse', 'Kingklip', 'Parrotfish', 'Squirrel', 'Waterbuck', 'Chilesaurus', 'Wildcat', 'Perch', 'Okapi', 'Mosasaurus', 'Skunk', 'Zebra', 'Earthworm', 'Squid', 'Puffer', 'Nguni', 'Sunfish', 'Manatee', 'Cryolophosaurus', 'Chinchilla', 'Parrot', 'Horse', 'Swallowtail', 'Chimpanzee', 'Albatross', 'Snail', 'Aardvark', 'Cockatiel', 'Nyala', 'Whippet', 'Coyote', 'Alpaca', 'Boxer', 'Fisher', 'Hound', 'Toucan', 'Crane', 'Capuchin', 'Angelshark', 'Crocodile', 'Owl', 'Eland', 'Turkey', 'Kakapo', 'Husky', 'Cat', 'Magyarosaurus', 'Salamander', 'Marmot', 'Rottweiler', 'Cottonmouth', 'Pigeon', 'Cod', 'Python', 'Osprey', 'Salmon', 'Crow'];
const directions = ['right', 'down', 'left', 'up'];
let cellsUsed = [];
let lettersRevealed = [];
let grid = {};

class Word {
    constructor (wordInput) {
        this.word = wordInput;
        this.wordLength = this.word.length;
        this.dir = randomChoice(directions)
        this.startPointBounds = boundCalculator(this.dir, this.wordLength);
        this.startPoint = startPointFinder(this.startPointBounds, this.wordLength, this.dir);
    }
}

function optimalAmountOfWords (sideLength) {
    let area = sideLength**2;
    return Math.round(area/areaPerWord);
}

function tableBuilder (tableColumns, tableRows) {
    const table = document.getElementById('crossword-grid');
    let newRow;
    let newRowID;
    let newCell;
    let newCellID;

    // Row loop
    for (let x = 1; x <= tableRows; x++) {
        // Add the row
        newRow = document.createElement('tr')
        newRowID = `row-${x}`;
        newRow.setAttribute('id', newRowID);

        // Column loop
        for (let i = 1; i <= tableColumns; i++) {
            // Add the column
            newCell = document.createElement('td')
            newCellID = `cell-${i},${x}`;
            grid[`${i},${x}`] = '';
            newCell.setAttribute('id', newCellID);
            // newCell.innerHTML += (i + (x-1)*12);

            // Add the event listener waiting for clicks:
            addCellClickListener(newCell);

            // Append this cell to the row
            newRow.appendChild(newCell);
        }

        // After adding the rows to the column, append the entire column to 
        table.appendChild(newRow);
        console.log('Added new row');
    }
}

function addCellClickListener (newCell) {
    newCell.addEventListener("click", () => {
        newCell.classList.toggle('clicked');
    });
}

function randomChoice (input) {
    let choice;
    if (typeof input == 'number') {
        choice = Math.floor(Math.random() * input);
    } else {
        choice = input[Math.floor(Math.random() * input.length)];
    }

    return choice;
}

function boundCalculator (dir, wordLength) {
    let bounds = {
        start: {
            x: 0,
            y: 0
        },
        end: {
            x: 0,
            y: 0
        }
    };
    //Make nested switches 
    switch (dir) {
        case 'right':
            bounds.start.x = 1;
            bounds.start.y = 1;
            bounds.end.x = tableColumns - wordLength + 1;
            bounds.end.y = tableRows;

            break;
        case 'down':
            bounds.start.x = 1;
            bounds.start.y = 1;
            bounds.end.x = tableColumns;
            bounds.end.y = tableRows - wordLength + 1;

            break;
        case 'left':
            bounds.start.x = wordLength;
            bounds.start.y = 1;
            bounds.end.x = tableColumns;
            bounds.end.y = tableRows;

            break;
        case 'up':
            bounds.start.x = 1;
            bounds.start.y = wordLength;
            bounds.end.x = tableColumns;
            bounds.end.y = tableRows;

            break;
        default:
            break;
    }
    console.log(bounds);
    return bounds;
}

function startPointFinder(startPointBounds, wordLength, dir) {
    let possibleCells = {};
    let choiceArray = [];
    let legalStartPoint;

    for (let y = startPointBounds.start.y; y <= startPointBounds.end.y; y++) {

        for (let x = startPointBounds.start.x; x <= startPointBounds.end.x; x++) {

            possibleCells[`${x},${y}`] = grid[`${x},${y}`];
            choiceArray.push(`${x},${y}`);
        }
        
    }

    let goodSpotToStart;
    let isLegal = false;
    while (!isLegal) {
        // Find an empty start pos
        let emptyPos = findEmptyPos(choiceArray, possibleCells);

        isLegal = findGoodSpot(emptyPos, wordLength, dir);
        console.log('Is the empty position legal?: ', isLegal);
        if (isLegal) {
            goodSpotToStart = emptyPos;
        }
    }

    console.log('Good Position to start: ', goodSpotToStart);
    legalStartPoint = goodSpotToStart;

    // legalStartPoint = randomChoice(choiceArray);
    return legalStartPoint;
}

function findGoodSpot (startPoint, wordLength, dir) {
    let [x, y] = startPoint.split(',');
    let xWL;
    let yWL;
    let cellsEmpty = [];
    switch (dir) {
        case 'right':
            xWL = Number(x) + wordLength
            for (let i = x; i < xWL; i++) {
                if (grid[`${i},${y}`] == '') {
                    cellsEmpty.push(true)
                } else {
                    cellsEmpty.push(false)
                }
            }
            break;
        case 'down':
            yWL = Number(y) + wordLength
            for (let i = y; i < yWL; i++) {
                if (grid[`${x},${i}`] == '') {
                    cellsEmpty.push(true)
                } else {
                    cellsEmpty.push(false)
                }
            }
            break;
        case 'left':
            xWL = Number(x) - wordLength
            for (let i = x; i > xWL; i--) {
                if (grid[`${i},${y}`] == '') {
                    cellsEmpty.push(true)
                } else {
                    cellsEmpty.push(false)
                }
            }
            break;
        case 'up':
            yWL = Number(y) - wordLength
            for (let i = y; i > yWL; i--) {
                if (grid[`${x},${i}`] == '') {
                    cellsEmpty.push(true)
                } else {
                    cellsEmpty.push(false)
                }
            }
            break;
    }

    console.log(cellsEmpty);
    return cellsEmpty.every((cell) => {
        return cell == true;
    });
}

function findEmptyPos (choiceArray, possibleCells) {
    // Pick a random empty cell to start, look in its direction if its wordlength of cells are open, if not try again
    let randEmpty = false;
    let pos;
    let emptyPos;
    while (!randEmpty) {
        pos = randomChoice(choiceArray);
        if (possibleCells[pos] == '') {
            emptyPos = pos;
            randEmpty = true;
        }
    }

    console.log('Empty Position: ', emptyPos);
    return emptyPos;
}

function placeWord (startPoint, dir, oldWord) {
    let word = oldWord.toUpperCase();
    let [x, y] = startPoint.split(',');
    let wordLength = word.length;
    let letter;
    let xWL;
    let yWL;
    switch (dir) {
        case 'right':
            xWL = Number(x) + wordLength
            letter = 0;
            for (let i = x; i < xWL; i++) {
                cell = document.getElementById(`cell-${i},${y}`);
                cell.innerHTML = word[letter];
                grid[`${i},${y}`] = word[letter];
                cellsUsed.push(`cell-${i},${y}`);
                letter++;
            }
            break;
        case 'down':
            yWL = Number(y) + wordLength
            letter = 0;
            for (let i = y; i < yWL; i++) {
                cell = document.getElementById(`cell-${x},${i}`);
                cell.innerHTML = word[letter];
                grid[`${x},${i}`] = word[letter];
                cellsUsed.push(`cell-${x},${i}`);
                letter++;
            }
            break;
        case 'left':
            xWL = Number(x) - wordLength
            letter = 0;
            for (let i = x; i > xWL; i--) {
                cell = document.getElementById(`cell-${i},${y}`);
                cell.innerHTML = word[letter];
                grid[`${i},${y}`] = word[letter];
                cellsUsed.push(`cell-${i},${y}`);
                letter++;
            }
            break;
        case 'up':
            yWL = Number(y) - wordLength
            letter = 0;
            for (let i = y; i > yWL; i--) {
                cell = document.getElementById(`cell-${x},${i}`);
                cell.innerHTML = word[letter];
                grid[`${x},${i}`] = word[letter];
                cellsUsed.push(`cell-${x},${i}`);
                letter++;
            }
            break;
    }
}

function crossWord (amountOfWords) {
    let listOfWords = [];
    let allUniqueWords = false;
    let howManyToAdd = amountOfWords;

    console.log("How many words to add: ", howManyToAdd);

    while (!allUniqueWords) {
        for (let i = 1; i <= howManyToAdd; i++) {
            listOfWords.push(randomChoice(words));
        }

        listOfWords = [...new Set(listOfWords)];

        if (listOfWords.length == amountOfWords) {
            console.log(listOfWords);
            allUniqueWords = true;
        } else {
            howManyToAdd = amountOfWords - listOfWords.length;
            console.log("How many to add because dups were removed: ", howManyToAdd);
        }
    }
    
    listOfWords.forEach((word) => {
        let newWord = new Word(word);
        console.log('Word: ', newWord.word);
        placeWord(newWord.startPoint, newWord.dir, newWord.word);
    });

    displayWordsToFind(listOfWords);
    emptySpaceFiller();
}

function emptySpaceFiller () {
    for (let key in grid) {
        if (grid[key] == '') {
            cell = document.getElementById(`cell-${key}`);
            cell.innerHTML = randomChoice(letters);
        }
    }
}

function reveal5Seconds () {
    reveal();
    setTimeout(() => {
        unReveal();
    }, 5000);
}

function reveal () {
    for (let keyIndex in cellsUsed) {
        let cell = document.getElementById(cellsUsed[keyIndex]);
        cell.style.backgroundColor = 'aquamarine';
        lettersRevealed.push(cellsUsed[keyIndex]);
    }
}

function unReveal () {
    if (lettersRevealed.length !== 0) {
        for (let i in lettersRevealed) {
            let cell = document.getElementById(lettersRevealed[i]);
            cell.style.backgroundColor = '';
        }

        lettersRevealed = [];
    } else {
        console.log('No letters are revealed...')
    }
}

function hideClicked () {
    let cells = document.querySelectorAll('.clicked');

    cells.forEach((cell) => {
        cell.classList.remove('clicked');
    });
}

function displayWordsToFind (listOfWords) {
    const wordBox = document.getElementById('word-box');

    for (let wordIndex in listOfWords) {
        let listItem = document.createElement('li');
        listItem.innerHTML = capitalize(listOfWords[wordIndex]);
        wordBox.appendChild(listItem);
    }
}

function capitalize (word) {
    let firstLetter = word[0].toUpperCase();
    let wordArray = word.split('');
    wordArray.splice(0, 1, firstLetter);
    word = wordArray.join('');
    return word;
}

tableBuilder(tableColumns, tableRows);

crossWord(optimalAmountOfWords(sideLength));

// TODO:
// x Add the click highlight function
// - Add the click and drag function 
// x Add the functionality that words cannot overlap
// x Add the left and up functions as well, don't reverse the words!
// - Add a wordPositions object with all the positions of the words. Or maybe don't return an array, but make all the positions a unique key and then let the clickDrag function make a key for the dragged word and search for this key in the wordPositions Array.
// x Add a reveal, unReveal and reveal5Seconds function
// - Add a block that lists the words to be found
// - Add a difficulty level. 5 Levels, some give you the list of words, others reduce the words and increase the gap between cells
// x Add a hideClicked function to hide the cells you clicked. Use when the user selected a string of words that you didn't put in there for example.
// - Create a function that calculates the optimal amount of words there should be hidden. Sort of a density calculation depending on the sqaure area.
// x Add a function that removes duplicate words
// x Add the function that displays the words you need to find on the right side of the grid