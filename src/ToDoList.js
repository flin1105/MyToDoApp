import { useState } from "react";

function ToDoList() {
	const [list, setList] = useState([
		"Add first item to list",
		"Then add second item to list",
		"Delete all the useless items",
	]);

	return (
		<ul>
			{list.map((item, index) => (
				<li key={index}>
					<p>{item}</p>
				</li>
			))}
		</ul>
	);
}

export default ToDoList;
