import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import SearchBar from "../Search/SearchBar";

const Home = () => {
	return (
		<>
			<section className="hero is-info">
				<div className="hero-body">
					<div className="container">
						<h1 className="title">Employee Directory</h1>
						<h2 className="subtitle"></h2>
					</div>
				</div>
			</section>
			<div className="is-12" style={{ height: "40px" }}></div>

			<SearchBar />
		</>
	);
};

export default Home;
