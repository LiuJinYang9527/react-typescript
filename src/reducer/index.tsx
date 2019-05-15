import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

export function enthusiasm(
	state: StoreState,
	action: EnthusiasmAction
): StoreState {
	switch (action.type) {

    case INCREMENT_ENTHUSIASM:
			return { ...state, enthusiaimLevel: state.enthusiaimLevel + 1 };
		case DECREMENT_ENTHUSIASM:
			return { ...state, enthusiaimLevel: Math.max(1, state.enthusiaimLevel - 1) };
	}
	return state;
}
