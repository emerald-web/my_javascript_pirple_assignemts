// SWITCH STATEMENTS ASSIGNENT:

function timeAdder(adder) {
	let label;
	switch(adder) {
	  case 1:
	    label = [5,"seconds"];
	    break;
	  case 2:
	    label = [10,"minutes"];
	    break;
	  default:
	    label = "Out of Scope";
	    break;
	}
	console.log(label);
}
timeAdder(2);
timeAdder(1);
timeAdder(15);



// EXTRA CREDIT


function largeLabel(theyCalled) {
	let label_2;
	switch(theyCalled) {
	  case 3:
		label_2 = [20,"hours"];
		break;
	  case 4:
		label_2 = [1,"day"];
		break;
	  default:
	    label_2 = "Nobody Called";
	    break;
	}
	console.log(label_2);
}
largeLabel(3);
largeLabel(4);
largeLabel(100);

// GOOD DAY PIRPLE.COM THANK FOR THIS GREAT OPPUTUNITY.... AND I WANT TO ALSO USE THIS MEDIUM TO THANK MY WONDERFUL TEACHER (MR.CHRIS).