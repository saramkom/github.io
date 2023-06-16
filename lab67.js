let myClasses = [{
    subject: "BIOL",
    num: 355,
    title: "Evolution",
    
  },
  {
    subject: "EOS",
    num: 427,
    title: "Geophysics",
    
  },
  {
    subject: "MATH",
    num: 451,
    title: "Probability",
   
  },
  {
    subject: "PHIL",
    num: 371,
    title: "Logic",
    
  }
];

/* PART 2 */
function addCourse() {
	/* fix so that newCourse is course object with the */
  /* same format as the example courses provided */
  /* for you above in the courses array */
	let newCourse = { subject: "CSC",
    num: 464,
    title: "Concurrency" };
  
  
  
	/* newCourse should now be a valid course object */
  /* I made the function 'addToArray' below that */
  /* automatically add the course you create in */
  /* this function to the table displaying all of */
  /* the courses (that you worked on in Part 1) */
	addToArray(newCourse);
}


/* Part 3 */
function addCourse2() {

	/* fix so that newCourse is a course created based on */
	/* the values entered into the input boxes in the HTML */
	 let newCourse = {
        subject: document.getElementById('s_input').value,
        num: document.getElementById('n_input').value,
        title: document.getElementById('t_input').value
    };

	
  
	/* newCourse should now be a valid course object */
	addToArray(newCourse);
}


/* create a for-loop here to visit each item in the array */
/* add the course subject and number to the classes variable */
/* the line below is an example of the syntax used to add */
/* course information to the classes variable. Erase the */
/* line below and add only courses found in the courses array */
//classes += "CSC 130 ";

function allClasses() {
	let classes = "Classes: ";
	
	/* this for loop visits all items in the array: */
	for (let i = 0; i < myClasses.length; i++) {
		
		let course = myClasses[i];
		/* and adds each courses subject and numbers */
		/* to the end of the classes variable */
		classes += course.subject + course.num + " ";
	}
	
	/* and then updates the HTML with this information */
	$("#allClasses").html(classes);
}

function seniorYearClasses() {
	let senior = "4th year or higher Classes: ";
	let fourthYear = ""; // Variable to store fourth-year courses

	for (let i = 0; i < myClasses.length; i++) {
		let course = myClasses[i];

		// Check if the course is fourth year or higher
		if (course.num >= 400) {
			fourthYear += course.subject + course.num + " ";
		}
  }

	// Update the HTML content with the fourth-year courses
	$("#fourth").html(senior + fourthYear);


}

function mathClasses() {
	let mathClassesString = "Math Classes: ";
	let mathCourse = "";

	for (let i = 0; i < myClasses.length; i++) {
		let course = myClasses[i];
    
			if (course.subject === "MATH") {
			mathCourse += course.subject + course.num + " ";
		}
	}

	mathClassesString += mathCourse;
	$("#math").html(mathClassesString);
}


function addToArray(newCourse) {
  if (newCourse.subject.length > 1) {
    newCourse.subject = newCourse.subject.toUpperCase();
    myClasses.push(newCourse);
    let newRow = "<tr id=\"part3\">";
    newRow += "<td>" + newCourse.subject + "</td>";
    newRow += "<td>" + newCourse.num + "</td>";
    newRow += "<td>" + newCourse.title + "</td></tr>";
    document.getElementById("courseTable").innerHTML += newRow;
  } else {
    alert("invalid course entered");
  }
}
