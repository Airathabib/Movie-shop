
import Cart from './Cart'

const Header = ({ totalSumm, quantity}) => {

	return (
		<div className='flex  items-center h-[7rem] background: bg-inherit'>
			<h1 className='mx-auto text-7xl text-amber-500 text-center font-medium'>Movies</h1>
			<Cart 
			totalSumm={ totalSumm }
			quantity={quantity}
			/>
		</div>
	)
}

export default Header
