import '../App.css';

function MagnificientEqualButton({ onClick }) {
	return (
		<div className="keyboard">
				<button
					className="btn"
					id="sum"
					value="="
				>
					=
				</button>
		</div>
	);
}

export default MagnificientEqualButton;