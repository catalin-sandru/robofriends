import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	// if(true) {
	// 	throw new Error('Noooo');
	// }

	const cardComponent = robots.map((user, i) => {
		return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} key={robots[i].id} />
	})
  return (
		<div>
			{cardComponent}
		</div>
  )
}

export default CardList;