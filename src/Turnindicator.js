import React from "react";

export class Turnindicator extends React.Component {
	render() {
		return <h3 id="turnindicator"><span id="turnindicatornumber">{(this.props.turn === 1)?"X":"O"}</span>'s turn</h3>
	}
} 