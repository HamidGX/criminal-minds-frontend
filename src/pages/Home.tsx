import { useState, useEffect } from 'react'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Logo from '@/components/Logo'
import Spinner from '@/components/Spinner'

import { Quotes } from '@/lib/types/quotes'

export default function Home() {
	const [responseData, setResponseData] = useState<Quotes>()
	// const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	const fetchData = async () => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_BACKEND_URL}/api/quotes/random`
			)

			const responseData = await response.json()
			setResponseData(responseData[0])
			setLoading(true)
		} catch (error) {
			// if (error instanceof Error) setError(error.message)
			if (error instanceof Error) console.error(error.message)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	// console.log(responseData)

	return (
		<div>
			<Logo />
			{loading ? (
				<Card className='mb-[20px] h-[400px] '>
					<CardHeader>
						<CardTitle className='text-base sm:text-sm md:text-sm lg:text-lg'>
							<h2>Season: {responseData && responseData.season}</h2>
							<h2>Episode: {responseData && responseData.episode} </h2>
							<h1>Chapter Name: {responseData && responseData.title}</h1>
						</CardTitle>
					</CardHeader>
					<CardContent className='text-2xl sm:text-2xl md:text-4xl lg:text-4xl'>
						{responseData && responseData.quotes[0].quote}
					</CardContent>
					<CardContent className='text-xl sm:text-xl md:text-2xl lg:text-2xl'>
						- {responseData && responseData.quotes[0].character}
					</CardContent>
				</Card>
			) : (
				<CardTitle className='text-lg h-[400px]'>
					<div className='p-[100px]'>
						<Spinner />
					</div>
				</CardTitle>
			)}
			<Button
				className='text-white bg-[#912718] hover:bg-red-700'
				onClick={() => fetchData()}
			>
				Generate New Quote
			</Button>
		</div>
	)
}
