import { CSSProperties } from 'react'

import ClipLoader from 'react-spinners/ClipLoader'

const override: CSSProperties = {
	display: 'block',
	margin: '0 auto',
}

export default function Spinner() {
	return (
		<ClipLoader
			color={'red'}
			loading={true}
			size={120}
			cssOverride={override}
			aria-label='Loading Spinner'
			data-testid='loader'
		/>
	)
}
