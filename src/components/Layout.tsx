import { Outlet } from 'react-router-dom'

export default function Layout() {
	return (
		<main className='container mx-auto mt-5 md:mt-20 p-[10px] md:flex md:justify-center'>
			<div className='md:w-2/3 lg:w-5/5 lg:h-5/5 '>
				<Outlet />
			</div>
		</main>
	)
}
