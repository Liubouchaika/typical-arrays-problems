
exports.min = function min (array) {
	if(array == false || array == undefined) {
		return 0;
	} else {
		let min = array[0];
		for (let i = 1; i < array.length; i++) {
			if (min > array[i]) {
				min = array[i];
			};
		};
		return min;
	}
}

exports.max = function max (array) {
  if(array == false || array == undefined) {
		return 0;
	} else {
		let max = array[0];
		for (let i = 1; i < array.length; i++) {
			if (max < array[i]) {
				max = array[i];
			};
		};
		return max;	
	}
}

exports.avg = function avg (array) {
	if(array == false || array == undefined) {
		return 0;
	} else {
		let result = array.reduce((sum, current) => sum + current, 0);
		let avg = result / array.length;
		return avg;
	}
}
