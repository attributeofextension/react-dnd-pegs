import React, { Component} from 'react';
import { DropTarget } from 'react-dnd';
import { shapes } from '../types';

class HoleTriangle extends Component {
	constructor(props) {
		super(props);
		this.state = { fill: false, count: 0 };
	}
	increment() {
		this.setState({ count: this.state.count + 1 });
	}
	render() {
		const { connectDropTarget, isOver, canDrop } = this.props;
		const style = canDrop&&isOver ? styles.triangleFill : styles.triangle;

		return connectDropTarget(
			<div style={style}>
				<h1 style={styles.counterStyle}>{this.state.count}</h1>
			</div>
		);
	}
}
const styles = {
	triangle: {
		width: 0,
		height: 0,
		borderLeft: '100px solid transparent',
		borderRight: '100px solid transparent',
		borderBottom: '200px solid white',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItem : 'center'
	},
	triangleFill: {
		width: 0,
		height: 0,
		borderLeft: '100px solid transparent',
		borderRight: '100px solid transparent',
		borderBottom: '200px solid purple',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItem : 'center'
	},
	triangleDanger: {
		width: 0,
		height: 0,
		borderLeft: '100px solid transparent',
		borderRight: '100px solid transparent',
		borderBottom: '200px solid red',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItem : 'center'
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
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop()
	};
}

export default DropTarget(shapes.TRIANGLE,holeTarget,collect)(HoleTriangle);