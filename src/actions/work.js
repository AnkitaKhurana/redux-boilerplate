import {fetch1 , fetch2} from './types';

export const fetchNow = () => dispatch =>{
	console.log('fetching');
	fetch('http://localhost:4000')
		.then(res => res.json())
		.then(data => dispatch({
			type : fetch1,	
			result :data.meta.provided_by
		}));
}

/*
export function fetchNow(){
		return function(dispatch){
	// Thunk helps here (asyn calls)
	// dispatch is like [resolve of Promise/Payload], when you want to send data  
		fetch('http://localhost:4000')
		.then(res => res.json())
		.then(data => //console.log(data.meta.provided_by))
			dispatch({
			type : fetch,	
			result :data.meta.provided_by
		}));
	}
}
*/