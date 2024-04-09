// Imports
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {fadeIn, stagger, initial, initialTwo} from "@/animations/animations";

// Styling
import styles from "./../../styles/components/Navbar.module.scss";

// Components
import Paragraph from "../Elements/Paragraph";

const SubMegaMenuLinks: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="fixed mt-[1.5rem] w-full left-0 flex justify-end">
				<div
					className="w-[95%] xl:max-w-3xl mx-auto bg-white"
					style={{
						boxShadow: "28px 28px 2px -20px rgba(0,0,0,0.1)",
					}}
				>
					<div className="flex flex-col items-center justify-start py-10 border-l-[5px] border-primary-default">
						<motion.h3
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="font-ObjectSans mb-5 text-base font-semibold tracking-normal text-center uppercase md:text-left text-black"
						>
							Our Services
						</motion.h3>
						<motion.ul
							initial={initialTwo}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className={
								styles.ourServicesLinks +
								" px-8 py-6 w-full grid grid-cols-2 items-center my-auto gap-2 lg:gap-5 z-[999]"
							}
						>
							{/* Menu Link*/}
							{globalContext?.servicesSublinks?.length > 0 ? (
								globalContext?.servicesSublinks?.map(
									(item: any, keys: number) => (
										<Fragment key={keys}>
											<Link
												href={`${item?.node?.url}`}
												target={`${
													item?.node?.target ? item?.node?.target : "_self"
												}`}
												aria-label={`${item?.node?.label}`}
											>
												<li className="w-full group-scoped">
													<Link
														href={`${item?.node?.url}`}
														target={`${
															item?.node?.target ? item?.node?.target : "_self"
														}`}
														aria-label={`${item?.node?.label}`}
														className="font-PlusJakartaSans block px-4 font-medium text-center text-tiny text-black hover:text-primary-two"
													>
														{item?.node?.label}
													</Link>
												</li>
											</Link>
										</Fragment>
									)
								)
							) : (
								<></>
							)}
						</motion.ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default SubMegaMenuLinks;
