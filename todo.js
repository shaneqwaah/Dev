



var button = document.getElementById('subButton');


button.addEventListener('click', function(){
	// var i = 0;
	var task = document.getElementById('task_detail').value;
	var error = document.getElementById('errormessage');
	var listButton = document.createElement('button');
	listButton.innerHTML = "Delete";
	listButton.setAttribute('class','delB btn btn-sm btn-danger pull-right');
	listButton.setAttribute('id','delB');
	listButton.setAttribute('type','button');
	var list = document.createElement('LI');

	list.setAttribute('class','alert alert-success');
	var listText = document.createTextNode(task);
	// var allList = document.getElementById('list');
	if(task == ''){
		error.innerHTML = 'Type something';
	}else{
		error.innerHTML = "";
		list.appendChild(listText);
		list.appendChild(listButton);
		// i++;
		document.getElementById('list').appendChild(list);
	}

	

});


document.getElementsByClassName('delB')[0].addEventListener('click', function(){
	alert('Hello');
});
