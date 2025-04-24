import React from 'react';

interface RightArrowSvgProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const RIGHTARROW_SVG: React.FC<RightArrowSvgProps> = ({ color = "#FFBB38", ...props }) => (
  <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L7.5 7.5L1 14" stroke={color} stroke-width="2"/>
  </svg>
);

export default RIGHTARROW_SVG;