import React, { Component} from 'react';
import HoleTriangle from './holes/HoleTriangle';
import HoleSquare from './holes/HoleSquare';
import HoleCircle from './holes/HoleCircle';

class HolePanel extends Component {
	render() {
		return (
			<div style={styles.panelStyle}>
					<HoleTriangle />
					<HoleCircle />
					<HoleSquare />
			</div>
		);
	}
}
const styles = {
	panelStyle: {
		height: 300,
		width: 800,
		backgroundColor: 'saddlebrown',
		borderRadius: 20,
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		margin: 'auto'
	}
}

export default HolePanel;

