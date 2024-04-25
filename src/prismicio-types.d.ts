// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice = AboutUsSlice | BentoBoxSlice | HeroSlice | RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
	/**
	 * Title field in *Page*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Slice Zone field in *Page*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
	 * Meta Title field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: page.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: page.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Page*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<PageDocumentData>,
	'page',
	Lang
>;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
	/**
	 * Link field in *Settings → Navigation*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.navigation[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;

	/**
	 * Label  field in *Settings → Navigation*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.navigation[].label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	label: prismic.KeyTextField;

	/**
	 * CTA Button  field in *Settings → Navigation*
	 *
	 * - **Field Type**: Boolean
	 * - **Placeholder**: *None*
	 * - **Default Value**: false
	 * - **API ID Path**: settings.navigation[].cta_button
	 * - **Documentation**: https://prismic.io/docs/field#boolean
	 */
	cta_button: prismic.BooleanField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
	/**
	 * Site Title field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.site_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	site_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.meta_description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * OG Image field in *Settings*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.og_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	og_image: prismic.ImageField<never>;

	/**
	 * Navigation field in *Settings*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.navigation[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<SettingsDocumentData>,
	'settings',
	Lang
>;

export type AllDocumentTypes = PageDocument | SettingsDocument;

/**
 * Primary content in *AboutUs → Primary*
 */
export interface AboutUsSliceDefaultPrimary {
	/**
	 * Heading_AboutPage field in *AboutUs → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.primary.heading_aboutpage
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading_aboutpage: prismic.RichTextField;

	/**
	 * Content_AboutPage field in *AboutUs → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.primary.content_aboutpage
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	content_aboutpage: prismic.RichTextField;
}

/**
 * Primary content in *AboutUs → Items*
 */
export interface AboutUsSliceDefaultItem {
	/**
	 * Dev_Name field in *AboutUs → Items*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.items[].dev_name
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	dev_name: prismic.RichTextField;

	/**
	 * Dev_Description field in *AboutUs → Items*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.items[].dev_description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	dev_description: prismic.RichTextField;

	/**
	 * Dev_image field in *AboutUs → Items*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.items[].dev_image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	dev_image: prismic.ImageField<never>;
}

/**
 * Default variation for AboutUs Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutUsSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<AboutUsSliceDefaultPrimary>,
	Simplify<AboutUsSliceDefaultItem>
>;

/**
 * Slice variation for *AboutUs*
 */
type AboutUsSliceVariation = AboutUsSliceDefault;

/**
 * AboutUs Shared Slice
 *
 * - **API ID**: `about_us`
 * - **Description**: AboutUs
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutUsSlice = prismic.SharedSlice<'about_us', AboutUsSliceVariation>;

/**
 * Primary content in *BentoBox → Primary*
 */
export interface BentoBoxSliceDefaultPrimary {
	/**
	 * Heading field in *BentoBox → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Italics for Gold Text
	 * - **API ID Path**: bento_box.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.RichTextField;

	/**
	 * Body field in *BentoBox → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bento_box.primary.body
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	body: prismic.RichTextField;
}

/**
 * Primary content in *BentoBox → Items*
 */
export interface BentoBoxSliceDefaultItem {
	/**
	 * BentoTitle field in *BentoBox → Items*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bento_box.items[].bentotitle
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	bentotitle: prismic.TitleField;

	/**
	 * BentoBody field in *BentoBox → Items*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bento_box.items[].bentobody
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	bentobody: prismic.RichTextField;

	/**
	 * BentoImage field in *BentoBox → Items*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bento_box.items[].bentoimage
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	bentoimage: prismic.ImageField<never>;

	/**
	 * IsWide field in *BentoBox → Items*
	 *
	 * - **Field Type**: Boolean
	 * - **Placeholder**: *None*
	 * - **Default Value**: false
	 * - **API ID Path**: bento_box.items[].iswide
	 * - **Documentation**: https://prismic.io/docs/field#boolean
	 */
	iswide: prismic.BooleanField;
}

/**
 * Default variation for BentoBox Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BentoBoxSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<BentoBoxSliceDefaultPrimary>,
	Simplify<BentoBoxSliceDefaultItem>
>;

/**
 * Slice variation for *BentoBox*
 */
type BentoBoxSliceVariation = BentoBoxSliceDefault;

/**
 * BentoBox Shared Slice
 *
 * - **API ID**: `bento_box`
 * - **Description**: BentoBox
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BentoBoxSlice = prismic.SharedSlice<'bento_box', BentoBoxSliceVariation>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
	/**
	 * Heading field in *Hero → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.TitleField;

	/**
	 * Body field in *Hero → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.body
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	body: prismic.RichTextField;

	/**
	 * Button_link field in *Hero → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.button_link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	button_link: prismic.LinkField;

	/**
	 * Button_Lable field in *Hero → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.button_lable
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	button_lable: prismic.KeyTextField;

	/**
	 * Hero_Image field in *Hero → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.hero_image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	hero_image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<HeroSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<'hero', HeroSliceVariation>;

/**
 * Primary content in *RichText → Primary*
 */
export interface RichTextSliceDefaultPrimary {
	/**
	 * Content field in *RichText → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Lorem ipsum...
	 * - **API ID Path**: rich_text.primary.content
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<RichTextSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<'rich_text', RichTextSliceVariation>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			PageDocument,
			PageDocumentData,
			PageDocumentDataSlicesSlice,
			SettingsDocument,
			SettingsDocumentData,
			SettingsDocumentDataNavigationItem,
			AllDocumentTypes,
			AboutUsSlice,
			AboutUsSliceDefaultPrimary,
			AboutUsSliceDefaultItem,
			AboutUsSliceVariation,
			AboutUsSliceDefault,
			BentoBoxSlice,
			BentoBoxSliceDefaultPrimary,
			BentoBoxSliceDefaultItem,
			BentoBoxSliceVariation,
			BentoBoxSliceDefault,
			HeroSlice,
			HeroSliceDefaultPrimary,
			HeroSliceVariation,
			HeroSliceDefault,
			RichTextSlice,
			RichTextSliceDefaultPrimary,
			RichTextSliceVariation,
			RichTextSliceDefault
		};
	}
}
