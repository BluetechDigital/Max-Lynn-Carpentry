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
					priority
					className={
						image?.sourceUrl
							? "bg-lightGreyTwo mx-auto w-full h-28 mb-6 object-cover object-center"
							: "hidden"
					}
					alt={`${image?.altText}`}
					src={image?.sourceUrl}
					width={image?.mediaDetails?.width ? image?.mediaDetails?.width : 500}
					height={
						image?.mediaDetails?.height ? image?.mediaDetails?.height : 500
					}
					style={{
						clipPath: `polygon(94% 0, 100% 6%, 100% 100%, 0 100%, 0 0)`,
					}}
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
