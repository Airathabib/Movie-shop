
import { useState } from 'react';
import Header from './components/Header'
import Card from './components/Card';
import { data } from './data/data';


function App() {
	const [totalSumm, setTotalSumm] = useState(0)
	const [quantity, setQuantity] = useState(0)


	return (
		<div className='p-10 flex flex-col gap-4'>
			<Header 
			totalSumm={totalSumm}
			quantity={quantity}	
			/>
			<div className='flex gap-8 flex-row items-center  justify-center'>
				{data.map((movie) => {
					return (
						<Card
							key={movie.id}
							src={movie.url}
							title={movie.title}
							cost={movie.cost}
							setQuantity={setQuantity}
							setTotalSumm={setTotalSumm}
							quantity={quantity}
							totalSumm={totalSumm}
							
								/>
					)

				})}
			</div>


		</div>

	)
}

export default App
