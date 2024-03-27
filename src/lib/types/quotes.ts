export interface Quotes {
	_id: string
	season: number
	episode: number
	title: string
	quotes: Quote[]
}

export interface Quote {
	character: string
	quote: string
}
