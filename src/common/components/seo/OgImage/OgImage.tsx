import { Fragment } from 'react';

interface OgImageProps {
  url?: string;
  width?: number;
  height?: number;
  alt?: string;
}

const ogImage = ({ url, width, height, alt }: OgImageProps, index: number) => (
  // generate full URL for OG image url with store base URL
  <Fragment key={`og:image:${index}`}>
    <meta content={url} key={`og:image:url:${index}`} property="og:image" />
    <meta content={String(width)} key={`og:image:width:${index}`} property="og:image:width" />
    <meta content={String(height)} key={`og:image:height:${index}`} property="og:image:height" />
    <meta content={alt} key={`og:image:alt:${index}`} property="og:image:alt" />
  </Fragment>
);

export type { OgImageProps };
export { ogImage };
