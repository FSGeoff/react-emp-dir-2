import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "../Table/Table";

const SearchBar = () => {
	const [employeesState, setEmployeesState] = useState({ employees: [] });
	const [searchInput, setSearchInput] = useState("");
	useEffect(() => {
		axios("https://randomuser.me/api/?results=50")
			.then((response) => {
				console.log(response.data.results);
				setEmployeesState({ employees: [...response.data.results] });
				console.log(response.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const searchEmployee = (input) => {
		const filteredEmployees = employeesState.employees.filter(
			(employee) => {
				return (
					employee.name.first
						.toLowerCase()
						.indexOf(input.toLowerCase()) !== -1
				);
			}
		);
		console.log(filteredEmployees);
		return filteredEmployees;
	};

	return (
		<div>
			<input
				class="input"
				type="text"
				onChange={(event) => setSearchInput(event.target.value)}
				value={searchInput}
				placeholder="Text input"
			/>
			<Table employees={searchEmployee(searchInput)} />
		</div>
	);
};

export default SearchBar;
