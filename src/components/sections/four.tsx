import React from 'react'
import '../styles/four.css'



// Polyfill for browsers with no Scroll-Timeline support
// We load a specific version that polyfills the old version of the spec (which uses @scroll-timeline)
// because that is how our CSS is written
import 'https://rawcdn.githack.com/flackr/scroll-timeline/3063e156535f3ab1ffc8a4000ffdd3290232c121/dist/scroll-timeline.js'

// Fallback for browsers that don't support CSS ScrollTimeline
// We polyfill:
// - Browsers that support the newest version of the spec
// - Browsers that don’t support any version of the spec
if (
	CSS.supports('animation-timeline: scroll()') ||
	!CSS.supports('animation-timeline: foo')
) {
	// Replace warning box with info box
	document.querySelector('.warning').style.display = 'none'
	document.querySelector('.info').style.display = 'block'

	// As we're about to shift content out of .columns, we need it to hide its overflow
	let column = document.querySelector('.columns').style.overflowY = 'hidden'

	// Set up timeline
	const timeline = new ScrollTimeline({
		scrollSource: document.documentElement,
		timeRange: 1,
		fill: 'both',
	})

	// Loop all eligible columns
	document.querySelectorAll('.column-reverse').forEach($column => {
		// Flip item order in reverse columns
		$column.style.flexDirection = 'column-reverse'

		// Hook Animation
		$column.animate(
			{
				transform: [
					'translateY(calc(-100% + 100vh))',
					'translateY(calc(100% - 100vh))',
				],
			},
			{
				duration: 1,
				fill: 'both',
				timeline,
			}
		)
	})
}

export const Four = () => {
	return (
		<>
			<div className='columns' data-scroll-container=''>
				<div className='column column-reverse'>
					<figure className='column__item'>
						<div className='column__item-imgwrap'>
							<img
								src='https://tympanus.net/Development/ColumnScroll/1.04213a58.jpg'
								alt=''
								title=''
								height=''
								width=''
							/>
						</div>
						<figcaption className='column__item-caption'>
							{' '}
							<span>Cyber Blue</span> <span>2011</span>{' '}
						</figcaption>
					</figure>
					<figure className='column__item'>
						<div className='column__item-imgwrap'>
							<img
								src='https://tympanus.net/Development/ColumnScroll/2.3ff1fdb6.jpg'
								alt=''
								title=''
								height=''
								width=''
							/>
						</div>
						<figcaption className='column__item-caption'>
							{' '}
							<span>Gnostic Will</span> <span>2012</span>{' '}
						</figcaption>
					</figure>
					<figure className='column__item'>
						<div className='column__item-imgwrap'>
							<img
								src='https://tympanus.net/Development/ColumnScroll/3.b606be87.jpg'
								alt=''
								title=''
								height=''
								width=''
							/>
						</div>
						<figcaption className='column__item-caption'>
							{' '}
							<span>French Kiss</span> <span>2013</span>{' '}
						</figcaption>
					</figure>
					<figure className='column__item'>
						<div className='column__item-imgwrap'>
							<img
								src='https://tympanus.net/Development/ColumnScroll/4.24fd614c.jpg'
								alt=''
								title=''
								height=''
								width=''
							/>
						</div>
						<figcaption className='column__item-caption'>
							{' '}
							<span>Half Life</span> <span>2014</span>{' '}
						</figcaption>
					</figure>
					<figure className='column__item'>
						<div className='column__item-imgwrap'>
							<img
								src='https://tympanus.net/Development/ColumnScroll/5.d13f5e61.jpg'
								alt=''
								title=''
								height=''
								width=''
							/>
						</div>
						<figcaption className='column__item-caption'>
							{' '}
							<span>Love Boat</span> <span>2015</span>{' '}
						</figcaption>
					</figure>
					<figure className='column__item'>
						<div className='column__item-imgwrap'>
							<img
								src='https://tympanus.net/Development/ColumnScroll/6.786c7db4.jpg'
								alt=''
								title=''
								height=''
								width=''
							/>
						</div>
						<figcaption className='column__item-caption'>
							{' '}
							<span>Golden Ray</span> <span>2016</span>{' '}
						</figcaption>
					</figure>
					<figure className='column__item'>
						<div className='column__item-imgwrap'>
							<img
								src='https://tympanus.net/Development/ColumnScroll/7.df95fe5c.jpg'
								alt=''
								title=''
								height=''
								width=''
							/>
						</div>
						<figcaption className='column__item-caption'>
							{' '}
							<span>Blame Game</span> <span>2017</span>{' '}
						</figcaption>
					</figure>
					<figure className='column__item'>
						<div className='column__item-imgwrap'>
							<img
								src='https://tympanus.net/Development/ColumnScroll/8.e7faf38e.jpg'
								alt=''
								title=''
								height=''
								width=''
							/>
						</div>
						<figcaption className='column__item-caption'>
							{' '}
							<span>Lone Dust</span> <span>2018</span>{' '}
						</figcaption>
					</figure>
				</div>
				<div className='column'>
					<figure className='column__item'>
						<div className='column__item-imgwrap'>
							<img
								src='https://tympanus.net/Development/ColumnScroll/9.ea63bab4.jpg'
								alt=''
								title=''
								height=''
								width=''
							/>
						</div>
						<figcaption className='column__item-caption'>
							{' '}
							<span>Lucky Wood</span> <span>2019</span>{' '}
						</figcaption>
					</figure>
					<figure className='column__item'>
						<div className='column__item-imgwrap'>
							<img
								src='https://tympanus.net/Development/ColumnScroll/10.57de09c7.jpg'
								alt=''
								title=''
								height=''
								width=''
							/>
						</div>
						<figcaption className='column__item-caption'>
							{' '}
							<span>Good Earth</span> <span>2020</span>{' '}
						</figcaption>
					</figure>
					<figure className='column__item'>
						<div className='column__item-imgwrap'>
							<img
								src='https://tympanus.net/Development/ColumnScroll/11.ba790930.jpg'
								alt=''
								title=''
								height=''
								width=''
							/>
						</div>
						<figcaption className='column__item-caption'>
							{' '}
							<span>Empty Words</span> <span>2021</span>{' '}
						</figcaption>
					</figure>
					<figure className='column__item'>
						<div className='column__item-imgwrap'>
							<img
								src='https://tympanus.net/Development/ColumnScroll/12.c3a8d893.jpg'
								alt=''
								title=''
								height=''
								width=''
							/>
						</div>
						<figcaption className='column__item-caption'>
							{' '}
							<span>Nonage Line</span> <span>2009</span>{' '}
						</figcaption>
					</figure>
					<figure className='column__item'>
						<div className='column__item-imgwrap'>
							<img
								src='https://tympanus.net/Development/ColumnScroll/13.3bd52250.jpg'
								alt=''
								title=''
								height=''
								width=''
							/>
						</div>
						<figcaption className='column__item-caption'>
							{' '}
							<span>Blue Hell</span> <span>2010</span>{' '}
						</figcaption>
					</figure>
					<figure className='column__item'>
						<div className='column__item-imgwrap'>
							<img
								src='https://tympanus.net/Development/ColumnScroll/14.b7263516.jpg'
								alt=''
								title=''
								height=''
								width=''
							/>
						</div>
						<figcaption className='column__item-caption'>
							{' '}
							<span>Cold Blood</span> <span>2011</span>{' '}
						</figcaption>
					</figure>
					<figure className='column__item'>
						<div className='column__item-imgwrap'>
							<img
								src='https://tympanus.net/Development/ColumnScroll/15.55bda21b.jpg'
								alt=''
								title=''
								height=''
								width=''
							/>
						</div>
						<figcaption className='column__item-caption'>
							{' '}
							<span>Tulip Heat</span> <span>2012</span>{' '}
						</figcaption>
					</figure>
					<figure className='column__item'>
						<div className='column__item-imgwrap'>
							<img
								src='https://tympanus.net/Development/ColumnScroll/16.eb88393b.jpg'
								alt=''
								title=''
								height=''
								width=''
							/>
						</div>
						<figcaption className='column__item-caption'>
							{' '}
							<span>Red Wrath</span> <span>2013</span>{' '}
						</figcaption>
					</figure>
				</div>
				<div className='column column-reverse'>
					<figure className='column__item'>
						<div className='column__item-imgwrap'>
							<img
								src='https://tympanus.net/Development/ColumnScroll/17.3450839a.jpg'
								alt=''
								title=''
								height=''
								width=''
							/>
						</div>
						<figcaption className='column__item-caption'>
							{' '}
							<span>Bold Human</span> <span>2014</span>{' '}
						</figcaption>
					</figure>
					<figure className='column__item'>
						<div className='column__item-imgwrap'>
							<img
								src='https://tympanus.net/Development/ColumnScroll/18.763d23f6.jpg'
								alt=''
								title=''
								height=''
								width=''
							/>
						</div>
						<figcaption className='column__item-caption'>
							{' '}
							<span>Loyal Royal</span> <span>2015</span>{' '}
						</figcaption>
					</figure>
					<figure className='column__item'>
						<div className='column__item-imgwrap'>
							<img
								src='https://tympanus.net/Development/ColumnScroll/19.be25549f.jpg'
								alt=''
								title=''
								height=''
								width=''
							/>
						</div>
						<figcaption className='column__item-caption'>
							{' '}
							<span>Lone Cone</span> <span>2016</span>{' '}
						</figcaption>
					</figure>
					<figure className='column__item'>
						<div className='column__item-imgwrap'>
							<img
								src='https://tympanus.net/Development/ColumnScroll/20.d7a9356b.jpg'
								alt=''
								title=''
								height=''
								width=''
							/>
						</div>
						<figcaption className='column__item-caption'>
							{' '}
							<span>Dutch Green</span> <span>2017</span>{' '}
						</figcaption>
					</figure>
					<figure className='column__item'>
						<div className='column__item-imgwrap'>
							<img
								src='https://tympanus.net/Development/ColumnScroll/21.4c8813a5.jpg'
								alt=''
								title=''
								height=''
								width=''
							/>
						</div>
						<figcaption className='column__item-caption'>
							{' '}
							<span>Valley Hill</span> <span>2018</span>{' '}
						</figcaption>
					</figure>
					<figure className='column__item'>
						<div className='column__item-imgwrap'>
							<img
								src='https://tympanus.net/Development/ColumnScroll/22.ec97ea6e.jpg'
								alt=''
								title=''
								height=''
								width=''
							/>
						</div>
						<figcaption className='column__item-caption'>
							{' '}
							<span>Kale Hale</span> <span>2019</span>{' '}
						</figcaption>
					</figure>
					<figure className='column__item'>
						<div className='column__item-imgwrap'>
							<img
								src='https://tympanus.net/Development/ColumnScroll/23.49e8893a.jpg'
								alt=''
								title=''
								height=''
								width=''
							/>
						</div>
						<figcaption className='column__item-caption'>
							{' '}
							<span>Fake Cake</span> <span>2020</span>{' '}
						</figcaption>
					</figure>
					<figure className='column__item'>
						<div className='column__item-imgwrap'>
							<img
								src='https://tympanus.net/Development/ColumnScroll/24.057dafba.jpg'
								alt=''
								title=''
								height=''
								width=''
							/>
						</div>
						<figcaption className='column__item-caption'>
							{' '}
							<span>Book Belly</span> <span>2021</span>{' '}
						</figcaption>
					</figure>
				</div>
			</div>
			<div className='notfinal'>
				⚠️ This is not the end result but a partial implementation, for
				demonstration purposes.
			</div>
		</>
	)
}
