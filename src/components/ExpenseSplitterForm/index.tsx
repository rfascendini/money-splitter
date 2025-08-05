import { useState } from 'react';
import { Input } from '../Input';
import { generateId } from '../../utils';

type ParticipantType = { id: number; name: string; moneyAmount: number };

export function ExpenseSplitterForm() {
	const [participants, setParticipants] = useState<ParticipantType[]>([{ id: generateId(), name: '', moneyAmount: 0 }]);

	function handleAddNewParticipant(participant: ParticipantType) {
		setParticipants(prev => [...prev, { ...participant }]);
	}

	function handleChange(e: React.ChangeEvent<HTMLInputElement>, participant: ParticipantType) {
		const newValue = parseFloat(e.target.value);
		setParticipants(prev => prev.map(p => (p.id === participant.id ? { ...p, moneyAmount: isNaN(newValue) ? 0 : newValue } : p)));
	}

	// TODO: Implement the logic to calculate the total amount and handle form submission
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		let totalAmount = 0;

		participants.forEach(participant => {
			totalAmount += participant.moneyAmount;
		});

		console.log(totalAmount);
	}

	return (
		<form onSubmit={handleSubmit}>
			{participants.map(participant => (
				<div key={participant.id}>
					<Input placeholder="Name" />

					<Input placeholder="Amount" value={participant.moneyAmount} onChange={e => handleChange(e, participant)} />
				</div>
			))}

			<button type="button" onClick={() => handleAddNewParticipant({ id: generateId(), moneyAmount: 0, name: '' })}>
				Add participant
			</button>

			<button type="submit">Calculate</button>
		</form>
	);
}
