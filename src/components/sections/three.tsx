import React from 'react'
import { Container } from '../shared/container'
import '../styles/three.css'

export const Three = () => {
	return (
		<Container>
			<div className='container'>
				<section data-bgcolor='#bcb8ad' data-textcolor='#032f35'>
					<div>
						<h1 data-scroll data-scroll-speed='1'>
							<span>Horizontal</span> <span>scroll</span> <span>section</span>
						</h1>
						<p data-scroll data-scroll-speed='2' data-scroll-delay='0.2'>
							With Motion One
						</p>
					</div>
				</section>

				<section id='sectionPin'>
					<div className='pin-wrap'>
						<h2>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</h2>
						<img
							src='https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900'
							alt=''
						/>
						<img
							src='https://images.pexels.com/photos/3371358/pexels-photo-3371358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900'
							alt=''
						/>
						<img
							src='https://images.pexels.com/photos/3618545/pexels-photo-3618545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900'
							alt=''
						/>
					</div>
				</section>
				<section data-bgcolor='#e3857a' data-textcolor='#f1dba7'>
					<img
						src='https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
						alt=''
					/>
					<h2 data-scroll data-scroll-speed='1' className='credit'>
						Created by{' '}
						<a
							href='https://twitter.com/bramus'
							target='_top'
							rel='noreferrer noopener'
						>
							Bramus
						</a>
						.<br />
						<br />
						Design and content by{' '}
						<a
							href='https://codepen.io/cameronknight/pen/qBNvrRQ'
							target='_top'
						>
							Cameron Knight
						</a>
						.
					</h2>
				</section>
			</div>
		</Container>
	)
}
