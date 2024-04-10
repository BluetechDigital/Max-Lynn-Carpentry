// Imports
import {FC} from "react";
import {usePageContext} from "@/context/pages";
import {IPostTypeFlexibleContent} from "@/types/context";

// Components
import DynamicComponent from "./DynamicComponent";

const RenderFlexibleContent: FC = () => {
	const content = usePageContext();
	const FlexibleContent: IPostTypeFlexibleContent =
		content?.postTypeFlexibleContent;

	// Components Key Value Pairs
	const componentMapping: any = {
		[`${FlexibleContent}_Cta`]: "CTA",
		// [`${FlexibleContent}_Faq`]: "Faq",
		[`${FlexibleContent}_Hero`]: "Hero",
		// [`${FlexibleContent}_FAQTwo`]: "FAQTwo",
		[`${FlexibleContent}_CtaTwo`]: "CTATwo",
		[`${FlexibleContent}_Gallery`]: "Gallery",
		[`${FlexibleContent}_HeroTwo`]: "HeroTwo",
		// [`${FlexibleContent}_VideoBlock`]: "VideoBlock",
		// [`${FlexibleContent}_OurClients`]: "OurClients",
		// [`${FlexibleContent}_ContactInfo`]: "ContactInfo",
		[`${FlexibleContent}_ContactForm`]: "ContactForm",
		[`${FlexibleContent}_OurServices`]: "OurServices",
		[`${FlexibleContent}_GallerySlider`]: "GallerySlider",
		[`${FlexibleContent}_GettingStarted`]: "GettingStarted",
		[`${FlexibleContent}_TitleParagraph`]: "TitleParagraph",
		// [`${FlexibleContent}_Accreditations`]: "Accreditations",
		[`${FlexibleContent}_TestimonialsTwo`]: "TestimonialsTwo",
		[`${FlexibleContent}_Maintenance`]: "Global/Maintenance",
		[`${FlexibleContent}_TestimonialsGrid`]: "TestimonialsGrid",
		[`${FlexibleContent}_ErrorPageContent`]: "Global/ErrorPage",
		[`${FlexibleContent}_AboutContentImage`]: "AboutContentImage",
		[`${FlexibleContent}_TestimonialsSlider`]: "TestimonialsSlider",
		[`${FlexibleContent}_TitleContentImage`]: "TitleContentImage",
		// [`${FlexibleContent}_SkillsExperiences`]: "SkillsExperiences",
		[`${FlexibleContent}_OurServicesGridTwo`]: "OurServicesGridTwo",
		[`${FlexibleContent}_RequestAppointmentForm`]: "RequestAppointmentForm",
	};

	return (
		<>
			{content?.content?.length > 0 ? (
				content?.content?.map((item: any, keys: number) => (
					<section key={keys}>
						{item?.fieldGroupName &&
						componentMapping[item.fieldGroupName] &&
						item?.displaySection ? (
							<>
								<DynamicComponent
									componentName={componentMapping[item?.fieldGroupName]}
									{...item}
								/>
							</>
						) : (
							<></>
						)}
					</section>
				))
			) : (
				<></>
			)}
		</>
	);
};

export default RenderFlexibleContent;
