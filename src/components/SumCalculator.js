import React, { useEffect, useState } from 'react'

const SumCalculator = () => {
	const [sum, setSum] = useState(0)
	useEffect(() => {
		console.log(sum)
	}, [sum])
	return (
		<div>
			<h1>Sum Calculator</h1>
			<input
				type="number"
				onChange={(e) => setSum( pre => (pre + (Number(e.target.value))))}
			/>
			<p>Sum: {sum}</p>
		</div>
	)
}

export default SumCalculator
