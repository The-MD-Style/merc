import React, { PropsWithChildren } from 'react';

import Container from '../Container/Container';

type Props = {
  className?: string;
  isContained?: boolean;
  style?: React.CSSProperties;
};

const SectionContainerView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  return (
    <section style={props.style} className={props.className}>
      {props.isContained ? props.children : <Container className={props.className}>{props.children}</Container>}
    </section>
  );
};

export default SectionContainerView;
