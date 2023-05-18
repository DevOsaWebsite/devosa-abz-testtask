import imageLg from '@/public/background-hero@1170.jpg';
import { StaticImageData } from 'next/image';

interface BackgroundImage {
	xs: StaticImageData,
	sm: StaticImageData,
	md: StaticImageData,
	lg: StaticImageData
}

export const backgroundImage: BackgroundImage = {
	xs: imageLg,
	sm: imageLg,
	md: imageLg,
	lg: imageLg
}