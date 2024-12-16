import { cn } from '@/lib/utils'
import React from 'react'

interface ContainerProps {
	children: React.ReactNode
	className?: string
}

export const Container: React.FC<ContainerProps> = ({
	children,
	className,
}) => {
	return (
		<div
			className={cn(
				'max-w-[1280px] h-[100vh] mx-auto my-0 text-black',
				className
			)}
		>
			{children}
		</div>
	)
}
