import React, { useState, useEffect } from "react";
import Dropdown from "./Food";
import "../style.css";
import { FaSearch } from "react-icons/fa";

const ID = "5e22e0c6";
const KEY = "1db71215eb7c87738e274b53f2c836d0";

function Main() {
	const [foods, setFoods] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("");

	useEffect(() => {
		handleFood();
	}, [query]);

	const handleFood = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${KEY}&from=0&to=10`
		);

		const data = await response.json();
		setFoods(data.hits);
	};

	const searchUpdate = (e) => {
		setSearch(e.target.value);
	};

	const getQuery = (e) => {
		e.preventDefault();
		setQuery(search);
	};

	return (
		<div className="container">
			<h1>How many calories does it have?</h1>

			<form onSubmit={getQuery}>
				<input
					className="input"
					type="text"
					value={search}
					onChange={searchUpdate}
					placeholder="e.g soup"
				/>
				<button className="btn" type="submit">
					<FaSearch />
				</button>
			</form>
			{foods.map((food) => (
				<Dropdown
					img={food.recipe.image}
					title={food.recipe.label}
					calories={food.recipe.calories}
					key={food.recipe.image}
				/>
			))}
		</div>
	);
}

export { Main };
