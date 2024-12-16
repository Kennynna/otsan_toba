import React from 'react'
import { Container } from '../shared/container'
import '../styles/second.css'
export const Second = () => {
	return (
		<Container className='h-[400vh]'>
			<main>
				<ul id='cards'>
					<li className='card' id='card_1'>
						<div className='card__content'>
							<div>
								<h2>Aroma Top Line</h2>
								<p>
									Aroma Top Line – серия ароматов LUXURY, автомобильных
									ароматизаторов класса «премиум», достойных сопровождать вас в
									путешествиях и повседневной жизни. Наш продукт отличается от
									десятков других целым перечнем преимуществ, характерных только
									для него
								</p>
								<p>
									<a href='#top' className='btn btn--accent'>
										Read more
									</a>
								</p>
							</div>
							<figure>
								<img
									src='/1.png'
									alt='Image description'
								/>
							</figure>
						</div>
					</li>
					<li className='card' id='card_2'>
						<div className='card__content'>
							<div>
								<h2>Sportinia</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
								<p>
									<a href='#top' className='btn btn--accent'>
										Read more
									</a>
								</p>
							</div>
							<figure>
								<img
									src='https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg'
									alt='Image description'
								/>
							</figure>
						</div>
					</li>
					<li className='card' id='card_3'>
						<div className='card__content'>
							<div>
								<h2>Aroma Wood</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
								<p>
									<a href='#top' className='btn btn--accent'>
										Read more
									</a>
								</p>
							</div>
							<figure>
								<img
									src='https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-3.jpg'
									alt='Image description'
								/>
							</figure>
						</div>
					</li>
					<li className='card' id='card_4'>
						<div className='card__content'>
							<div>
								<h2>PopCorn</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
								<p>
									<a href='#top' className='btn btn--accent'>
										Read more
									</a>
								</p>
							</div>
							<figure>
								<img
									src='https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg'
									alt='Image description'
								/>
							</figure>
						</div>
					</li>
				</ul>
			</main>
		</Container>
	)
}
