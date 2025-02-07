'use client'
import { AuroraBackgroundDemo } from '@/components/shared/bg-aurora'
import { HeroParallaxDemo } from '@/components/shared/hero-paralax'
import LampDemo from '@/components/ui/lamp'
import { MacbookScroll } from '@/components/ui/macbook-scroll'


export default function Home() {
	return (
		<div>
			<AuroraBackgroundDemo>
				<div>
					<p>Home</p>
				</div>
			</AuroraBackgroundDemo>
			<MacbookScroll src='/bg-orca.png' title='Мы основываемся на честности и надежности' />
			<HeroParallaxDemo />
			<LampDemo/>
		</div>
	)
}
