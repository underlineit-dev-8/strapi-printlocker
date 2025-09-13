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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.accordion': SharedAccordion;
      'shared.banner': SharedBanner;
      'shared.banner2': SharedBanner2;
      'shared.carousel-content': SharedCarouselContent;
      'shared.content': SharedContent;
      'shared.faq': SharedFaq;
      'shared.list-items': SharedListItems;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.split-content': SharedSplitContent;
    }
  }
}
