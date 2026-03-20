'use client';

import Image from 'next/image';
import LinkMain from './components/LinkMain/LinkMain.component';
import { ArrowsClockwiseIcon } from '@phosphor-icons/react/dist/ssr';
import { COLORS } from '@/constants/colors.constants';

interface ErrorProps {
	reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
	return (
		<div className="flex flex-col items-center h-[100vh] justify-center">
			<div className="w-[360px] h-[180px] bg-[url(/img/background-error.png)] bg-no-repeat bg-contain bg-center pt-3">
				<Image src="/img/light-bulb.png" width={140} height={140} alt="Light bulb is broken" className="mx-auto" />
			</div>
			<p className="font-bold text-[22px] leading-[127%] mb-6">Oops! Something went wrong</p>
			<LinkMain
				text="Reload page"
				positionIcon="end"
				icon={<ArrowsClockwiseIcon size={22} color={COLORS.primary500} />}
				type="button"
				reset={reset}
			/>
		</div>
	);
}
