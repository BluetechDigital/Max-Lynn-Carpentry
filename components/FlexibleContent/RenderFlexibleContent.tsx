// Imports
import React, {FC, Fragment} from "react";
import {usePageContext} from "@/context/pages";
import {IPostTypeFlexibleContent} from "@/types/context";

// Components
import Faq from "../Faq";
import CTA from "../CTA";
import Hero from "../Hero";
import CTATwo from "../CTATwo";
import FAQTwo from "../FAQTwo";
import HeroTwo from "../HeroTwo";
import Gallery from "../Gallery";
import OurServices from "../OurServices";
import ContactForm from "../ContactForm";
import ErrorPage from "../Global/ErrorPage";
import GallerySlider from "../GallerySlider";
import TitleParagraph from "../TitleParagraph";
import GettingStarted from "../GettingStarted";
import Accreditations from "../Accreditations";
import Maintenance from "../Global/Maintenance";
import TestimonialsTwo from "../TestimonialsTwo";
import TestimonialsGrid from "../TestimonialsGrid";
import TitleContentImage from "../TitleContentImage";
import AboutContentImage from "../AboutContentImage";
import TestimonialsSlider from "../TestimonialsSlider";
import OurServicesGridTwo from "../OurServicesGridTwo";
import RequestAppointmentForm from "../RequestAppointmentForm";

const RenderFlexibleContent: FC = () => {
	const content = usePageContext();
	const FlexibleContent: IPostTypeFlexibleContent =
		content?.postTypeFlexibleContent;

	const componentMap: {[key: string]: FC<any>} = {
		[`${FlexibleContent}_Faq`]: Faq,
		[`${FlexibleContent}_Cta`]: CTA,
		[`${FlexibleContent}_Hero`]: Hero,
		[`${FlexibleContent}_CtaTwo`]: CTATwo,
		[`${FlexibleContent}_FAQTwo`]: FAQTwo,
		[`${FlexibleContent}_HeroTwo`]: HeroTwo,
		[`${FlexibleContent}_Gallery`]: Gallery,
		[`${FlexibleContent}_OurServices`]: OurServices,
		[`${FlexibleContent}_ContactForm`]: ContactForm,
		[`${FlexibleContent}_ErrorPageContent`]: ErrorPage,
		[`${FlexibleContent}_GallerySlider`]: GallerySlider,
		[`${FlexibleContent}_TitleParagraph`]: TitleParagraph,
		[`${FlexibleContent}_GettingStarted`]: GettingStarted,
		[`${FlexibleContent}_Accreditations`]: Accreditations,
		[`${FlexibleContent}_Maintenance`]: Maintenance,
		[`${FlexibleContent}_TestimonialsTwo`]: TestimonialsTwo,
		[`${FlexibleContent}_TestimonialsGrid`]: TestimonialsGrid,
		[`${FlexibleContent}_TitleContentImage`]: TitleContentImage,
		[`${FlexibleContent}_AboutContentImage`]: AboutContentImage,
		[`${FlexibleContent}_TestimonialsSlider`]: TestimonialsSlider,
		[`${FlexibleContent}_OurServicesGridTwo`]: OurServicesGridTwo,
		[`${FlexibleContent}_RequestAppointmentForm`]: RequestAppointmentForm,
	};

	return (
		<>
			{content?.content?.length > 0 &&
				content?.content?.map((item: any, index: number) => (
					<section
						key={index}
						className={item?.displaySection ? "block" : "hidden"}
					>
						{componentMap[item?.fieldGroupName] && (
							<Fragment>
								{React.createElement(componentMap[item?.fieldGroupName], {
									...item,
								})}
							</Fragment>
						)}
					</section>
				))}
		</>
	);
};

export default RenderFlexibleContent;
