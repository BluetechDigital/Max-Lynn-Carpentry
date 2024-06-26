// Imports
import {
	initial,
	stagger,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IOurServices} from "@/types/components/index";

// Styling
import styles from "../styles/components/OurServices.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import OurServicesCard from "./Cards/OurServicesCard";

const OurServices: FC<IOurServices> = ({
	title,
	subtitle,
	paragraph,
	servicesGrid,
}) => {
	return (
		<>
			<div
				className={
					styles.ourServices +
					" relative py-12 sm:py-16 px-4 bg-white bg-cover bg-center bg-no-repeat border-y-[16px] lg:border-r-[16px] border-solid border-primary-default"
				}
				style={{
					backgroundImage: `url("/svg/background/polygon-scatter-haikei-lightgrey-two.svg")`,
				}}
			>
				<div className="lg:container relative m-auto flex flex-col items-center gap-6">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="w-full flex flex-col items-center lg:justify-between lg:flex-row gap-4"
					>
						<div className="lex flex-col">
							<motion.h4
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="font-ObjectSans uppercase max-w-sm mx-auto lg:mx-0 text-center lg:text-left text-base text-primary-default"
							>
								{subtitle}
							</motion.h4>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="my-3 max-w-xl mx-auto xl:mx-0 uppercase text-black text-center lg:text-left font-extrabold text-lg lg:text-xl"
							>
								{title}
							</motion.h3>
						</div>
						<Paragraph
							content={paragraph}
							tailwindStyling="lg:max-w-3xl mx-auto lg:mx-0 text-black text-base text-center lg:text-left"
						/>
					</motion.div>
					<div className="w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 py-6 px-0 sm:px-4 gap-6 items-start justify-center">
						{servicesGrid?.length > 0 ? (
							servicesGrid?.map((item: any, keys: number) => (
								<Fragment key={keys}>
									<motion.div
										custom={keys}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
									>
										<OurServicesCard
											link={item?.card?.link}
											image={item?.card?.image}
											title={item?.card?.title}
											paragraph={item?.card?.paragraph}
										/>
									</motion.div>
								</Fragment>
							))
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default OurServices;
