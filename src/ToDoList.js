import { useState } from "react";

function ToDoList() {
	const [list, setList] = useState([
		"Add first item to list",
		"Then add second item to list",
		"Delete all the useless items",
	]);

	const [newItem, addNewItem] = useState("");

	const handleText = (e) => {
		addNewItem(e.target.value);
	};

	function handleOnSubmit(event) {
		event.preventDefault();
		console.log("item", newItem);
		setList([...list, newItem]);
	}

	return (
		<>
			<ul>
				{list.map((item, index) => (
					<li key={index}>
						<p>{item}</p>
					</li>
				))}
			</ul>
			<form onSubmit={handleOnSubmit}>
				<input
					onChange={handleText}
					type="onSubmit"
					name="newItem"
					placeholder="Please enter a new to do item"
					value={newItem}
				></input>
				<button>Add Item to List</button>
			</form>
		</>
	);
}

export default ToDoList;
