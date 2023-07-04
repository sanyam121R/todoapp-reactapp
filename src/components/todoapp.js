import React, { useState } from "react";
import "../css/todo.css";

const Todoapp = () => {
	const [inputData, setInputData] = useState("");
	const [items, setItems] = useState([]);

	const addItm = () => {
		if (!inputData) {
		} else {
			setItems([...items, inputData])
			setInputData('')
		}
	};

	const delItm = (id) => {
		const updateItem = items.filter((elm, ind) => {
			return ind !== id;
		});

		setItems(updateItem)
	}

	return (
		<>

			<div className="main-div">
				<header className="app-header">
					<h1 >TODO APP</h1>
				</header>

				<section className="app-content">
					<div className="add-items">
						<input
							type="text"
							placeholder="Add items..."
							value={inputData}
							onChange={(e) => setInputData(e.target.value)}
						/>
						<button className="add-btn" onClick={addItm}>
							+
						</button>
					</div>

					<div className="items">
						{
							items.map((elm, indx) => {
								return (
									<div className="eachItem" key={indx}>
										<h4 style={{ display: "inline" }}> {elm} </h4>
										<button className="add-btn" onClick={() => delItm(indx)}>-</button>
									</div>
								)
							})
						}
					</div>
				</section>
			</div>
		</>
	);
};

export default Todoapp;
