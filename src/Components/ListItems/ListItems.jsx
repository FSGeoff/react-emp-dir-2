import React from "react";

const ListItems = ({ employees }) => {
	return (
		<div className="container">
			{employees.map((employee, index) => (
				<div className="columns" id="outer" key={index}>
					<div className="column" id="outer">
						{" "}
						<img
							alt={employee.name.first}
							src={employee.picture.medium}
						></img>
					</div>
					<div className="column" id="box">
						{employee.name.first} {employee.name.last}
					</div>
					<div className="column" id="box">
						{employee.dob.age}
					</div>
					<div className="column" id="box">
						{employee.phone}
					</div>
					<div className="column" id="box">
						{employee.location.country}
					</div>
				</div>
			))}
		</div>
	);
};

export default ListItems;
