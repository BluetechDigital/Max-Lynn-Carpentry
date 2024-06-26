// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IOurServicesCard} from "@/types/components";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Styling
import styles from "../../styles/components/OurServices.module.scss";

// Components
import Paragraph from "../Elements/Paragraph";

const OurServicesCard: FC<IOurServicesCard> = ({
	link,
	image,
	title,
	paragraph,
}) => {
	return (
		<>
			<div className="flex flex-col">
				<Link
					href={`${link?.url}`}
					target={link?.target}
					aria-label={`${link?.title}`}
					className={styles.card + " group overflow-hidden bg-white"}
				>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="bg-default-default group-hover:bg-primary-default relative px-4 py-6 lg:py-12 h-[250px] bg-center bg-no-repeat bg-cover transition-all duration-500 ease-in-out"
						style={{
							backgroundImage: `url("${image?.sourceUrl}")`,
						}}
					>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="absolute -bottom-2 right-2"
						>
							<div className="flex justify-end gap-4 mb-4">
								<div className="flex items-center justify-center text-white text-tiny pl-4 w-fit h-12 bg-primary-default hover:bg-primary-two">
									{link?.title}
									<Image
										priority
										width={550}
										height={550}
										alt="Black Arrow Icon"
										src="/svg/navigation-menu-dropdown-arrow-white.svg"
										className="my-auto ml-2 mb-6 rotate-[-135deg] cursor-pointer w-[35px] h-[35px] object-contain object-center"
									/>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</Link>
				<div className="h-[225px] px-4 py-6">
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="text-center text-black uppercase text-paragraph my-3 font-extrabold"
					>
						{title}
					</motion.h3>
					<Paragraph
						content={
							paragraph?.length > 175
								? paragraph?.substring(0, 175) + "..."
								: paragraph
						}
						tailwindStyling="text-black text-base sm:text-tiny text-center"
					/>
				</div>
			</div>
		</>
	);
};

export default OurServicesCard;
