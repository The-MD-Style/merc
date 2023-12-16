import React, { PropsWithChildren } from 'react';
import SectionContainerView from './SectionContainer.view';

type Props = {
  className?: string;
  isContained?: boolean;
  style?: React.CSSProperties;
};

const SectionContainer: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  return (
    <SectionContainerView style={props.style} isContained={props.isContained} className={props.className}>
      {props.children}
    </SectionContainerView>
  );
};

export default SectionContainer;
