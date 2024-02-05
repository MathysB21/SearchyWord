const tableRows = 28;
const tableColumns = 28;
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const amountOfWords = 5;
const words = ['house', 'apple', 'book', 'cat', 'dog', 'mouse', 'human', 'shelf', 'knife'];
const directions = ['right', 'down']; // 'left', 'up'
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
            // Word needs to be reversed for this one
            bounds[start][x] = wordLength;
            bounds[start][y] = 1;
            bounds[end][x] = tableColumns;
            bounds[end][y] = tableRows;

            break;
        case 'up':
            //Word needs to be reversed for this one
            bounds[start][x] = 1;
            bounds[start][y] = wordLength;
            bounds[end][x] = tableColumns;
            bounds[end][y] = tableRows;

            break;
        default:
            break;
    }
    console.log(bounds);
    return bounds;
}

// function wordReverser (word) {
//     let wordArray = word.split();
//     let revWordArray = wordArray.reverse();
//     let reversedWord = revWordArray.join('');
//     return reversedWord;
// }

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

    // Pick a random cell to start, look in its direction if its wordlength of cells are open, if not try again
    // let legal = false;
    // while (!legal) {
    //     randomPoint = randomChoice(choiceArray);
    //     console.log(randomPoint);
    //     if (possibleCells[randomPoint] == '') {
    //         let [x, y] = randomPoint.split(',');
    //         switch (dir) {
    //             case 'right':
    //                 let counter = 0;
    //                 let xWL = x + wordLength
    //                 for (let i = x; i < xWL; i++) {
    //                     if (possibleCells[`${i},${y}`] == '') {
    //                         counter++;
    //                     }
    //                     console.log(possibleCells[`${i},${y}`], counter);
    //                 }
    //                 if (counter == wordLength) {
    //                     legal = true;
    //                     legalStartPoint = randomPoint;
    //                 }

    //                 break;
    //             case 'down':
    //                 break;
    //             case 'left':
    //                 break;
    //             case 'up':
    //                 break;
    //         }
    //     } else {
    //         console.log('Random point is not empty');
    //         continue;
    //     }
    // }

    legalStartPoint = randomChoice(choiceArray);
    return legalStartPoint;
}

function placeWord (startPoint, dir, oldWord) {
    let word = oldWord.toUpperCase();
    let [x, y] = startPoint.split(',');
    let wordLength = word.length;
    let letter;
    switch (dir) {
        case 'right':
            let xWL = Number(x) + wordLength
            letter = 0;
            for (let i = x; i < xWL; i++) {
                cell = document.getElementById(`cell-${i},${y}`);
                cell.innerHTML = word[letter];
                grid[`${i},${y}`] = word[letter];
                letter++;
            }
            break;
        case 'down':
            let yWL = Number(y) + wordLength
            letter = 0;
            for (let i = y; i < yWL; i++) {
                cell = document.getElementById(`cell-${x},${i}`);
                cell.innerHTML = word[letter];
                grid[`${x},${i}`] = word[letter];
                letter++;
            }
            break;
        case 'left':
            break;
        case 'up':
            break;
    }
}

function crossWord (amountOfWords) {
    let word;
    let listOfWords = [];
    let allUniqueWords = false;
    let howManyToAdd = amountOfWords;

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
        console.log('Word start: ', newWord.startPoint);
        console.log('Word: ', newWord.word);
        placeWord(newWord.startPoint, newWord.dir, newWord.word);
    });

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

function clickCell () {

}

tableBuilder(tableColumns, tableRows);

crossWord(6);

// TODO:
// x Add the click highlight function
// - Add the click and drag function 
// - Add the functionality that words cannot overlap
// - Add the left and up functions as well, don't reverse the words!
// - Add a wordPositions object with all the positions of the words. Or maybe don't return an array, but make all the positions a unique key and then let the clickDrag function make a key for the dragged word and search for this key in the wordPositions Array.