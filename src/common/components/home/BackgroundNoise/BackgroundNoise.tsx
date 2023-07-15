const BackgroundNoise = () => (
  <svg height="700" opacity="0.62" version="1.1" viewBox="0 0 700 700" width="700" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter
        color-interpolation-filters="linearRGB"
        filterUnits="objectBoundingBox"
        height="140%"
        id="nnnoise-filter"
        primitiveUnits="userSpaceOnUse"
        width="140%"
        x="-20%"
        y="-20%"
      >
        <feTurbulence
          baseFrequency="0.116"
          height="100%"
          numOctaves="4"
          result="turbulence"
          seed="15"
          stitchTiles="stitch"
          type="turbulence"
          width="100%"
          x="0%"
          y="0%"
        />
        <feSpecularLighting
          height="100%"
          in="turbulence"
          lighting-color="#9d9d9d"
          result="specularLighting"
          specularConstant="1.3"
          specularExponent="20"
          surfaceScale="40"
          width="100%"
          x="0%"
          y="0%"
        >
          <feDistantLight azimuth="3" elevation="85" />
        </feSpecularLighting>
      </filter>
    </defs>
    <rect fill="transparent" height="700" width="700" />
    <rect fill="#9d9d9d" filter="url(#nnnoise-filter)" height="700" width="700" />
  </svg>
);

export { BackgroundNoise };
