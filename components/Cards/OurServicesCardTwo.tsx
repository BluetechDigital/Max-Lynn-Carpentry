// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {IOurServicesCardTwo} from "@/types/components";
import {initial, fadeInUp} from "@/animations/animations";

// Components
import Paragraph from "../Elements/Paragraph";

const OurServicesCardTwo: FC<IOurServicesCardTwo> = ({
	image,
	title,
	paragraph,
}) => {
	return (
		<>
			<div className="flex flex-col p-4">
				<Image
					placeholder="blur"
					blurDataURL="blur"
					className={
						image?.sourceUrl
							? "bg-lightGreyTwo mx-auto rounded-full w-44 h-44 mb-6 object-cover object-center"
							: "hidden"
					}
					src={image?.sourceUrl}
					alt={`${image?.altText}`}
					width={image?.mediaDetails?.width}
					height={image?.mediaDetails?.height}
				/>
				<motion.h3
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="text-center text-black uppercase text-base my-3 font-semibold mb-2"
				>
					{title}
				</motion.h3>
				<Paragraph
					content={
						paragraph?.length > 225
							? paragraph?.substring(0, 225) + "..."
							: paragraph
					}
					tailwindStyling="text-black text-tiny text-center"
				/>
			</div>
		</>
	);
};

export default OurServicesCardTwo;
