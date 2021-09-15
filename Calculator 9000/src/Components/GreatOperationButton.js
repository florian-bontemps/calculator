import '../App.css';

const signKeys = [
	{ id: 'plus', class: 'operation', value: '+' },
	{ id: 'minus', class: 'operation', value: '-' },
	{ id: 'multiply', class: 'operation', value: '*' },
	{ id: 'divide', class: 'operation', value: '/' }
];

function GreatOperationButton({ onClick }) {
	return (
		<div className="keyboard">
			{signKeys.map(key => (
				<button
					className="operator"
					id={key.id}
					key={key.id}
                  >
					{key.value}
				</button>
			))}
		</div>
	);
}

export default GreatOperationButton;