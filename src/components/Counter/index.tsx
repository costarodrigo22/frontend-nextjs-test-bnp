import { useState, useEffect } from 'react';

type CounterProps = {
	initialCount: number;
};

export const Counter: React.FC<CounterProps> = ({ initialCount }) => {
	const [count, setCount] = useState(initialCount);

	useEffect(() => {
		console.log('Componente montado!');

		const event = new CustomEvent('onCounterMount');

		return () => {
			console.log('Componente desmontado!');
			document.dispatchEvent(event);
		};
	}, []);

	useEffect(() => {
		console.log('Componente atualizado!');
	});

	const handleIncrement = () => {
		setCount((prevCount) => prevCount + 1);
	};

	return (
		<div>
			<h2>Contador: {count}</h2>
			<button onClick={handleIncrement}>Incrementar +</button>
		</div>
	);
};
