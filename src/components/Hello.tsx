import * as React from 'react';
import * as actions from '../actions';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
export interface Props {
	name?: string;
	enthusiaimLevel?: number;
	onIncrement?: () => void;
	onDecrement?: () => void;
}

export interface State {
	currentEnthusiasm: number;
}
// function Hello({ name, enthusiaimLevel = 1, onIncrement, onDecrement }: Props) {
// 	if (enthusiaimLevel <= 0) {
// 		throw new Error('You could be a little more enthusiastic. :D');
// 	}
// 	return (
// 		<div className="hello">
// 			<div className="greeting">Hello {name + getExclamationMarks(enthusiaimLevel)}</div>
// 			<div>
// 				<button onClick={onDecrement}>-</button>
// 				<button onClick={onIncrement}>+</button>
// 			</div>
// 		</div>
// 	);
// }
class Hello extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			currentEnthusiasm: props.enthusiaimLevel || 1
		};
	}
	updateEnthusiasm(currentEnthusiasm: number) {
		this.setState({
			currentEnthusiasm
		});
	}
	render() {
		const { name } = this.props;
		return (
			<div className="Hellon">
				<div className="greeting">Hello {name + getExclamationMarks(this.props.enthusiaimLevel || 0)}</div>
				<button onClick={this.props.onDecrement}>-</button>
				<button onClick={this.props.onIncrement}>+</button>
			</div>
		);
	}
}
/**
 * 
 * @param numChars 等级
 */
function getExclamationMarks(numChars: number) {
	return Array(numChars + 1).join('!');
}
 function mapStateToProps({ enthusiaimLevel, name }: StoreState) {
	return {
		enthusiaimLevel,
		name
	};
}

 function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
	return {
		onIncrement: () => dispatch(actions.incrementEnthusiasm()),
		onDecrement: () => dispatch(actions.decrementEnthusiasm())
	};
}
export default connect(mapStateToProps,mapDispatchToProps)(Hello);
