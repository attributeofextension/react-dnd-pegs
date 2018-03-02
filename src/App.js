import React, {Component} from 'react';
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend';

import HolePanel from './components/HolePanel';
import PegPanel from './components/PegPanel';
import Signature from './components/Signature';


class App extends Component {
	render() {

		return (
			<div>
				<HolePanel />
				<PegPanel />
				<Signature 
					name="Leah Carr" 
					portfolioLink="https://attributeofextension.github.io/"
					githubLink="https://github.com/attributeofextension/react-dnd-pegs/"
				/>
			</div>
		);
	}
}

export default DragDropContext(HTML5Backend)(App);