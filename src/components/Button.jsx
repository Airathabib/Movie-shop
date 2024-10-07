

const Button = ({onClick, text}) => {
	
	return (
		<button
		onClick={onClick}
		 className='w-20 h-8 
		flex items-center 
		justify-center
		 bg-blue-700
		  text-white rounded-lg
			 hover:bg-slate-400
			  hover:text-blue-700
				transition-all
				'>{text}</button>
	)
}

export default Button
