import Link from 'next/link';
import { ButtonProps, LinkProps } from './LinkMain.types';

type LinkMainProps = LinkProps | ButtonProps;

export default function LinkMain({ text, positionIcon, icon, href, type, reset }: LinkMainProps) {
	return (
		<>
			{type === 'link' ? (
				<Link href={href} className="flex items-center gap-2 border px-3.5 py-3 rounded-lg border-primary-200">
					{positionIcon === 'start' && icon}
					<p className="font-semibold text-sm text-primary-500">{text}</p>
					{positionIcon === 'end' && icon}
				</Link>
			) : (
				<button
					onClick={reset}
					className="flex items-center gap-2 border px-3.5 py-3 rounded-lg border-primary-200 outline-none"
				>
					{positionIcon === 'start' && icon}
					<p className="font-semibold text-sm text-primary-500">{text}</p>
					{positionIcon === 'end' && icon}
				</button>
			)}
		</>
	);
}
