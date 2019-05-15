import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
// import Hello from './components/Hello';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { EnthusiasmAction } from './actions/index';
import { enthusiasm } from './reducer/index';
import { StoreState } from './types/index';
import { Provider } from 'react-redux';
import Hello from './components/Hello';
const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm, {
	enthusiaimLevel: 1,
	name: 'TypeScript'
});
ReactDOM.render(
	<Provider store={store}>
		<Hello />
	</Provider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
