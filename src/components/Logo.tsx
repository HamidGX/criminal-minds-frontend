import logo from '@/assets/logo.png'

export default function Logo() {
	return (
		<img
			src={logo}
			alt='logo'
			className='sm:w-[500px] sm:h-[200px] mx-auto my-[20px]'
		/>
	)
}
