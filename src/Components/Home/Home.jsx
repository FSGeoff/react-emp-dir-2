import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
	const [employees, setEmployees] = useState([]);
	useEffect(() => {
		axios("https://randomuser.me/api/")
			.then((response) => {
				console.log(response.data.results);
				setEmployees(response.data.results);
				console.log(response.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<section className="hero is-info">
				<div className="hero-body">
					<div className="container">
						<h1 className="title">Employee Directory</h1>
						<h2 className="subtitle">
							<input
								class="input"
								type="text"
								placeholder="Text input"
							/>
						</h2>
					</div>
				</div>
			</section>
			<div className="is-12" style={{ height: "40px" }}></div>

			<div className="columns">
				<div className="column"></div>
				<div
					className="column"
					style={{
						textAlign: "center",
						fontSize: "24px",
						fontFamily: "Georgia, serif",
						fontWeight: "bolder",
					}}
				>
					Name
				</div>
				<div
					className="column"
					style={{
						textAlign: "center",
						fontSize: "24px",
						fontFamily: "Georgia, serif",
						fontWeight: "bolder",
					}}
				>
					Age
				</div>
				<div
					className="column"
					style={{
						textAlign: "center",
						fontSize: "24px",
						fontFamily: "Georgia, serif",
						fontWeight: "bolder",
					}}
				>
					Phone
				</div>
				<div
					className="column"
					style={{
						textAlign: "center",
						fontSize: "24px",
						fontFamily: "Georgia, serif",
						fontWeight: "bolder",
					}}
				>
					Country
				</div>
			</div>

			<div className="container">
				{employees.map((employee) => (
					<div
						className="columns"
						style={{ outline: "solid 1px #1F85DE" }}
					>
						<div
							className="column"
							style={{ outline: "solid 1px #1F85DE" }}
						>
							{" "}
							<img
								alt={employee.name.first}
								src={employee.picture.medium}
							></img>
						</div>
						<div
							className="column"
							style={{
								outline: "solid 1px #1F85DE",
								textAlign: "center",
							}}
						>
							{employee.name.first} {employee.name.last}
						</div>
						<div
							className="column"
							style={{
								outline: "solid 1px #1F85DE",
								textAlign: "center",
							}}
						>
							{employee.dob.age}
						</div>
						<div
							className="column"
							style={{
								outline: "solid 1px #1F85DE",
								textAlign: "center",
							}}
						>
							{employee.phone}
						</div>
						<div
							className="column"
							style={{
								outline: "solid 1px #1F85DE",
								textAlign: "center",
							}}
						>
							{employee.location.country}
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Home;
