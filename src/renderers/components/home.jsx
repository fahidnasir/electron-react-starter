import React from 'react';
import {shell} from 'electron';
import EmojiWall from './emoji-wall';

const TITLEBAR_HEIGHT = 30;

export default class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			message: 'Hello React Sample App',
			welcome: true
		};
	}

	openGithub() {
		shell.openExternal('https://github.com/fahidnasir/templates-electron-react');
	}

	handleClick() {
		this.setState({
			welcome: false
		});
	}

	render() {
		let img;

		if(this.state.welcome) {
			img = <img src="../../../public/img/electron.svg" alt="" width="128px" height="128px" ref="mainImg" />
		} else {
			img = <EmojiWall />
		}

		return (
			<div className="main" onClick={this.handleClick.bind(this)} ref="main" style={{
				paddingTop: TITLEBAR_HEIGHT
			}}>
				<h1>{this.state.message}</h1>

				{img}

				<footer>
					<p>
						Find on <a href="#" onClick={this.openGithub.bind(this)}>Github</a>
					</p>
				</footer>
			</div>
		);
	}
}
