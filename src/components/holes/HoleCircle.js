import React, { Component} from 'react';
import { DropTarget } from 'react-dnd';
import { shapes } from '../types';

class HoleCircle extends Component {
	constructor(props) {
		super(props);
		this.state = { fill: false, count: 0 };

	}
	increment() {
		this.setState({ count: this.state.count + 1 });
	}
	render() {
		const { connectDropTarget, isOver, canDrop } = this.props;
		
		const style = isOver&&canDrop ? styles.circleFill : styles.circle;
		

		return connectDropTarget(
			<div style={style}>
				<h1 style={styles.counterStyle}>{this.state.count}</h1>
			</div>
		);
	}
}
const styles = {
	circle: {
		width: 200,
		height: 200,
		borderRadius: '50%',
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItem: 'center'
	},
	circleFill: {
		width: 200,
		height: 200,
		borderRadius: '50%',
		backgroundColor: 'blue',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItem: 'center'
	},
	counterStyle: {
		fontSize: 100
	}
};
const holeTarget = {
	drop(props,monitor,component) {
		component.increment();
	}
};
const collect = (connect,monitor) => {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop()
	}
}


export default DropTarget(shapes.CIRCLE,holeTarget,collect)(HoleCircle);