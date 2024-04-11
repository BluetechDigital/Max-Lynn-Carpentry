// Imports
import {FC, Fragment} from "react";
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

	return (
		<>
			{content?.content?.length > 0 ? (
				content?.content?.map((item: any, keys: number) => (
					<Fragment key={keys}>
						<section>
							{item?.fieldGroupName === `${FlexibleContent}_Hero` &&
							item?.displaySection ? (
								<>
									<Hero
										title={item?.title}
										paragraph={item?.paragraph}
										buttonLink={item?.buttonLink}
										ctaParagraph={item?.ctaParagraph}
										servicesLinks={item?.servicesLinks}
										buttonLinkTwo={item?.buttonLinkTwo}
										backgroundImage={item?.backgroundImage}
									/>
								</>
							) : item?.fieldGroupName === `${FlexibleContent}_HeroTwo` &&
							  item?.displaySection ? (
								<>
									<HeroTwo
										title={item?.title}
										paragraph={item?.paragraph}
										backgroundImage={item?.backgroundImage}
									/>
								</>
							) : item?.fieldGroupName ===
									`${FlexibleContent}_TitleParagraph` &&
							  item?.displaySection ? (
								<>
									<TitleParagraph
										title={item?.title}
										paragraph={item?.paragraph}
										displayParagraph={item?.displayParagraph}
									/>
								</>
							) : item?.fieldGroupName ===
									`${FlexibleContent}_TitleContentImage` &&
							  item?.displaySection ? (
								<>
									<TitleContentImage
										title={item?.title}
										image={item?.image}
										textTitle={item?.textTitle}
										paragraph={item?.paragraph}
										buttonLink={item?.buttonLink}
										displayContentOption={item?.displayContentOption}
										displayBackgroundColor={item?.displayBackgroundColor}
									/>
								</>
							) : item?.fieldGroupName ===
									`${FlexibleContent}_AboutContentImage` &&
							  item?.displaySection ? (
								<>
									<AboutContentImage
										title={item?.title}
										image={item?.image}
										quality={item?.quality}
										subtitle={item?.subtitle}
										paragraph={item?.paragraph}
										contentBox={item?.contentBox}
										reliability={item?.reliability}
									/>
								</>
							) : item?.fieldGroupName ===
									`${FlexibleContent}_Accreditations` &&
							  item?.displaySection ? (
								<>
									<Accreditations
										paragraph={item?.paragraph}
										accreditationsGrid={item?.accreditationsGrid}
									/>
								</>
							) : item?.fieldGroupName === `${FlexibleContent}_OurServices` &&
							  item?.displaySection ? (
								<>
									<OurServices
										title={item?.title}
										subtitle={item?.subtitle}
										paragraph={item?.paragraph}
										buttonLink={item?.buttonLink}
										servicesGrid={item?.servicesGrid}
									/>
								</>
							) : item?.fieldGroupName ===
									`${FlexibleContent}_OurServicesGridTwo` &&
							  item?.displaySection ? (
								<>
									<OurServicesGridTwo
										title={item?.title}
										buttonLink={item?.buttonLink}
										servicesGrid={item?.servicesGrid}
									/>
								</>
							) : item?.fieldGroupName ===
							  `${FlexibleContent}_GettingStarted` ? (
								<>
									<GettingStarted
										title={item?.title}
										stepOne={item?.stepOne}
										stepTwo={item?.stepTwo}
										subtitle={item?.subtitle}
										stepThree={item?.stepThree}
									/>
								</>
							) : item?.fieldGroupName === `${FlexibleContent}_Gallery` &&
							  item?.displaySection ? (
								<>
									<Gallery
										title={item?.title}
										gallery={item?.gallery}
										paragraph={item?.paragraph}
										itemsDisplayedPerPage={item?.itemsDisplayedPerPage}
									/>
								</>
							) : item?.fieldGroupName === `${FlexibleContent}_GallerySlider` &&
							  item?.displaySection ? (
								<>
									<GallerySlider gallerySlider={item?.gallerySlider} />
								</>
							) : item?.fieldGroupName ===
									`${FlexibleContent}_TestimonialsSlider` &&
							  item?.displaySection ? (
								<>
									<TestimonialsSlider />
								</>
							) : item?.fieldGroupName ===
									`${FlexibleContent}_TestimonialsTwo` &&
							  item?.displaySection ? (
								<>
									<TestimonialsTwo
										title={item?.title}
										subtitle={item?.subtitle}
									/>
								</>
							) : item?.fieldGroupName ===
									`${FlexibleContent}_TestimonialsGrid` &&
							  item?.displaySection ? (
								<>
									<TestimonialsGrid
										title={item?.title}
										subtitle={item?.subtitle}
										paragraph={item?.paragraph}
									/>
								</>
							) : item?.fieldGroupName === `${FlexibleContent}_Faq` ? (
								<>
									<Faq
										title={item?.title}
										faqGrid={item?.faqGrid}
										subtitle={item?.subtitle}
										paragraph={item?.paragraph}
									/>
								</>
							) : item?.fieldGroupName === `${FlexibleContent}_FaqTwo` ? (
								<>
									<FAQTwo
										title={item?.title}
										image={item?.image}
										subtitle={item?.subtitle}
										paragraph={item?.paragraph}
										buttonLink={item?.buttonLink}
										faqContent={item?.faqContent}
									/>
								</>
							) : item?.fieldGroupName === `${FlexibleContent}_Cta` &&
							  item?.displaySection ? (
								<>
									<CTA
										title={item?.title}
										paragraph={item?.paragraph}
										buttonLink={item?.buttonLink}
										backgroundImage={item?.backgroundImage}
									/>
								</>
							) : item?.fieldGroupName === `${FlexibleContent}_Cta` &&
							  item?.displaySection ? (
								<>
									<CTATwo
										title={item?.title}
										buttonLink={item?.buttonLink}
										backgroundImage={item?.backgroundImage}
									/>
								</>
							) : item?.fieldGroupName === `${FlexibleContent}_ContactForm` &&
							  item?.displaySection ? (
								<>
									<ContactForm
										title={item?.title}
										paragraph={item?.paragraph}
									/>
								</>
							) : item?.fieldGroupName ===
									`${FlexibleContent}_RequestAppointmentForm` &&
							  item?.displaySection ? (
								<>
									<RequestAppointmentForm
										title={item?.title}
										subtitle={item?.subtitle}
										paragraph={item?.paragraph}
									/>
								</>
							) : item?.fieldGroupName === `${FlexibleContent}_Maintenance` &&
							  item?.displaySection ? (
								<>
									<Maintenance
										title={item?.title}
										paragraph={item?.paragraph}
										backgroundImage={item?.backgroundImage}
									/>
								</>
							) : item?.fieldGroupName ===
									`${FlexibleContent}_ErrorPageContent` &&
							  item?.displaySection ? (
								<>
									<ErrorPage
										title={item?.title}
										paragraph={item?.paragraph}
										buttonLink={item?.buttonLink}
										backgroundImage={item?.backgroundImage}
									/>
								</>
							) : (
								<></>
							)}
						</section>
					</Fragment>
				))
			) : (
				<></>
			)}
		</>
	);
};

export default RenderFlexibleContent;
