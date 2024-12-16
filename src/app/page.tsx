import { First } from '@/components/sections/first'
import { Four } from '@/components/sections/four'
import { Second } from '@/components/sections/second'
import { Three } from '@/components/sections/three'

export default function Home() {
	return (
		<div className=''>
			<First />
			<Second />
			{/* <Three /> */}
      <Four/>
		</div>
	)
}
