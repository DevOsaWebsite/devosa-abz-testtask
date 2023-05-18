import React from "react";

import styles from '@/styles/hero.module.scss';

import { BackgroundImage } from './BackgroundImage'
import { backgroundImage } from "@/lib/background-image";

const maxHeight = [500, 500, 650];

export const Hero: React.FC = () => {

	return (
		<section className={styles.root}>
			<BackgroundImage backgroundImageSrc={backgroundImage.lg}
			/>
			{/* <HeroContent /> */}
		</section>
	)
}

// const HeroContent = () => {

// 	return (
// 		<Box position={"relative"} component={Container}
// 			width={1}
// 			height={1}
// 			display={"flex"}
// 			justifyContent={"center"}
// 			alignItems={"center"}
// 		>
// 			<Stack spacing={2.625}
// 				sx={{
// 					maxWidth: 380,
// 					textAlign: "center",
// 					color: "background.white"
// 				}}
// 			>
// 				<Typography variant="h1">
// 					Test assignment for front-end developer
// 				</Typography>
// 				<Typography>
// 					What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind.
// 					They should also be excited to learn, as the world of Front-End Development keeps evolving.
// 				</Typography>
// 				<Box pt={1.375}>
// 					<SignUp />
// 				</Box>
// 			</Stack>
// 		</Box>
// 	)
// }