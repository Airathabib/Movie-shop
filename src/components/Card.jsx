import Button from "./Button"

// eslint-disable-next-line react/prop-types
const Card = ({ src, title, cost, setQuantity, setTotalSumm, quantity, totalSumm }) => {

	const addToCart = () => {
		setQuantity(quantity + 1)
		setTotalSumm(totalSumm + cost)
	}
	const deletToCart = () => {
		setQuantity(quantity - 1)
		setTotalSumm(totalSumm - cost)
	}

	return (
		<div className="flex flex-col gap-2 bg-slate-50 p-2 rounded shadow-my-shadow">
			<img src={src} alt='Poster' className="rounded w-80 h-[30rem]" />
			<h3 className="text-4xl text-zinc-800 font-semibold text-center">{title}</h3>
			<span className="text-center  text-zinc-800 text-2xl">{cost}&#8381;</span>
			<div className="flex items-center justify-between">
				<Button onClick={addToCart} text={'Купить'} />
				{quantity === 0
				? <span className=" bg-blue-700 p-1 rounded text-slate-50">Корзина пуста</span>
				: <Button  onClick={deletToCart} text={'Удалить'} />
				}
	
			</div>
		</div>
	)
}

export default Card
