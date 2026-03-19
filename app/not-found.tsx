import { ArrowLeft } from 'phosphor-react-sc';
import Image from 'next/image';
import { COLORS } from '@/constants/colors.constants';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="flex flex-col items-center gap-6 justify-center h-[100vh]">
			<div className=" bg-[url(/img/background.png)] bg-contain bg-no-repeat bg-center w-[208px] h-[208px] flex items-center justify-center flex-col gap-3 pt-[33px]">
				<Image alt="Not found image" src="/img/404.png" width={140} height={140} />
				<p className="font-bold text-[22px] leading-[127%]">Page not found</p>
			</div>
			<Link href="/">
				<div className="px-[11px] py-3.5 flex gap-2 items-center border border-primary-200 rounded-xl">
					<ArrowLeft size={22} color={COLORS.primary500} weight="bold" />
					<p className="font-semibold text-sm text-primary-500">Go home</p>
				</div>
			</Link>
		</div>
	);
}
