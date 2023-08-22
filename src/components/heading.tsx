import React from "react";
type HeadingProps = {
  children: React.ReactNode;
};
export default function Heading({ children }: HeadingProps) {
  return (
    <h2 className="text-center font-medium mb-8 text-3xl capitalize">
      {children}
    </h2>
  );
}
