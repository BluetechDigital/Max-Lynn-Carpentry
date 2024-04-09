// Imports
import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PREVIEW PAGES & BLOGS */
/* Fetch all Flexible Content Components 
(For every flexible content page) */
export const getAllPreviewFlexibleContentComponents = async (
	id: number,
	postType: string,
	authToken: string,
	loginRedirectURL: string,
	postTypeFlexibleContent: string
) => {
	try {
		const content: DocumentNode = gql`
			{
        		mainContent: ${postType}(where: {id: "${id}", status: PUBLISH}) {
        		  edges {
						node {
							template {
								... on DefaultTemplate {
									flexibleContent {
										flexibleContent {
											... on ${postTypeFlexibleContent}_Hero {
												fieldGroupName
												title
              									paragraph
              									ctaParagraph
												displaySection
												buttonLink {
                									url
                									title
                									target
                								}
												buttonLinkTwo {
                									url
                									title
                									target
                								}
              									backgroundImage {
              										altText
              										sourceUrl
              										mediaDetails {
              											height
              											width
              										}
              									}
												servicesLinks {
													icon {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
													buttonLink {
														url
														title
														target
													}
												}
											}
											... on ${postTypeFlexibleContent}_HeroTwo {
												fieldGroupName
												title
												paragraph
												displaySection
												backgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_TitleParagraph {
												fieldGroupName
												title
												paragraph
												displaySection
												displayParagraph
											}
											... on ${postTypeFlexibleContent}_TitleContentImage {
            									fieldGroupName
            									title
            									textTitle
            									subtitle
            									paragraph
            									image {
            										altText
            										sourceUrl
            										mediaDetails {
            											height
            											width
            										}
            									}
            									buttonLink {
            										url
            										title
            										target
            									}
            									bulletPoints {
            										points
            									}
            									displaySection
            									displayContentOption
            									displayBackgroundWave
            									displayBackgroundColor
												displayWaveColorOptions
            								}
											... on ${postTypeFlexibleContent}_AboutContentImage {
                								fieldGroupName
                								title
                								subtitle
                								paragraph
												quality {
													title
													paragraph
												}
												reliability {
													title
													paragraph
												}
                								checkatrade {
                									altText
                									sourceUrl
                									mediaDetails {
                										height
                										width
                									}
                								}
                								image {
                									altText
                									sourceUrl
                									mediaDetails {
                										height
                										width
                									}
                								}
												contentBox {
													text
													subtext
													icon {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
												}
                							}
											... on ${postTypeFlexibleContent}_OurClients {
												fieldGroupName
												title
												subtitle
												paragraph
												displaySection
												imageGrid {
													link {
														url
														title
														target
													}
													image {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
												}
											}
											... on ${postTypeFlexibleContent}_OurServices {
												fieldGroupName
												title
												subtitle
												paragraph
												buttonLink {
													url
													title
													target
												}
												displaySection
												servicesGrid {
													card {
														title
														paragraph
														link {
															url
															title
															target
														}
														image {
															altText
															sourceUrl
															mediaDetails {
																height
																width
															}
														}
													}
												}
											}
											... on ${postTypeFlexibleContent}_OurServicesGridTwo {
            									fieldGroupName
            									title
												displaySection
            									buttonLink {
            										url
            										title
            										target
            									}
            									servicesGrid {
            									  	card {
            									  		title
            									  		paragraph
            									  		image {
            									  			altText
            									  			sourceUrl
            									  			mediaDetails {
            									  				height
            									  				width
            									  			}
            									  		}
													}
            									}
            								}
											... on ${postTypeFlexibleContent}_SkillsExperiences {
            									fieldGroupName
            									title
            									paragraph
												displaySection
												displayImageFullWidth
												image {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
            									skillsExperiencesGrid {
            										text
            									}
            								}
											... on ${postTypeFlexibleContent}_Accreditations {
            									fieldGroupName
              									text
              									textTwo
              									paragraph
              									displaySection
              									backgroundImage {
              									  	altText
              									  	sourceUrl
              									  	mediaDetails {
              									  	  	height
              									  	  	width
              									  	}
              									}
              									accreditationsGrid {
              									  	image {
              									  	  	altText
              									  	  	sourceUrl
              									  	  	mediaDetails {
              									  	  	  	height
              									  	  	  	width
              									  	  	}
              									  	}
              									}
            								}
											... on ${postTypeFlexibleContent}_VideoBlock {
												fieldGroupName
												title
												video
												subtitle
												paragraph
												displayVideo
												displaySection
												buttonLink {
													url
													title
													target
												}
												videobackgroundImage {
              										altText
              										sourceUrl
              										mediaDetails {
              											height
              											width
              										}
              									}
											}
											... on ${postTypeFlexibleContent}_Gallery {
												fieldGroupName
												title
												paragraph
												displaySection
												itemsDisplayedPerPage
												gallery {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_GallerySlider {
												fieldGroupName
												displaySection
												gallerySlider {
              										title
              										paragraph
													buttonLink {
                										url
                										title
                										target
                									}
              										backgroundImage {
              										altText
              										sourceUrl
              										mediaDetails {
              											height
              											width
              										}
              									}
													
              									}
											}
											... on ${postTypeFlexibleContent}_GettingStarted {
            									fieldGroupName
            									title
												subtitle
            									stepOne {
            										title
            										paragraph
            										image {
            											altText
            											sourceUrl
            											mediaDetails {
            												height
            												width
            											}
            										}
            									}
            									stepTwo {
            										title
            										paragraph
            										image {
            											altText
            											sourceUrl
            											mediaDetails {
            												height
            												width
            											}
            										}
            									}
            									stepThree {
            										title
            										paragraph
            										image {
            											altText
            											sourceUrl
            											mediaDetails {
            												height
            												width
            											}
            										}
            									}
            								}
											... on ${postTypeFlexibleContent}_TestimonialsSlider {
												fieldGroupName
												displaySection
											}
											... on ${postTypeFlexibleContent}_TestimonialsTwo {
												fieldGroupName
												title
												subtitle
												displaySection
											}
											... on ${postTypeFlexibleContent}_TestimonialsGrid {
												fieldGroupName
												title
												subtitle
												paragraph
												displaySection
											}
											... on ${postTypeFlexibleContent}_Cta {
												fieldGroupName
												title
												paragraph
												displaySection
												buttonLink {
													url
													title
													target
												}
												backgroundImage {
              										altText
              										sourceUrl
              										mediaDetails {
              											height
              											width
              										}
              									}
											}
											... on ${postTypeFlexibleContent}_CtaTwo {
												fieldGroupName
												title
												displaySection
												buttonLink {
													url
													title
													target
												}
												backgroundImage {
              										altText
              										sourceUrl
              										mediaDetails {
              											height
              											width
              										}
              									}
											}
											... on ${postTypeFlexibleContent}_ContactForm {
												fieldGroupName
												title
												paragraph
												displaySection
											}
											... on ${postTypeFlexibleContent}_RequestAppointmentForm {
												fieldGroupName
												title
												subtitle
												paragraph
												displaySection
												buttonLink {
													url
													title
													target
												}
											}
											... on ${postTypeFlexibleContent}_Maintenance {
												fieldGroupName
												title
												paragraph
												displaySection
												backgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_ErrorPageContent {
												fieldGroupName
												title
												paragraph
												displaySection
												buttonLink {
													url
													title
													target
												}
												backgroundImage {
              										altText
              										sourceUrl
              										mediaDetails {
              											height
              											width
              										}
              									}
											}
										}
									}
								}
							}
						}
					}
        		}
			}
		`;

		const response: any = await client.query({
			query: content,
			variables: {
				id: id,
			},
			context: {
				headers: {
					authorization: authToken ? `Bearer ${authToken}` : "",
				},
			},
		});

		return {
			content: response?.data?.mainContent?.flexibleContent?.flexibleContent,
		};
	} catch (error) {
		return loginRedirectURL;
	}
};
