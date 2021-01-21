import React from 'react';
import ListItems from "../ListItems/ListItems";


const Table = ({employees}) => {
    return (

        <div>
           <div className="columns">
				<div className="column"></div>
				<div className="column" id="bio">
					Name
				</div>
				<div className="column" id="bio">
					Age
				</div>
				<div className="column" id="bio">
					Phone
				</div>
				<div className="column" id="bio">
					Country
				</div>
			</div> 
            <ListItems employees={employees}/>
        </div>
    );
};

export default Table;