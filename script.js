'use strict';

var search = () => {
    let range = document.getElementById("range").value;
    console.log(`--- Range: ${range} ---`);
    let key = document.getElementById("key").value;
    console.log(`--- Key: ${key} ---`);

    if (range > 1000000) {
    	document.getElementById("output").innerHTML = "Only values from 1 to 1,000,000!";
    }
    /*		NOT WORKING! WHY THE FUCK!?
    else if (key > range) {
    	 document.getElementById("output").innerHTML = "The search key cannot be greater than the value range!";
    }*/
    else {
	    document.getElementById("output").innerHTML = "";
	    binarySearch(range, key);
	    fullSearch(range, key);
    }

}

var binarySearch = (list, target) => {

	var array = [];

	for (let i = 1; i <= list; i++) {
		array.push(i);
	}

	var first = 0;
	var last = array.length-1;
	var middle = Math.floor((first + last) / 2);
	var peeks = 0;
	var output = "";
	console.log(array);


	if (array[middle] == target) {
		peeks++;
	}
	while (array[middle] != target && first <= last) {
		if (target < array[middle]) {
			last = middle-1;
			peeks++;
		}
		else if (target > array[middle]) {
			first = middle+1;
			peeks++;
		}
		middle = Math.floor((last + first) / 2);
	}

	if (peeks == 1) {
	output += `BINARY SEARCH: Target ${target} was found from the index ${middle} after only ${peeks} entry!!`;
	console.log(`BINARY SEARCH: Target ${target} was found from the index ${middle} after only ${peeks} entry!!`);
	}
	else {
	output += `BINARY SEARCH: Target ${target} was found from the index ${middle} after ${peeks} entries!`;
	console.log(`BINARY SEARCH: Target ${target} was found from the index ${middle} after ${peeks} entries!`);
	}
	document.getElementById("output").innerHTML += output;

	return array[middle];
}

var fullSearch = (list, target) => {

	var array = [];
	var peeks = 0;
	var i;
	var resultIndex = 0;
	var output = "";

	for (i = 1; i <= list; i++) {
		array.push(i);
	}

	for (let j = 0; j < array.length; j++) {
		peeks++;
		if (array[j] == target) {
			resultIndex = j;
			break;
		}
	}

	output += `<br ><br >FULL SEARCH: Target ${target} was found from the index ${resultIndex} after ${peeks} entries!`;
	document.getElementById("output").innerHTML += output;
}

