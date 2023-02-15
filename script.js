function minCostOfRopes(event){
	event.preventDefault();
	
	// first get the input
	var input = document.querySelector('input[type="text"]').value;
	// use de-limitor to add them into an array
	var arr = input.split(",");
	// then sort the array first
	// then go ahead and run an iterative logic
	var cost = 0;
	while(arr.length > 1){
		arr.sort(function (a,b){ return a-b});
		var res = Number(arr[0]) + Number(arr[1]);
		cost += res;
		arr.push(res);
		arr.shift();
		arr.shift();
	}
	var result = document.getElementById('result');
	result.textContent = cost;
}


