import { ReactNode } from 'react';

export type LinkIconPositionTypes = 'start' | 'end';

export type LinkProps = {
	text: string;
	type: 'link';
	href: string;
	positionIcon?: LinkIconPositionTypes;
	icon?: ReactNode;
	reset?: never;
};

export type ButtonProps = {
	text: string;
	type: 'button';
	reset: () => void;
	positionIcon?: LinkIconPositionTypes;
	icon?: ReactNode;
	href?: never;
};
