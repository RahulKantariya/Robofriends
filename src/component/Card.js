import React from 'react';


const Card=({name,email,id})=>
{
	return(
			<div className='tc bg-light-green dib br2 pa1 ma2 grow bw1 shadow-3'>
				<img alt ="img"src={`https://robohash.org/${id}?50x50`}/>
				<div>
				<h2>{name}</h2>
				<p>{email}</p>
				</div>
			</div>
		);
}

export default Card;