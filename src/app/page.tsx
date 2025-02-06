'use client'
import { AuroraBackgroundDemo } from '@/components/shared/bg-aurora'
import { HeroParallaxDemo } from '@/components/shared/hero-paralax'


export default function Home() {
	return (
		<div>
			<AuroraBackgroundDemo>
				<div>
					<p>Home</p>
				</div>
			</AuroraBackgroundDemo>
			<HeroParallaxDemo />
		</div>
	)
}
