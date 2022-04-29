import React from "react";
import { SvgXml } from "react-native-svg";  

export default function SvgComponent(){  
  const svgMarkup = `<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M58.3333 5.83337H11.6667C8.45834 5.83337 5.86251 8.45837 5.86251 11.6667L5.83334 64.1667L17.5 52.5H58.3333C61.5417 52.5 64.1667 49.875 64.1667 46.6667V11.6667C64.1667 8.45837 61.5417 5.83337 58.3333 5.83337ZM17.5 26.25H52.5V32.0834H17.5V26.25ZM40.8333 40.8334H17.5V35H40.8333V40.8334ZM52.5 23.3334H17.5V17.5H52.5V23.3334Z" fill="#BDBDBD"/>
  </svg>`;
  const ArrowLeftIconSvg = () => <SvgXml xml={svgMarkup} width="32" />;  

  return <ArrowLeftIconSvg />;
}