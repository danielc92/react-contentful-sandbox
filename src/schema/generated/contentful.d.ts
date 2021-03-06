// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IHomePageBannerFields {
  /** banner title */
  bannerTitle: string;

  /** banner short text */
  bannerShortText?: string | undefined;

  /** banner theme */
  bannerTheme?: "dark" | "default" | undefined;

  /** banner image */
  bannerImage?: Asset | undefined;

  /** banner users signed up */
  bannerUsersSignedUp?: number | undefined;

  /** banner rich text */
  bannerRichText?: Document | undefined;
}

export interface IHomePageBanner extends Entry<IHomePageBannerFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "homePageBanner";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "homePageBanner";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
