import React, { Component} from 'react';
import { DropTarget } from 'react-dnd';
import { shapes } from '../types';

class HoleSquare extends Component {
	constructor(props) {
		super(props);
		this.state = { fill: false, count: 0 };

	}
	increment() {
		this.setState({ count: this.state.count + 1});
	}
	render() {
		const { connectDropTarget, canDrop, isOver } = this.props;
		const style = canDrop&&isOver ? styles.squareFill : styles.square;
		return connectDropTarget(
			<div style={style}>
				<h1 style={styles.counterStyle}>{this.state.count}</h1>
			</div>
		);
	}
}
const styles = {
	square: {
		width: 200,
		height: 200,
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItem: 'center'
	},
	squareFill: {
		width: 200,
		height: 200,
		backgroundColor: 'yellow',
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
}
const collect = (connect,monitor) => {
	return {
		connectDropTarget: connect.dropTarget(),
		canDrop: monitor.canDrop(),
		isOver: monitor.isOver()
	};
}


export default DropTarget(shapes.SQUARE,holeTarget,collect)(HoleSquare);