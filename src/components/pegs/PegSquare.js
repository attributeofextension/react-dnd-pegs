import React, { Component} from 'react';
import { DragSource } from 'react-dnd';

import { shapes } from '../types';

class PegSquare extends Component {	
	render() {
		const { connectDragSource } = this.props;

		return connectDragSource(
			<div style={styles.square} />
		);
	}
}


const styles = {
	square: {
		width: 200,
		height: 200,
		backgroundColor: 'yellow',
		cursor: 'move'
	}
}

const pegSource = {
	beginDrag(props,monitor,component) {
		return {};
	}
};

const collect = (connect,monitor) => {
	return {
		connectDragSource: connect.dragSource()
	};
}

export default DragSource(shapes.SQUARE,pegSource,collect)(PegSquare);