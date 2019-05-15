//通过container connect测试并不会实时更新视图
import Hello from '../components/Hello';
import * as actions from '../actions';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
export function mapStateToProps({ enthusiaimLevel, name }: StoreState) {
	return {
		enthusiaimLevel,
		name
	};
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
	return {
		onIncrement: () => dispatch(actions.incrementEnthusiasm()),
		onDecrement: () => dispatch(actions.decrementEnthusiasm())
	};
}
export default connect(mapDispatchToProps, mapDispatchToProps)(Hello);
