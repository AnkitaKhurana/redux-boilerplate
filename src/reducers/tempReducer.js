// Evaluate all actions in Reducers

import { fetch , fetch2 } from '../actions/temp';

const initialState = {
	items : [],
	item : {}
}

export default function (state = initialState, action){
	switch (action.type){
		default : return state;
	}
}