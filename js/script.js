var selectedRow = null;

function onFormSubmit(){
	if(validate()){
	var formData = readData();

	if(selectedRow == null)
		insert(formData);
	else{
		update(formData);
		selectedRow = null;
	}
	resetForm();
	}
}

function readData(){
	var formData = {};
	formData["roll"] = document.getElementById("roll").value;
	formData["name"] = document.getElementById("name").value;
	formData["gender"] = document.getElementById("gender").value;
	formData["std"] = document.getElementById("std").value;
	formData["dob"] = document.getElementById("dob").value;
	return formData;
}

function insert(data){
	var table = document.getElementById("studentlist").getElementsByTagName('tbody')[0];
	var newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.roll;

	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.name;
	
	cell3 = newRow.insertCell(2);
	cell3.innerHTML = data.gender;
	
	cell4 = newRow.insertCell(3);
	cell4.innerHTML = data.std;
	
	cell5 = newRow.insertCell(4);
	cell5.innerHTML = data.dob;
	
	cell6 = newRow.insertCell(5);
	cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
						<a onClick="onDelete(this)">Delete</a>`;


}

function resetForm(){
	document.getElementById("roll").value = "";
	document.getElementById("name").value = "";
	document.getElementById("std").value = "";
	document.getElementById("dob").value = "";
}

function onEdit(td){
	selectedRow = td.parentElement.parentElement;
	document.getElementById("roll").value = selectedRow.cells[0].innerHTML;
	document.getElementById("name").value = selectedRow.cells[1].innerHTML;
	document.getElementById("gender").value = selectedRow.cells[2].innerHTML;
	document.getElementById("std").value = selectedRow.cells[3].innerHTML;
	document.getElementById("dob").value = selectedRow.cells[4].innerHTML;
}

function onDelete(td){
	if(confirm('Do you want to delete this record?')){
	row = td.parentElement.parentElement;
	document.getElementById("studentlist").deleteRow(row.rowIndex);
	resetForm();
	}
}

function update(formData){
	selectedRow.cells[0].innerHTML = formData.roll;
	selectedRow.cells[1].innerHTML = formData.name;
	selectedRow.cells[2].innerHTML = formData.gender;
	selectedRow.cells[3].innerHTML = formData.std;
	selectedRow.cells[4].innerHTML = formData.dob;
}

function validate(){
	isValid = true;

		if (document.getElementById("roll").value == "") {
        	isValid1 = false;
        	document.getElementById("RollValidationError").classList.remove("hide");
    	} else {
        	isValid1 = true;
        	if (!document.getElementById("RollValidationError").classList.contains("hide"))
            	document.getElementById("RollValidationError").classList.add("hide");
   		}

		if (document.getElementById("name").value == "") {
        	isValid2 = false;
        	document.getElementById("NameValidationError").classList.remove("hide");
    	} else {
        	isValid2 = true;
        	if (!document.getElementById("NameValidationError").classList.contains("hide"))
            	document.getElementById("NameValidationError").classList.add("hide");
   		}

   		if (document.getElementById("std").value == "") {
        	isValid3 = false;
        	document.getElementById("StandardValidationError").classList.remove("hide");
    	} else {
        	isValid3 = true;
        	if (!document.getElementById("StandardValidationError").classList.contains("hide"))
            	document.getElementById("StandardValidationError").classList.add("hide");
   		}


		var pattern = /^[0-9]{6}$/;
		var alphaExp = /^[a-zA-Z][a-zA-Z\s]*$/ ;
		var standardpattern = /(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/;

		x=document.forms["StudentForm"]["roll"].value;
			if(x.match(pattern)){
				isValid4 = true;
			if(!document.getElementById("RollValidationError").classList.contains("hide"))
				document.getElementById("RollValidationError").classList.add("hide");
				
		} else{
			isValid4 = false;
			document.getElementById("RollValidationError").classList.remove("hide");
		}

		y=document.forms["StudentForm"]["name"].value;
			if(y.match(alphaExp)){
				isValid5 = true;
			if(!document.getElementById("NameValidationError").classList.contains("hide"))
				document.getElementById("NameValidationError").classList.add("hide");
			
		} else{
			isValid5 = false;
			document.getElementById("NameValidationError").classList.remove("hide");	
		}

		z=document.forms["StudentForm"]["std"].value.toUpperCase();
			if(z.match(standardpattern)){
				isValid6 = true;
			if(!document.getElementById("StandardValidationError").classList.contains("hide"))
				document.getElementById("StandardValidationError").classList.add("hide");
				
		} else{
			isValid6 = false;
			document.getElementById("StandardValidationError").classList.remove("hide");
		}

	return(isValid1 && isValid2 && isValid3 && isValid4 && isValid5 && isValid6);
}
