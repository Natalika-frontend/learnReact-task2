import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
		const [operand1, setOperand1] = useState('');
		const [operand2, setOperand2] = useState('');
		const [operator, setOperator] = useState('');
		const [value, setValue] = useState('');
		const [isResult, setIsResult] = useState(false);

		const handleNumClick = (num) => {
			if (isResult) {
				setOperand1(num);
				setOperand2('');
				setOperator('');
				setValue(num);
				setIsResult(false);
			} else {
				if (!operator) {
					setOperand1((prevOperand) => prevOperand + num);
					setValue((prevValue) => prevValue + num);
				} else {
					setOperand2((prevOperand) => prevOperand + num);
					setValue((prevValue) => prevValue + num);
				}
			}
		};

		const handleOperatorClick = (operator) => {
			if (operand1 && !operand2) {
				setOperator(operator);
				setValue((prevValue) => prevValue + `${operator}`);
				setIsResult(false);
			}
		};

		const handleClear = () => {
			setOperand1('');
			setOperand2('');
			setOperator('');
			setValue('');
			setIsResult(false);
		};

		const handleResult = () => {
			if (operand1 && operator && operand2) {
				let result;
				if (operator === '+') {
					result = (Number(operand1) + Number(operand2)).toString();
				} else {
					result = (Number(operand1) - Number(operand2)).toString();
				}
				setValue(`${result}`);
				setOperand1(`${result}`);
				setIsResult(true);

			}
			setOperand2('');
			setOperator('');
		};

	const buttonsData = [
		{ text: '7', handler: handleNumClick, style: styles.key },
		{ text: '8', handler: handleNumClick, style: styles.key },
		{ text: '9', handler: handleNumClick, style: styles.key },
		{ text: '4', handler: handleNumClick, style: styles.key },
		{ text: '5', handler: handleNumClick, style: styles.key },
		{ text: '6', handler: handleNumClick, style: styles.key },
		{ text: '1', handler: handleNumClick, style: styles.key },
		{ text: '2', handler: handleNumClick, style: styles.key },
		{ text: '3', handler: handleNumClick, style: styles.key },
		{ text: '0', handler: handleNumClick, style: styles.key },
		{ text: 'C', handler: handleClear, style: styles.clear },
		{ text: '+', handler: handleOperatorClick, style: styles.operator },
		{ text: '-', handler: handleOperatorClick, style: styles.operator },
		{ text: '=', handler: handleResult, style: styles.enter },
	];

	return (
			<div className={styles.app}>
				<div className={styles.calculator}>
					<div className={`${styles.output} ${isResult ? styles.result : ''}`}>{value}</div>
					<div className={styles.keys}>
						{buttonsData.map((button) => (
							<button
								key={button.text}
								className={`${styles.key} ${button.style}`}
								onClick={() => button.handler(button.text)}
							>
								{button.text}
							</button>
						))}
					</div>
				</div>
			</div>
		);
	}
;
