/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import NextHead from 'next/head';

import { DefaultSeo } from 'next-seo';

import { GAScripts } from '@/components/seo';
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
      {/* Robots */}
      <meta content={robots ?? 'index,follow'} key="robots" name="robots" />
      <meta content={robots ?? 'index,follow'} key="googlebot" name="googlebot" />
      {/* Viewport */}
      <meta content="width=device-width, initial-scale=1" key="viewport" name="viewport" />
      {/* Favicon */}
      <link href="/favicon/favicon.ico" rel="icon" sizes="any" />

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
