import React, { Component} from 'react';
import PegCircle from './pegs/PegCircle';
import PegSquare from './pegs/PegSquare';
import PegTriangle from './pegs/PegTriangle';

class PegPanel extends Component {
	render() {
		return (
			<div style={styles.panelStyle}>
				<PegCircle />
				<PegTriangle />
				<PegSquare />
			</div>
		);
	}
}
const styles = {
	panelStyle: {
		height: 300,
		width: 800,
		backgroundColor: '#d3d3d3',
		borderRadius: 20,
		border: "10px solid black",
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		margin: 'auto',
		marginTop: 40
	}
};


export default PegPanel;