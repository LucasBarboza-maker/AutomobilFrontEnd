import React from "react";
import { SvgXml } from "react-native-svg";  

export default function SvgComponent(){  
  const svgMarkup = `<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.53132 14.9283L8.71683 15.7417C8.37196 16.0861 7.81429 16.0861 7.47309 15.7417L0.340808 8.62285C-0.00406504 8.27845 -0.00406504 7.72155 0.340808 7.38081L7.47309 0.258301C7.81796 -0.0861003 8.37563 -0.0861003 8.71683 0.258301L9.53132 1.07167C9.87986 1.41974 9.87252 1.98763 9.51664 2.32837L5.09566 6.53446H15.64C16.1279 6.53446 16.5205 6.92649 16.5205 7.41379V8.58622C16.5205 9.07351 16.1279 9.46554 15.64 9.46554H5.09566L9.51664 13.6716C9.87619 14.0124 9.88353 14.5803 9.53132 14.9283Z" fill="#fff"/>
  </svg>
  
  `;
  const ArrowLeftIconSvgWhite = () => <SvgXml xml={svgMarkup} width="32" />;  

  return <ArrowLeftIconSvgWhite/>;
}