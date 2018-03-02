import React, { Component} from 'react';
import { DragSource } from 'react-dnd';

import { shapes } from '../types';

class PegCircle extends Component {	
	render() {
		const { connectDragSource } = this.props;
		
		return connectDragSource(
			<div style={styles.circle} />
		);
	}
}
const styles = {
	circle: {
		width: 200,
		height: 200,
		borderRadius: '50%',
		backgroundColor: 'blue',
		cursor: 'move'
	}
}

const pegSource = {
	beginDrag(props,monitor, component ) {
		return {};
	}
}
const collect = (connect, monitor) => {
	return {
		connectDragSource: connect.dragSource()
	}
}

export default DragSource(shapes.CIRCLE,pegSource,collect)(PegCircle);