import { ArrowLeft } from 'phosphor-react-sc';
import Image from 'next/image';
import { COLORS } from '@/constants/colors.constants';
import LinkMain from './components/LinkMain/LinkMain.component';

export default function NotFound() {
	return (
		<div className="flex flex-col items-center gap-6 justify-center h-[100vh]">
			<div className=" bg-[url(/img/background.png)] bg-contain bg-no-repeat bg-center w-[208px] h-[208px] flex items-center justify-center flex-col gap-3 pt-[33px]">
				<Image alt="Not found image" src="/img/404.png" width={140} height={140} />
				<p className="font-bold text-[22px] leading-[127%]">Page not found</p>
			</div>
			<LinkMain
				href="/"
				text="Go home"
				icon={<ArrowLeft size={22} color={COLORS.primary500} weight="bold" />}
				positionIcon="start"
				type="link"
			/>
		</div>
	);
}
