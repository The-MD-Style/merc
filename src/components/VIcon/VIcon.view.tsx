import React from 'react';

import icons, { Icons } from '../../assets/icons';

type Props = {
  name: Icons;
  width?: number;
  height?: number;
  className?: string;
  color?: string;
  onClick?: (e: React.MouseEvent<SVGElement>) => void;
};

const VIconView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return <svg
      xmlns="http://www.w3.org/2000/svg" 
      className={props.className}
      onClick={props.onClick}
      style={{ width: `${props.width}px`, height: `${props.height}px`, fill: `${props.color}` }}
      viewBox={'0 0 ' + icons[props.name][0]}
      dangerouslySetInnerHTML={{ __html: icons[props.name][1] }}
    ></svg>};

VIconView.displayName = 'VIconView';
VIconView.defaultProps = {};

export default VIconView;
