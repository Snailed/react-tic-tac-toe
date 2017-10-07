import React from "react";
import { Field } from "./Field";
import { Turnindicator } from "./Turnindicator";
export class GameContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gamestate: [[0,0,0], [0,0,0], [0,0,0]],
			turn: 1
		}
		this.changeGameState = this.changeGameState.bind(this);
		this.checkIfWon = this.checkIfWon.bind(this);
	}
	changeGameState(x,y) {
		if (this.state.gamestate[y][x] === 0) {
			let newState = this.state.gamestate;
			newState[y][x] = this.state.turn;
			this.setState({
				gamestate: newState,
				turn: ((this.state.turn) === 1 ? 2 : 1)
			})
		}
	}
	checkIfWon() {
		//Check if vertical row won
		for (var y = 0; y < 3; y++) {
			if ((this.state.gamestate[y][0] !== 0) && this.state.gamestate[y][0] === this.state.gamestate[y][1] && this.state.gamestate[y][0] === this.state.gamestate[y][2]) {
				this.gameEnd(this.state.gamestate[y][0]);
			}
		}
		//Check if horizontal row won
		for (var x = 0; x < 3; x++) {
			if ((this.state.gamestate[0][x] !== 0) && this.state.gamestate[0][x] === this.state.gamestate[1][x] && this.state.gamestate[0][x] === this.state.gamestate[2][x]) {
				this.gameEnd(this.state.gamestate[0][x]);
			}
		}
		//Check if diagonal rows won
		if((this.state.gamestate[0][0] !== 0) && this.state.gamestate[0][0] === this.state.gamestate[1][1] && this.state.gamestate[0][0] === this.state.gamestate[2][2]) {
			this.gameEnd(this.state.gamestate[0][0]);
		}
		if((this.state.gamestate[0][2] !== 0) && this.state.gamestate[0][2] === this.state.gamestate[1][1] && this.state.gamestate[0][2] === this.state.gamestate[2][0]) {
			this.gameEnd(this.state.gamestate[0][0]);
		}
		
	}
	gameEnd(winner) {
		alert("Der er en som har vundet!");
	}
	componentDidUpdate(prevProps, prevState) {
		this.checkIfWon();	
	}
	render() {
		
		return (<div>
			<h1>Tic Tac Doe!</h1>
			<div className="outerContainer">
				<div className="containerRow" id="0">
					<Field changeGameState={this.changeGameState} x={0} y={0} value={this.state.gamestate[0][0]} />
					<Field changeGameState={this.changeGameState} x={1} y={0} value={this.state.gamestate[0][1]} />
					<Field changeGameState={this.changeGameState} x={2} y={0} value={this.state.gamestate[0][2]} />
				</div>
				<div className="containerRow" id="1">
					<Field changeGameState={this.changeGameState} x={0} y={1} value={this.state.gamestate[1][0]} />
					<Field changeGameState={this.changeGameState} x={1} y={1} value={this.state.gamestate[1][1]} />
					<Field changeGameState={this.changeGameState} x={2} y={1} value={this.state.gamestate[1][2]} />
				</div>
				<div className="containerRow" id="2">
					<Field changeGameState={this.changeGameState} x={0} y={2} value={this.state.gamestate[2][0]} />
					<Field changeGameState={this.changeGameState} x={1} y={2} value={this.state.gamestate[2][1]} />
					<Field changeGameState={this.changeGameState} x={2} y={2} value={this.state.gamestate[2][2]} />
				</div>
			</div>
			<Turnindicator turn={this.state.turn}/>

		</div>);
	}
}