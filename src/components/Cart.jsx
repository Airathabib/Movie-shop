import cart from '../assets/icons/cart.svg'

const Cart = ({totalSumm, quantity}) => {
	return (
		<div className='flex flex-col pr-28'>
			<div className='flex gap-2 items-center'>
				<span className='text-2xl font-medium text-slate-100'>Корзина</span>
				<img src={cart} alt='Корзина' className='w-8 h-8' />
			</div>

			<div >
				<div className=' text-slate-100'>Товаров в корзине: { quantity }</div>
				<div className=' text-slate-100'>Общая сумма: { totalSumm }</div>
			</div>
		</div>
	)
}

export default Cart
