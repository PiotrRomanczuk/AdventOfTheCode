function sumOfPartNumbers(engineSchematic) {
	// Split the engine schematic into rows
	const rows = engineSchematic.split('\n');

	// Define symbols that indicate part numbers
	const symbols = ['*', '#', '+', '$'];

	// Initialize sum
	let sum = 0;

	// Iterate through each row and each character in the row
	for (let i = 0; i < rows.length; i++) {
		for (let j = 0; j < rows[i].length; j++) {
			const currentChar = rows[i][j];

			// Check if the current character is a digit or a symbol
			if (!isNaN(currentChar) || symbols.includes(currentChar)) {
				// Check the adjacent characters (including diagonals)
				for (let x = -1; x <= 1; x++) {
					for (let y = -1; y <= 1; y++) {
						const newRow = i + x;
						const newCol = j + y;

						// Check if the adjacent position is within the boundaries
						if (
							newRow >= 0 &&
							newRow < rows.length &&
							newCol >= 0 &&
							newCol < rows[i].length
						) {
							const adjacentChar = rows[newRow][newCol];

							// Check if the adjacent character is a digit
							if (!isNaN(adjacentChar)) {
								// Add the digit to the sum
								sum += parseInt(adjacentChar);
							}
						}
					}
				}
			}
		}
	}

	return sum;
}

import fs from 'fs';
const engineSchematic = fs.readFileSync('./engineInput.txt', 'utf8');

const result = sumOfPartNumbers(engineSchematic);
console.log(result); // Output: 4361
