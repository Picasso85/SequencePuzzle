const fs = require('fs');

// Function to read arrays from the file
function readArraysFromFile(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const arrays = fileContent
        .trim()
        .split('\n') // Split by newlines
        .map(line => JSON.parse(line.trim())); // Parse each line as JSON
    return arrays;
}

function countSmallerToRight(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                count++;
            }
        }
        result.push(count);
    }
    return result;
}

function calculateMedian(arr) {
    arr.sort((a, b) => a - b);
    const len = arr.length;
    if (len % 2 === 0) {
        const mid1 = arr[len / 2 - 1];
        const mid2 = arr[len / 2];
        return Math.ceil((mid1 + mid2) / 2); // Rounded up median
    } else {
        return arr[Math.floor(len / 2)];
    }
}

function calculateFinalResult(arrays) {
    let finalResult = 0;

    arrays.forEach(array => {
        const smallerCounts = countSmallerToRight(array);
        const median = calculateMedian(smallerCounts);
        finalResult += median;
    });

    return finalResult;
}

// Path to the input file
const filePath = './sequence.txt';

// Read arrays from the file
const inputArrays = readArraysFromFile(filePath);

// Calculate and print the final result
const finalResult = calculateFinalResult(inputArrays);
console.log(finalResult);
