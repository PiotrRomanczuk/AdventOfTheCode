// -------------------------------------------------------------------------------------------------------------------------
// The newly-improved calibration document consists of lines of text;
// each line originally contained a specific calibration value that the Elves now need to recover.
// On each line, the calibration value can be found by combining the first digit and the last digit(in that order)
// to form a single two - digit number.
//
// For example:
//
// 1abc2
// pqr3stu8vwx
// a1b2c3d4e5f
// treb7uchet
//
// In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.
//
// Consider your entire calibration document. What is the sum of all of the calibration values?
// -------------------------------------------------------------------------------------------------------------------------

// const getInput = async () => {
// 	const response = await fetch('https://adventofcode.com/2020/day/1/input');
// 	const text = await response.text();
// 	return text;
// };

// const input = getInput();
// input.then((data) => {
// 	console.log(data);
// });

// Get the input from the file input txt

const fs = require('fs');

const inputFile = fs.readFileSync('./day1-input.txt', 'utf-8');

// console.log(inputFile);

const splitInputByNewLine = (input) => input.split('\n');

// console.log(splitInputByNewLine(inputFile));

const getFirstAndLastDigit = (input) => {
	// /\d/g: This is a regular expression that matches any digit character.
	// The \d is a shorthand character class that matches any digit(equivalent to[0 - 9]).
	// The g flag at the end makes it a global search, meaning it will find all matches in the string,
	// not just the first one.

	const digits = input.match(/\d/g);
	if (!digits || digits.length === 0) {
		return 0;
	}
	const firstDigit = digits[0];
	const lastDigit = digits[digits.length - 1];
	return parseInt(firstDigit + lastDigit);
};

const sumOfAllCalibrationValues = (input) => {
	const splitInput = splitInputByNewLine(input);
	const calibrationValues = splitInput.map(getFirstAndLastDigit);
	return calibrationValues.reduce((acc, curr) => acc + curr);
};

console.log(sumOfAllCalibrationValues(inputFile));
