// Evaluate all actions in Reducers

import { fetch1 , fetch2 } from '../actions/types';

const initialState = {
	items : [],
	item : {}
}

export default function (state = initialState, action){
	switch (action.type){
		case fetch1 : 
			console.log('Reducer Dispatched')
			return {
			...state, 
			items :action.result
		}
		default : return state;
	}
}