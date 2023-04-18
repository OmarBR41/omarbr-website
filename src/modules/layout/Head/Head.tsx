/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import NextHead from 'next/head';

import { DefaultSeo } from 'next-seo';

import { GAScripts, ogImage, type OgImageProps } from '@/components/seo';
import seoConfigJson from '@/config/seo.json';

interface SEOProps {
  title?: string;
  description?: string;
  robots?: string;
  children?: React.ReactNode;
  openGraph?: {
    title?: string;
    description?: string;
    type?: string;
    locale?: string;
    url?: string;
    site_name?: string;
    images?: OgImageProps[];
  };
}

export const Head: React.FC<SEOProps> = ({ title, description, openGraph, robots, children }) => (
  <>
    <DefaultSeo {...seoConfigJson} />
    <NextHead>
      {/* Google Analytics */}
      <GAScripts />

      {/* Title */}
      <title key="title">{title ? `${seoConfigJson.titleTemplate.replace(/%s/g, title)}` : seoConfigJson.title}</title>
      {/* Description */}
      <meta content={description || seoConfigJson.description} key="description" name="description" />
      {/* OpenGraph */}
      <meta content={openGraph?.type ?? seoConfigJson.openGraph.type} key="og:type" property="og:type" />
      <meta
        content={openGraph?.title ?? seoConfigJson.openGraph.title ?? title ?? seoConfigJson.title}
        key="og:title"
        property="og:title"
      />
      <meta
        content={
          openGraph?.description ?? seoConfigJson.openGraph.description ?? description ?? seoConfigJson.description
        }
        key="og:description"
        property="og:description"
      />
      <meta
        content={openGraph?.site_name ?? seoConfigJson.openGraph.site_name}
        key="og:site_name"
        property="og:site_name"
      />
      <meta content={openGraph?.url ?? seoConfigJson.openGraph.url} key="og:url" property="og:url" />
      <meta content={openGraph?.locale ?? seoConfigJson.openGraph.locale} key="og:locale" property="og:locale" />
      {openGraph?.images?.length
        ? openGraph.images.map((img, index) => ogImage(img, index))
        : ogImage(seoConfigJson.openGraph.images[0], 0)}

      {/* Twitter Cards */}
      {seoConfigJson.twitter.cardType && (
        <meta content={seoConfigJson.twitter.cardType} key="twitter:card" name="twitter:card" />
      )}
      {seoConfigJson.twitter.site && (
        <meta content={seoConfigJson.twitter.site} key="twitter:site" name="twitter:site" />
      )}
      {seoConfigJson.twitter.handle && (
        <meta content={seoConfigJson.twitter.handle} key="twitter:creator" name="twitter:creator" />
      )}
      {/* Robots */}
      <meta content={robots ?? 'index,follow'} key="robots" name="robots" />
      <meta content={robots ?? 'index,follow'} key="googlebot" name="googlebot" />
      {/* Viewport */}
      <meta content="width=device-width, initial-scale=1" key="viewport" name="viewport" />
      {/* Content */}
      {children}
    </NextHead>
  </>
);

Head.defaultProps = {
  title: undefined,
  description: undefined,
  robots: undefined,
  children: undefined,
  openGraph: undefined,
};
