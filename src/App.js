import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import Message from './components/Message'

class App extends Component {
	render() {
		// find two users' names
		let userNames = [];
		chatMessages.forEach( (mes) => {
			if (!userNames.includes(mes.sender)) {
				userNames.push(mes.sender);
			}
		});

		//  find user's type
		let userTypes = {};
		userTypes[userNames[0]] = 'local';
		userTypes[userNames[1]] = 'remote';
    console.log(userTypes);

		const chatData = chatMessages.map( (chat, index) => {
			return <Message
				key={ index }
				sender={ chat.sender }
				body={ chat.body }
				time={ chat.time }
				type={ userTypes[chat.sender]}
				/>
		})

		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">QQ聊天室 >>>>> { userNames[0] } & { userNames[1] }</h1>
				</header>
				<main className="App-main">
					{ chatData }
				</main>
			</div>
		);
	}
}

export default App;
