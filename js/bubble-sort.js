'use strict';

const bubbleSort = (array) => {
	let unsortedElements = array.length;

	while (unsortedElements !== 0) {

		for (let i = 0; i + 1 < unsortedElements; i += 1) {
			const currenValue = array[i];
			const nextValue = array[i + 1];

			if (currenValue > nextValue) {
				array[i + 1] = currenValue;
				array[i] = nextValue;
			}

			count++;
		}

		unsortedElements -= 1;
	}

	return array;
}

// random array
const randomArray = [51, 94, 27, 31, 65, 59, 25, 81, 14, 88, 35, 50, 72, 58, 83, 28, 40, 57, 51, 22, 72, 15, 64, 21, 19, 85, 87, 9, 76, 29, 3, 7, 74, 74, 32, 11, 42, 81, 55, 78, 23, 63, 23, 66, 50, 2, 64, 36, 18, 86, 73, 30, 12, 78, 51, 84, 94, 12, 23, 66, 49, 78, 25, 29, 45, 90, 97, 83, 78, 23, 34, 26, 39, 98, 31, 78, 84, 66, 46, 61, 26, 99, 0, 26, 20, 20, 50, 56, 40, 60, 64, 66, 62, 89, 1, 69, 44, 67, 64, 33];

// sorted array
const sortedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

// bubble sort on random array
const randomArrayT0 = performance.now();

const sortedRandomArray = bubbleSort(randomArray);

const randomArrayT1 = performance.now();
console.log(`Array length: ${randomArray.length}. Time of working in milliseconds: ${(randomArrayT1 - randomArrayT0).toFixed(2)}`);
console.log(sortedRandomArray)

// bubble sort on sorted array
const sortedArrayT0 = performance.now();

const sortedOfSortedArray = bubbleSort(sortedArray);

const sortedArrayT1 = performance.now();
console.log(`Array length: ${sortedArray.length}. Time of working in milliseconds: ${(sortedArrayT1 - sortedArrayT0).toFixed(2)}`);
console.log(sortedOfSortedArray)

