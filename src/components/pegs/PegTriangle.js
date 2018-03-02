import React, { Component} from 'react';
import { DragSource } from 'react-dnd';

import { shapes } from '../types';

class PegTriangle extends Component {	
	render() {
		const { connectDragSource } = this.props;
		return connectDragSource(
			<div style={styles.triangle} />
		);
	}
}


const styles = {
	triangle: {
		width: 0,
		height: 0,
		borderLeft: '100px solid transparent',
		borderRight: '100px solid transparent',
		borderBottom: '200px solid purple',
		cursor: 'move'
	}
}
const pegSource = {
	beginDrag(props,monitor,component) { 
		return {};
	}
}
const collect = (connect,monitor) => {
	return {
		connectDragSource: connect.dragSource()
	}
}

export default DragSource(shapes.TRIANGLE, pegSource, collect)(PegTriangle);