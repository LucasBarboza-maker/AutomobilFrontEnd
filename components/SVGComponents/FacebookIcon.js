import React from "react";
import { SvgXml } from "react-native-svg";  

export default function SvgComponent(){  
  const svgMarkup = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M28 24.6667C28 26.508 26.508 28 24.6667 28H7.33333C5.49267 28 4 26.508 4 24.6667V7.33333C4 5.492 5.49267 4 7.33333 4H24.6667C26.508 4 28 5.492 28 7.33333V24.6667Z" fill="#3F51B5"/>
  <path d="M22.912 16.6667H20.6667V25.3334H17.3334V16.6667H15.3334V14H17.3334V12.3934C17.3347 10.0547 18.306 8.66669 21.0614 8.66669H23.3334V11.3334H21.8087C20.736 11.3334 20.6667 11.7334 20.6667 12.482V14H23.3334L22.912 16.6667Z" fill="white"/>
  </svg> 
  `;
  const GoogleIconSvg = () => <SvgXml xml={svgMarkup} width="32px" />;  

  return <GoogleIconSvg />;
}