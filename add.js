const Input = document.querySelector(".input");
const Date = document.querySelector(".date-input");
const Button = document.querySelector(".new-list-item");
const List = document.querySelector(".item-list");
const Priority = document.querySelector(".priority-input");

Button.addEventListener('click', addItem);
List.addEventListener('click', editItem);

function editItem(event){
	const item = event.target;
	//if delete button was clicked, remove list item
	if((item.classList[0] === "delete-item") && (confirm("Are you sure?") == true)){
		
			const x = item.parentElement;
			x.remove();
		
		
	//if complete button was clicked, mark list item as completed
	}else if(item.classList[0] === "complete-item"){
		const x = item.parentElement;
		x.classList.toggle("completed");
		
	}
}

function addItem(event){
	
	event.preventDefault();
	//make sure input isnt empty
	if (Input.value.length == 0){ 
         alert("You have not entered an item");  	       
    }else{  	

		const Div = document.createElement('div');
		Div.classList.add("todo");
		//list item
		const listItem = document.createElement('li');
		listItem.innerText = Input.value;
		listItem.classList.add('list-item');
		Div.appendChild(listItem);
		
		const priorityValue = Priority.value;
		if(priorityValue === 'high'){
			listItem.classList.add('high-priority');
		}else if(priorityValue === 'low'){
			listItem.classList.add('low-priority');
		}else if(priorityValue === 'normal'){
			listItem.classList.add('normal-priority');
		}
		//date
		const listDate = document.createElement('p');
		listDate.innerText =  Date.value;
		listDate.classList.add('list-item-date');
		Div.appendChild(listDate);
		
		
		//completed button
		const completedButton = document.createElement('button');
		completedButton.innerHTML = '&#10003;';
		completedButton.classList.add("complete-item");
		Div.appendChild(completedButton);
		//delete button
		const deleteButton = document.createElement('button');
		deleteButton.innerHTML = '&#x2715';
		deleteButton.classList.add("delete-item");
		Div.appendChild(deleteButton);
		List.appendChild(Div);
		Input.value = "";
	}
}


