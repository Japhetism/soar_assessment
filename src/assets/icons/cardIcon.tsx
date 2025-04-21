import React from 'react';

interface CardIconSvgProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const CARD_ICON_SVG: React.FC<CardIconSvgProps> = ({ color = "#FFFFFF", ...props }) => (
  <svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="15" r="15" fill={color} fillOpacity="0.5"/>
    <circle cx="29" cy="15" r="15" fill={color} fillOpacity="0.5"/>
  </svg>
);

export default CARD_ICON_SVG;

