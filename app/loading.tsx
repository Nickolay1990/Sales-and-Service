'use client';

import { COLORS } from '@/constants/colors.constants';
import { CircularProgress } from '@mui/material';

export default function Loading() {
	return (
		<div className="flex flex-col items-center gap-3 h-[100vh] justify-center">
			<CircularProgress enableTrackSlot size="48px" sx={{ color: COLORS.primary500 }} />
			<p className="text-center text-neutral-600">Loading...</p>
		</div>
	);
}
