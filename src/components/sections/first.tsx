import React from 'react'
import { Container } from '../shared/container'
import { Nav } from '../navigations'

export const First = () => {
	return (
		<Container>
			<div className='flex flex-col justify-between h-[100%]'>
				<Nav />

				{/* Text */}
				<div className='text-[128px] font-black text-center'>
					<p className='text-[#0C0C0C] maintext font-black'>
						<span className='text-[#A54700] maintext'>O</span>rtcan
						<span className='text-[#A54700] maintext'> T</span>oba
					</p>
					<p className='text-[#A54700] maintext font-black'>PROJECT</p>
				</div>

				<div>
					<p className='text-[#7A7373] text-center font-[900] self-center'>
						торговая компания для оптовых магазинов
					</p>
				</div>

				<div>Strelka</div>
			</div>
		</Container>
	)
}
