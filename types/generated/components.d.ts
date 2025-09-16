import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAccordion extends Struct.ComponentSchema {
  collectionName: 'components_shared_accordions';
  info: {
    displayName: 'accordion';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.Text;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SharedBanner2 extends Struct.ComponentSchema {
  collectionName: 'components_shared_banner2s';
  info: {
    displayName: 'banner2';
  };
  attributes: {
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    buttonUrl: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCarouselContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_carousel_contents';
  info: {
    displayName: 'carouselContent';
  };
  attributes: {
    content: Schema.Attribute.Component<'shared.content', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 3;
        },
        number
      >;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedChallengeSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_challenge_sections';
  info: {
    displayName: 'challengeSection';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCorousel extends Struct.ComponentSchema {
  collectionName: 'components_shared_corousels';
  info: {
    displayName: 'corousel';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SharedData extends Struct.ComponentSchema {
  collectionName: 'components_shared_data';
  info: {
    displayName: 'data';
  };
  attributes: {
    bannerImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    challengeSection: Schema.Attribute.Component<
      'shared.challenge-section',
      false
    > &
      Schema.Attribute.Required;
    clients: Schema.Attribute.Component<'shared.services', true>;
    corousel: Schema.Attribute.Component<'shared.corousel', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 3;
        },
        number
      >;
    footerBanner: Schema.Attribute.Component<'shared.footer-banner', false> &
      Schema.Attribute.Required;
    products: Schema.Attribute.Component<'shared.services', true>;
    services: Schema.Attribute.Component<'shared.services', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    solutionSection: Schema.Attribute.Component<
      'shared.challenge-section',
      false
    >;
  };
}

export interface SharedDetails extends Struct.ComponentSchema {
  collectionName: 'components_shared_details';
  info: {
    displayName: 'details';
  };
  attributes: {
    footer: Schema.Attribute.Component<'shared.footer', false> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imageDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    imageTitle: Schema.Attribute.String & Schema.Attribute.Required;
    subSection: Schema.Attribute.Component<'shared.sub-section', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    video: Schema.Attribute.Media<'files' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    author: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedFooterBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_banners';
  info: {
    displayName: 'footerBanner';
  };
  attributes: {
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    buttonUrl: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_items';
  info: {
    displayName: 'items';
  };
  attributes: {};
}

export interface SharedListItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_items';
  info: {
    displayName: 'listItems';
  };
  attributes: {
    item: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMembers extends Struct.ComponentSchema {
  collectionName: 'components_shared_members';
  info: {
    displayName: 'members';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedServices extends Struct.ComponentSchema {
  collectionName: 'components_shared_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSplitContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_split_contents';
  info: {
    displayName: 'splitContent';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    listItems: Schema.Attribute.Component<'shared.list-items', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 3;
        },
        number
      >;
    listType: Schema.Attribute.Enumeration<['bullets', 'tickMarks']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'bullets'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSubSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_sub_sections';
  info: {
    displayName: 'subSection';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'shared.items', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.accordion': SharedAccordion;
      'shared.banner': SharedBanner;
      'shared.banner2': SharedBanner2;
      'shared.carousel-content': SharedCarouselContent;
      'shared.challenge-section': SharedChallengeSection;
      'shared.content': SharedContent;
      'shared.corousel': SharedCorousel;
      'shared.data': SharedData;
      'shared.details': SharedDetails;
      'shared.faq': SharedFaq;
      'shared.footer': SharedFooter;
      'shared.footer-banner': SharedFooterBanner;
      'shared.items': SharedItems;
      'shared.list-items': SharedListItems;
      'shared.media': SharedMedia;
      'shared.members': SharedMembers;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.services': SharedServices;
      'shared.slider': SharedSlider;
      'shared.split-content': SharedSplitContent;
      'shared.sub-section': SharedSubSection;
    }
  }
}
