// The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.
// For example:
// 1abc2
// pqr3stu8vwx
// a1b2c3d4e5f
// treb7uchet
// In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.
// Consider your entire calibration document. What is the sum of all of the calibration values?
// Get the input from this website https://adventofcode.com/2023/day/1/input
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
var fs = require('fs');
var inputFile = fs.readFileSync('./input.txt', 'utf-8');
console.log(inputFile);
// const splitInputByNewLine = (input): string[] => input.split('\n');
// const getFirstAndLastDigit = (input: string): number => {
// 	const digits = input.match(/\d/g);
// 	if (!digits || digits.length === 0) {
// 		return 0;
// 	}
// 	const firstDigit = digits[0];
// 	const lastDigit = digits[digits.length - 1];
// 	return parseInt(firstDigit + lastDigit);
// };
// const sumOfAllCalibrationValues = (input: string): number => {
// 	const splitInput = splitInputByNewLine(input);
// 	const calibrationValues = splitInput.map(getFirstAndLastDigit);
// 	return calibrationValues.reduce((acc, curr) => acc + curr);
// };
// console.log(sumOfAllCalibrationValues(input));
