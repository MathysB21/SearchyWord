const tableRows = 28;
const tableColumns = 28;
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const amountOfWords = 5;
const words = ['house', 'apple', 'book', 'cat', 'dog', 'mouse', 'human', 'shelf', 'knife'];
const directions = ['right']; // , 'down', 'left', 'up'
// let posDirec = [];
// let cellUsed = [];
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
            // newCell.innerHTML += randomChoice(letters);
            // newCell.innerHTML += (i + (x-1)*12);
            // newCell.innerHTML += '';

            // Append this cell to the row
            newRow.appendChild(newCell);
        }

        // After adding the rows to the column, append the entire column to 
        table.appendChild(newRow);
        console.log('Added new row');
    }
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
            bounds[start][x] = 1;
            bounds[start][y] = 1;
            bounds[end][x] = tableColumns;
            bounds[end][y] = tableRows - wordLength + 1;

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

function wordReverser (word) {
    let wordArray = word.split();
    let revWordArray = wordArray.reverse();
    let reversedWord = revWordArray.join('');
    return reversedWord;
}

function startPointFinder(startPointBounds, wordLength, dir) {
    let possibleCells = {};
    let choiceArray = [];
    // let startingCellNumber = startPointBounds[start][y]*tableColumns - (tableColumns-startPointBounds[start][x]);
    // let endingCellNumber = startPointBounds[end][y]*tableColumns - (tableColumns-startPointBounds[end][x]) + 1;
    let legalStartPoint;

    for (let y = startPointBounds.start.y; y <= startPointBounds.end.y; y++) {

        for (let x = startPointBounds.start.x; x <= startPointBounds.end.x; x++) {

            possibleCells[`${x},${y}`] = grid[`${x},${y}`];
            choiceArray.push(`${x},${y}`);
        }
        
    }
    console.log(choiceArray);

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
    switch (dir) {
        case 'right':
            let xWL = Number(x) + wordLength
            let letter = 0;
            for (let i = x; i < xWL; i++) {
                cell = document.getElementById(`cell-${i},${y}`);
                cell.innerHTML = word[letter];
                grid[`${i},${y}`] = word[letter];
                letter++;
            }
            break;
        case 'down':
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
    

    // for (let i in listOfWords) {
    //     let newWord = new Word(listOfWords[i]);
    //     console.log('Word start: ', newWord.startPoint);
    //     console.log('Word: ', newWord.word);
    //     placeWord(newWord.startPoint, newWord.dir, newWord.word);
    // }
    
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

// function positionFinder (word, wordLength, direction) {
//     let randomPos;
//     let numberOfCells = tableColumns * tableRows;
//     let posDirecValue;
//     let cellNumber;
//     let cellContent;

//     // Words may start from the same position as long as they don't go into the same direction
//     // this could cause word overwrites
//     switch (direction) {
//         case 'hori':
//             while (true) {
//                 randomPos = randomChoice(numberOfCells);
//                 posDirecValue = `${randomPos + direction}`
//                 if (!posDirec.includes(posDirecValue)) {
//                     if ((randomPos + wordLength) <= tableColumns) {
//                         cellContent = document.getElementById(`cell-${randomPos}`);
//                         if (cellContent == word[0] || cellContent == '') {
//                             cellNumber = randomPos;
//                             posDirec.push(posDirecValue);
//                             cellUsed.push(randomPos);
//                             break;
//                         } else {
//                             console.log('This word overwrites');
//                             continue;
//                         }
//                     } else {
//                         console.log('Out of bounds');
//                         continue;
//                     }
//                 } else {
//                     console.log('Already used position and direction');
//                     continue;
//                 }
//             }
//             break;
//         case 'vert':
//             // When the word needs to go vertical
//             while (true) {
//                 randomPos = randomChoice(numberOfCells);
//                 posDirecValue = `${randomPos + direction}`
//                 if (!posDirec.includes(posDirecValue)) {
//                     if ((randomPos + wordLength) <= tableRows) {
//                         cellContent = document.getElementById(`cell-${randomPos}`);
//                         if (cellContent == word[0] || cellContent == '') {
//                             cellNumber = randomPos;
//                             posDirec.push(posDirecValue);
//                             cellUsed.push(randomPos);
//                             break;
//                         } else {
//                             console.log('This word overwrites');
//                             continue;
//                         }
//                     } else {
//                         console.log('Out of bounds');
//                         continue;
//                     }
//                 } else {
//                     console.log('Already used position and direction');
//                     continue;
//                 }
//             }
//             break;
//         default:
//             break;
//     }

//     return cellNumber;
// }

// function wordPlacer (word, wordLength, direction, cellNumber) {
//     let cellID;
//     switch (direction) {
//         case 'hori':
//             for (let i = 0; i < wordLength; i++) {
//                 cellID = `cell-${cellNumber + i}`;
//                 cell = document.getElementById(cellID);
//                 cell.innerHTML += word[i];
//             }
//             break;
//         case 'vert':
//             for (let i = 0; i < wordLength; i++) {
//                 cellID = `cell-${cellNumber + (i*tableRows)}`;
//                 cell = document.getElementById(cellID);
//                 cell.innerHTML += word[i];
//             }
//             break;
//         default:
//             break;
//     }
// }

tableBuilder(tableColumns, tableRows);

crossWord(6);