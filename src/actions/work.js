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
