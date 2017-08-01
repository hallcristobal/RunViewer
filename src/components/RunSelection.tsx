import * as React from "react";

class Run {
	runCategory: string;
	runTime: string;
}

class Game {
	runs: Run[];
	image: string; // Temporary just a path to my local images
	gameName: string;
}

export interface SelectionState {
	games: Game[]
};

export class RunSelection extends React.Component<undefined, SelectionState> {

	constructor(props: undefined) {
		super(props);
		this.state = {
			games: []
		}

		this.loadMockData();
	}

	loadMockData() {
		var games: Game[] = [];

		let game = new Game();
		game.runs = [];
		game.gameName = "The Legend of Zelda: The Wind Waker";
		game.image = "./img/tww.png";
		let run = new Run();
		run.runCategory = "Any% (Tuner)";
		run.runTime = "4:30:45";
		game.runs.push(run);
		run = new Run();
		run.runCategory = "Any% (Tuner)";
		run.runTime = "4:35:19";
		game.runs.push(run);
		run = new Run();
		run.runCategory = "Any% (Tuner)";
		run.runTime = "4:36:59";
		game.runs.push(run);
		run = new Run();
		run.runCategory = "Master Sword (Tuner)";
		run.runTime = "1:38:29";
		game.runs.push(run);
		run = new Run();
		run.runCategory = "Din's Pearl (Tuner)";
		run.runTime = "49:38";
		game.runs.push(run);
		run = new Run();
		run.runCategory = "Bug Limit (No Tuner)";
		run.runTime = "6:01:51";
		game.runs.push(run);
		games.push(game);


		this.state = {
			...this.state,
			games: games
		};
	}

	render() {

		var runs = this.state.games.map((value: Game, index: number) => {
			let runs = value.runs.map((value: Run, index: number) => {
				return (
					<li key={index}>
						<div id="category-name">{value.runCategory}</div>
						<div id="run-time">{value.runTime}</div>
					</li>
				)
			});

			return (
				<div id="game" style={{ width: "100%" }} key={index}>
					<div id="game-image"><img src={value.image} /></div>
					<div id="game-title">{value.gameName}</div>
					<div id="run-list">
						<ul>
							{runs}
						</ul>
					</div>
				</div>
			)
		});

		return (
			<div>
				<header>
					<div className="title-bar">
						<div id="drag-bar"></div>
						<div id="buttons">
							<div id="minimize" onMouseDown={(event) => { event.preventDefault(); }}>
								<span>-</span>
							</div>
							<div id="maximize" onMouseDown={(event) => { event.preventDefault(); }}>
								<span>+</span>
							</div>
							<div id="close" onMouseDown={(event) => { event.preventDefault(); }}>
								<span>&times;</span>
							</div>
						</div>
					</div>
					<ul id="navigation">
						<li><a className="current-page" href="#">Runs</a></li>
						<li><a href="#">Games</a></li>
						<li><a href="#">Races</a></li>
						<li><a href="#">Community</a></li>
						<li><a href="#">Profile</a></li>
					</ul>
					<div id="profile-picture">
						<img src="./img/iris.jpg" />
					</div>
				</header>
				<div className="parent">
					<div className="games-list">{runs}</div>
					<a className="new-run-button" href="#">
						<div>
							<img src="./img/plus.png" />
							<div>New Run</div>
						</div>
					</a>
				</div>
			</div>
		)
	}
}
