import React from "react";
import { SvgXml } from "react-native-svg";  

export default function SvgComponent(){  
  const svgMarkup = `<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M37.5 6.25C20.25 6.25 6.25 20.25 6.25 37.5C6.25 54.75 20.25 68.75 37.5 68.75C54.75 68.75 68.75 54.75 68.75 37.5C68.75 20.25 54.75 6.25 37.5 6.25ZM37.5 15.625C42.6875 15.625 46.875 19.8125 46.875 25C46.875 30.1875 42.6875 34.375 37.5 34.375C32.3125 34.375 28.125 30.1875 28.125 25C28.125 19.8125 32.3125 15.625 37.5 15.625ZM37.5 60C29.6875 60 22.7812 56 18.75 49.9375C18.8437 43.7187 31.25 40.3125 37.5 40.3125C43.7188 40.3125 56.1563 43.7187 56.25 49.9375C52.2188 56 45.3125 60 37.5 60Z" fill="#1D3D4C"/>
  </svg>
  `;
  const ArrowLeftIconSvg = () => <SvgXml xml={svgMarkup} width="32" />;  

  return <ArrowLeftIconSvg />;
}