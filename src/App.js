import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
		const NUMS = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];

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

		return (
			<div className={styles.app}>
				<div className={styles.calculator}>
					<div className={`${styles.output} ${isResult ? styles.result : ''}`}>{value}</div>
					<div className={styles.keys}>
						<button className={`${styles.key} ${styles.clear}`} onClick={handleClear}>C</button>
						{NUMS.map((num) => <button className={ styles.key } key={num}
												   onClick={() => handleNumClick(num)}>{num}</button>)}
						<button className={`${styles.key} ${styles.operator}`} onClick={() => handleOperatorClick('+')}>+</button>
						<button className={`${styles.key} ${styles.operator}`} onClick={() => handleOperatorClick('-')}>-</button>
						<button className={`${styles.key} ${styles.enter}`} onClick={handleResult}>=</button>
					</div>
				</div>
			</div>
		);
	}
;
