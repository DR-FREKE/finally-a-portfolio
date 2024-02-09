import React from "react";

// interface SectionHeadingProps {
//   title: string;
// }

type SectionHeadingProps = { title: string };

export const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <h2 className="text-3xl capitalize font-medium mb-6 text-center">
      {title}
    </h2>
  );
};
