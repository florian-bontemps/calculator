import '../App.css';
const numberKeys = [
	{ id: '9', class: 'number', value: '9' },
	{ id: '8', class: 'number', value: '8' },
	{ id: '7', class: 'number', value: '7' },
	{ id: '6', class: 'number', value: '6' },
	{ id: '5', class: 'number', value: '5' },
	{ id: '4', class: 'number', value: '4' },
	{ id: '3', class: 'number', value: '3' },
	{ id: '2', class: 'number', value: '2' },
	{ id: '1', class: 'number', value: '1' },
	{ id: 'dot', class: 'number', value: '.' },
	{ id: '0', class: 'number', value: '0' },
];


function AmazingNumberButton({ onClick }) {
	return (
		<div className="keyboard">
			{numberKeys.map(key => (
				<button
					className="btn"
					id={key.id}
					key={key.id}
				>
					{key.value}
				</button>
			))}
		</div>
	);
}


export default AmazingNumberButton;