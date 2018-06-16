// Evaluate all actions in Reducers

import { fetch , fetch2 } from '../actions/types';

const initialState = {
	items : [],
	item : {}
}

export default function (state = initialState, action){
	switch (action.type){
		case fetch : return {
			...state, 
			items :action.result
		}
		default : return state;
	}
}