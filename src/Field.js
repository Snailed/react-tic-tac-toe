import React from "react";

export class Field extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(e) {
		
		this.props.changeGameState(this.props.x, this.props.y);
	}
	render() {
		let crossed = "";
		if (this.props.value === 1) {
			crossed = "X";
		} else if (this.props.value === 2) {
			crossed = "O";
		}
		return (<div className="field" onClick={this.handleClick}>{crossed}</div>);
	}
}