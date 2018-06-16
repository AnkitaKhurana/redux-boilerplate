import {fetch , fetch2} from './types';

export const fetchNow = () =>(dispatch)=>{

	// Thunk helps here (asyn calls)
	// dispatch is like [resolve of Promise/Payload], when you want to send data  
		fetch('http://localhost:4000')
		.then(res => res.json())
		.then(data => dispatch({
			type : fetch,	
			result :data.meta.provided_by
		}));
	

}