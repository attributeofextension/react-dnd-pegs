import React, {Component} from 'react';
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend';

import HolePanel from './components/HolePanel';
import PegPanel from './components/PegPanel';



class App extends Component {
	render() {

		return (
			<div>
				<HolePanel />
				<PegPanel />
			</div>
		);
	}
}

export default DragDropContext(HTML5Backend)(App);