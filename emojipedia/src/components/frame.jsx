import React from "react";
// import emojipedia from "../emojipedia";

function Frame(props) {
	return (
		<dl>
			<div className="inside">
				<dt>
					<span className="emoji">{props.emoji}</span>
					<span className="name">{props.name}</span>
				</dt>
				<dd className="meaning">"{props.meaning}"</dd>
			</div>
		</dl>
	);
}

export default Frame;
