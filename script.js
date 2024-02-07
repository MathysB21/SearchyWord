const sideLength = 21; // min 12, max 110, 21 is optimal for most screens
const areaPerWord = 32; // Reducing will make the words more dense, but can cause issues when the sideLength goes too low
const tableRows = sideLength;
const tableColumns = sideLength;
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const words = ['Halibut', 'Lystrosaurus', 'Stonefish', 'Alligator', 'Dachshund', 'Kiwi', 'Rhinoceros', 'Tigerfish', 'Brachiosaurus', 'Yorkie', 'Wasp', 'Sheep', 'Wallaby', 'Armadillo', 'Guppy', 'Fossa', 'Anteosaurus', 'Anaconda', 'Jackal', 'Dalmatian', 'Llama', 'Goldfish', 'Shrimp', 'Emu', 'Hamster', 'Nightingale', 'Hawk', 'Kudu', 'Chinook', 'Pomeranian', 'Hummingbird', 'Civet', 'Lizard', 'Basset', 'Chihuahua', 'Falcon', 'Heron', 'Eel', 'Quagga', 'Elephant', 'Anteater', 'Doberman', 'Grouper', 'Megalodon', 'Jaguar', 'Raccoon', 'Prawn', 'Goldeneye', 'Dragonfly', 'Quail', 'Caracal', 'Butterfly', 'Limpet', 'Bat', 'Jellyfish', 'Reindeer', 'Cow', 'Triggerfish', 'Panther', 'Axolotl', 'Stingray', 'Frigatebird', 'Titanoboa', 'Alsatian', 'Peacock', 'Ant', 'Anglerfish', 'Mockingbird', 'Ragamuffin', 'Bowfin', 'Puma', 'Labrador', 'Tuna', 'Herring', 'Bluegill', 'Sparrow', 'Gerbil', 'Porcupine', 'Wolf', 'Mamba', 'Hornbill', 'Foxhound', 'Impala', 'Yak', 'Pelican', 'Blobfish', 'Pachycephalosaurus', 'Gazelle', 'Robin', 'Toad', 'Marmoset', 'Ragdoll', 'Crab', 'Crayfish', 'Warbler', 'Gecko', 'Kingfisher', 'Monitor', 'Bluebird', 'Bird', 'Beaver', 'Turtle', 'Malamute', 'Springbok', 'Archerfish', 'Boerboel', 'Seagull', 'Dolphin', 'Baboon', 'Siamese', 'Goat', 'Monkey', 'Ladybug', 'Shark', 'Schnauzer', 'Bandicoot', 'Firefly', 'Amargasaurus', 'Warthog', 'Starling', 'Shepherd', 'Stork', 'Pug', 'Walrus', 'Bison', 'Carp', 'Parakeet', 'Puffin', 'Bluefish', 'Swordfish', 'Tortoise', 'Shrew', 'Moth', 'Angelfish', 'Ape', 'Platypus', 'Mastiff', 'Mandrill', 'Roadrunner', 'Serval', 'Dog', 'Ceratosaurus', 'Mackerel', 'Cougar', 'Newt', 'Wildebeest', 'Chicken', 'Abyssinian', 'Bee', 'Allosaurus', 'Klipspringer', 'Lion', 'Masiakasaurus', 'Centipede', 'Lemur', 'Duck', 'Moose', 'Seahorse', 'Starfish', 'Styracosaurus', 'Maltese', 'Clownfish', 'Pointer', 'Sphynx', 'Brontosaurus', 'Hyena', 'Sloth', 'Boomslang', 'Wolverine', 'Catfish', 'Deer', 'Bass', 'Adder', 'Pangolin', 'Seal', 'Narwhal', 'Elasmosaurus', 'Bullfrog', 'Cobra', 'Oxpecker', 'Sparrowhawk', 'Ox', 'Mauzer', 'Cheetah', 'Egret', 'Camel', 'Badger', 'Bloodhound', 'Lobster', 'Lionfish', 'Ibex', 'Kangaroo', 'Hippopotamus', 'Meerkat', 'Donkey', 'Krill', 'Eagle', 'Antelope', 'Mole', 'Hornet', 'Giraffe', 'Squid ', 'Beetle', 'Burmese', 'Snake', 'Koala', 'Scorpion', 'Flycatcher', 'Bear', 'Mongrel', 'Caterpillar', 'Octopus', 'Dingo', 'Wombat', 'Viper', 'Swan', 'Barracuda', 'Cockatoo', 'Hainosaurus', 'Mammoth', 'Dodo', 'Buffalo', 'Raven', 'Capybara', 'Canary', 'Swallow', 'Bulldog', 'Rat', 'Tapir', 'Flamingo', 'Lyrebird', 'Human', 'Koi', 'Cricket', 'Pufferfish', 'Possum', 'Siberian', 'Nautilus', 'Orangutan', 'Panda', 'Hedgehog', 'Beagle', 'Weasel', 'Whale', 'Penguin', 'Sardines', 'Hare', 'Rattlesnake', 'Piranha', 'Vulture', 'Tiger', 'Firehawk', 'Haddock', 'Mule', 'Pterodactyl', 'Kookaburra', 'Bobcat', 'Velociraptor', 'Gopher', 'Bully', 'Otter', 'Fish', 'Bullmastiff', 'Bullsnake', 'Chameleon', 'Trout', 'Sailfish', 'Iguana', 'Liger', 'Sturgeon', 'Tarantula', 'Poodle', 'Ray', 'Ostrich', 'Mongoose', 'Goose', 'Magpie', 'Anchovies', 'Terrier', 'Elk', 'Boa', 'Yellowfin', 'Codfish', 'Fox', 'Marlin', 'Ibis', 'Woodpecker', 'Sheepdog', 'Gorilla', 'Collie', 'Ferret', 'Jackrabbit', 'Copperhead', 'Barosaurus', 'Leopard', 'Pig', 'Bumblebee', 'Spaniel', 'Lynx', 'Frog', 'Ocelot', 'Greyhound', 'Cassowary', 'Pheasant', 'Chipmunk', 'Cockroach', 'Caribou', 'Cockle', 'Retriever', 'Oyster', 'Fowl', 'Hoopoe', 'Hartebeest', 'Dilophosaurus', 'Labradoodle', 'Cicada', 'Mantis', 'Rabbit', 'Buzzard', 'Grasshopper', 'Macaw', 'Mouse', 'Kingklip', 'Parrotfish', 'Squirrel', 'Waterbuck', 'Chilesaurus', 'Wildcat', 'Perch', 'Okapi', 'Mosasaurus', 'Skunk', 'Zebra', 'Earthworm', 'Squid', 'Puffer', 'Nguni', 'Sunfish', 'Manatee', 'Cryolophosaurus', 'Chinchilla', 'Parrot', 'Horse', 'Swallowtail', 'Chimpanzee', 'Albatross', 'Snail', 'Aardvark', 'Cockatiel', 'Nyala', 'Whippet', 'Coyote', 'Alpaca', 'Boxer', 'Fisher', 'Hound', 'Toucan', 'Crane', 'Capuchin', 'Angelshark', 'Crocodile', 'Owl', 'Eland', 'Turkey', 'Kakapo', 'Husky', 'Cat', 'Magyarosaurus', 'Salamander', 'Marmot', 'Rottweiler', 'Cottonmouth', 'Pigeon', 'Cod', 'Python', 'Osprey', 'Salmon', 'Crow'];
const directions = ['right', 'down', 'left', 'up'];
let cellsUsed = [];
let lettersRevealed = [];
let grid = {};
let isDragging = false;
let selectedCells = [];
let selectedCellIDs = [];
let posWord = {}
let wordsStillHidden;
const successMessages = ['Hey, you found a word!', 'Nice! That\'s a word!', 'Yup, you got one!', 'Yes indeed, that\'s a word!', 'Cool beans, you found a word!', 'Yay! That\'s a word!', 'Yes! You got one', 'Nicely done!', 'You got one!', 'Good eye!'];
const failMessages = ['Oops!', 'Nope!', 'Unfortunately not!', 'Sadly not...', 'You were so close!', 'I didn\'t put it there...', 'Just missed it!', 'So close!', 'Almost had it!'];
const playAgainButton = document.getElementById('playAgain');
const playLaterButton = document.getElementById('playLater');

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

    // Add event listener to the table
    table.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

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
            // addCellClickListener(newCell);

            // Append this cell to the row
            newRow.appendChild(newCell);
        }

        // After adding the rows to the column, append the entire column to 
        table.appendChild(newRow);
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
        if (isLegal) {
            goodSpotToStart = emptyPos;
        }
    }

    legalStartPoint = goodSpotToStart;

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

    return emptyPos;
}

function placeWord (startPoint, dir, oldWord) {
    let word = oldWord.toUpperCase().trim();
    let [x, y] = startPoint.split(',');
    let wordLength = word.length;
    let letter;
    let xWL;
    let yWL;
    let placedWordPos = [];
    let key;
    switch (dir) {
        case 'right':
            xWL = Number(x) + wordLength
            letter = 0;
            for (let i = x; i < xWL; i++) {
                cell = document.getElementById(`cell-${i},${y}`);
                cell.innerHTML = word[letter];
                grid[`${i},${y}`] = word[letter];
                cellsUsed.push(`cell-${i},${y}`);
                placedWordPos.push(`cell-${i},${y}`);
                letter++;
            }
            key = placedWordPos.join('.');
            posWord[key] = oldWord.trim();
            break;
        case 'down':
            yWL = Number(y) + wordLength
            letter = 0;
            for (let i = y; i < yWL; i++) {
                cell = document.getElementById(`cell-${x},${i}`);
                cell.innerHTML = word[letter];
                grid[`${x},${i}`] = word[letter];
                cellsUsed.push(`cell-${x},${i}`);
                placedWordPos.push(`cell-${x},${i}`);
                letter++;
            }
            key = placedWordPos.join('.');
            posWord[key] = oldWord.trim();
            break;
        case 'left':
            xWL = Number(x) - wordLength
            letter = 0;
            for (let i = x; i > xWL; i--) {
                cell = document.getElementById(`cell-${i},${y}`);
                cell.innerHTML = word[letter];
                grid[`${i},${y}`] = word[letter];
                cellsUsed.push(`cell-${i},${y}`);
                placedWordPos.push(`cell-${i},${y}`);
                letter++;
            }
            key = placedWordPos.join('.');
            posWord[key] = oldWord.trim();
            break;
        case 'up':
            yWL = Number(y) - wordLength
            letter = 0;
            for (let i = y; i > yWL; i--) {
                cell = document.getElementById(`cell-${x},${i}`);
                cell.innerHTML = word[letter];
                grid[`${x},${i}`] = word[letter];
                cellsUsed.push(`cell-${x},${i}`);
                placedWordPos.push(`cell-${x},${i}`);
                letter++;
            }
            key = placedWordPos.join('.');
            posWord[key] = oldWord.trim();
            break;
    }
}

function crossWord (amountOfWords) {
    let listOfWords = [];
    let allUniqueWords = false;
    let howManyToAdd = amountOfWords;
    wordsStillHidden = amountOfWords;

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
        }
    }
    
    listOfWords.forEach((word) => {
        let newWord = new Word(word);
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
        cell.style.backgroundColor = 'crimson';
        cell.style.color = 'white';
        lettersRevealed.push(cellsUsed[keyIndex]);
    }
}

function unReveal () {
    if (lettersRevealed.length !== 0) {
        for (let i in lettersRevealed) {
            let cell = document.getElementById(lettersRevealed[i]);
            cell.style.backgroundColor = '';
            cell.style.color = 'black';
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
    let newListItemID;

    for (let wordIndex in listOfWords) {
        let listItem = document.createElement('li');
        newListItemID = `${listOfWords[wordIndex]}`;
        listItem.setAttribute('id', newListItemID);
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

function handleMouseDown(event) {
    const clickedCell = event.target;

    // Add the 'clicked' class to the clicked cell
    if (clickedCell.tagName.toLowerCase() === 'td') {
        isDragging = true;
        clickedCell.classList.add('clicked');
        selectedCells.push(clickedCell);
        selectedCellIDs.push(clickedCell.id);

        // Add the event listener for mousemove
        document.addEventListener('mousemove', handleMouseMove);
    }
}

function handleMouseMove(event) {
    if (isDragging) {
        const hoveredCell = document.elementFromPoint(event.clientX, event.clientY);

        // Check if the hovered element is a table cell
        if (hoveredCell && hoveredCell.tagName.toLowerCase() === 'td') {
            // Add the 'clicked' class to the hovered cell
            hoveredCell.classList.add('clicked');
            selectedCells.push(hoveredCell);
            selectedCellIDs.push(hoveredCell.id);
        }
    }
}

function handleMouseUp() {
    isDragging = false;

    // Check if selected cells form a stored word (you need to implement this logic)
    const foundWord = checkForWord(selectedCellIDs);

    if (foundWord) {
        // Add the 'foundit' class to the selected cells
        selectedCells.forEach(cell => cell.classList.add('foundit'));
    }

    // Clear the selected cells array
    selectedCells = [];
    selectedCellIDs = [];

    // Remove the 'clicked' class from all cells
    document.querySelectorAll('td.clicked').forEach(cell => cell.classList.remove('clicked'));

    // Remove the event listener for mousemove
    document.removeEventListener('mousemove', handleMouseMove);
}

// Function to check if selected cells form a stored word
function checkForWord(selectedCellIDs) {
    let cellIDNoDups = [];

    //Remove the duplicates, but the order matters, so don't use set here
    for (let index in selectedCellIDs) {
        // If the selected Cell Id is not in the list add it
        if (!cellIDNoDups.includes(selectedCellIDs[index])) {
            cellIDNoDups.push(selectedCellIDs[index]);
        }
    }

    let keyToCheck = cellIDNoDups.join('.');

    // Return true if a word is found, false otherwisereturn false;
    if (keyToCheck in posWord) {
        strikeWord(posWord[keyToCheck]);
        displayTinyPopup(randomChoice(successMessages), 2);
        wordsStillHidden--;
        runWhenAllWordsFound();
        return true;
    } else {
        // Put in a failure toast: Oops, you might have found a word, but I didn't put it there. Here's a cookie 🍪
        displayTinyPopup(randomChoice(failMessages), 2);
        return false;
    }    
}

function strikeWord (word) {
    let listElement = document.getElementById(`${word}`);
    listElement.classList.add('struckthrough');
}

function displayTinyPopup(message, time) {
	// Display the popup
    let popup = document.getElementById('tiny-popup');
    popup.innerHTML = message;
	popup.style.display = 'block';

    let millis = time * 1000;

	setTimeout(() => {
		popup.style.display = 'none';
	}, millis);
}

function runWhenAllWordsFound () {
    if (wordsStillHidden == 0) {
        setTimeout(() => {
            showConfirmationPopup('Congratulations!');
        }, 3000);
    }
}

// Function to display the confirmation popup
function showConfirmationPopup(heading) {
    let newHeading = document.getElementById('popup-heading');
    newHeading.innerText = heading;
    const popup = document.getElementById('confirmationPopup');
    popup.style.display = 'block';
    document.getElementById('overlay').style.display = 'block';

    // Add event listeners to the playAgain and playLater buttons
    playAgainButton.addEventListener('click',() => {
        playAgain();
    });
    playLaterButton.addEventListener('click',() => {
        playLater();
    });
}

// Function to hide the confirmation popup
function hideConfirmationPopup() {
    const popup = document.getElementById('confirmationPopup');
    popup.style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Function to play another round
function playAgain () {
    hideConfirmationPopup();

    // Clean die crossword-grid en die word-box met die cleaner function
    clean();

    // Generate the table
    tableBuilder(tableColumns, tableRows);

    // Generate the words
    crossWord(optimalAmountOfWords(sideLength));
}

// Function to play later and add button
function playLater () {
    hideConfirmationPopup();
    // Add a button to the page that the user can click to play again, do this with a function and make it disappear when the user clicks the button. When the button is clicked it must show the confirmation popup.
    let anotherButton = document.createElement('button');
    anotherButton.innerText = 'Another One';
    anotherButton.classList.add('btn');
    anotherButton.classList.add('another-btn');
    anotherButton.addEventListener('click', () => {
        document.getElementById('btn-box').innerHTML = null;
        showConfirmationPopup('Another one?👀');
    });
    
    const btnbox = document.getElementById('btn-box');
    btnbox.appendChild(anotherButton);
}

function clean () {
    // Get the table and then get the word box
    const table = document.getElementById('crossword-grid');
    const wordBox = document.getElementById('word-box');

    // Clean these objects
    table.innerHTML = null;
    wordBox.innerHTML = null;

    // Clean the arrays and vars too
    cellsUsed = [];
    grid = {};
    posWord = {};
    wordsStillHidden = null;
}

// Build the table and run the crossword generator when the page loads
tableBuilder(tableColumns, tableRows);
crossWord(optimalAmountOfWords(sideLength));

// TODO:
// x Add the click highlight function
// x Add the click and drag function 
// x Add the functionality that words cannot overlap
// x Add the left and up functions as well, don't reverse the words!
// x Add a wordPositions object with all the positions of the words. Or maybe don't return an array, but make all the positions a unique key and then let the clickDrag function make a key for the dragged word and search for this key in the wordPositions Array.
// x Add Success popup if word is found and add an oops popup if the person didn't drag over a word
// ! Add a function that clears the clicked, but wait until the user doesn't interact with the grid and if the clicked letters match a word give success, otherwise clear the clicked cells and display oops
// x Add a reveal, unReveal and reveal5Seconds function
// x Add a block that lists the words to be found
// - Add a difficulty level. 5 Levels, some give you the list of words, others reduce the words and increase the gap between cells
// x Add a hideClicked function to hide the cells you clicked. Use when the user selected a string of words that you didn't put in there for example.
// x Create a function that calculates the optimal amount of words there should be hidden. Sort of a density calculation depending on the sqaure area.
// x Add a function that removes duplicate words
// x Add the function that displays the words you need to find on the right side of the grid
// - Add the diagonal word adding and bounds calculations
// - Add function where random words can start from other words' letters
// x Add the function that keeps words selected when they're found and strikethrough's the word in the word box
// - Figure out how to export and import function to make this main js file look neater
// - Add function to stop trying to add a word if it can't fit after like 10 tries. Then choose a new word
// - Add a check so that words that are longer than the sideLength cannot be chosen
// - Add a check to disallow the tiny popups after the game was completed and if not clicked inside the table. Do this by adding a check that the user clicked inside the table element.
// - Add the playAgain and playLater functions
// - Add the cleaner function
// - Add JSDoc strings om functions te verduidelik
// - Fix bug where multiple another one buttons appear if you just keep clicking no, it's okay - instead of deleting and creating the button, put it in html and change the display property