import React from "react";
type Props = {
  heading: string;
  heading2: string;
  paragraph: string;
};
function StoryDiv({ heading, heading2, paragraph }: Props) {
  return (
    <div>
      <h1 className="text-3xl mb-8">
        <span className="text-primary">{heading}</span> {heading2}
      </h1>
      <p className="text-xl w-[90%] text-gray-500">{paragraph}</p>
    </div>
  );
}

export default StoryDiv;
