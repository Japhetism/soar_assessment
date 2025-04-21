import React from 'react';

interface CloseSvgProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const CLOSE_SVG: React.FC<CloseSvgProps> = ({ color = "#343C6A", ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="18" y1="6" x2="6" y2="18" stroke={color} stroke-width="2" stroke-linecap="round"/>
    <line x1="6" y1="6" x2="18" y2="18" stroke={color} stroke-width="2" stroke-linecap="round"/>
  </svg>
);

export default CLOSE_SVG;


