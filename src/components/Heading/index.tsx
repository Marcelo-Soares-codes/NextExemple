import React, { ReactNode } from 'react';

type HeadingProps = {
  children: ReactNode;
};

export const Heading: React.FC<HeadingProps> = ({ children }) => {
  return <h1 className="text-gray-dark text-2xl text-center">{children}</h1>;
};
