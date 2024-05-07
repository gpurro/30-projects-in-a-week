import { useEffect, useRef } from "react";

interface LabelWaveProps {
  hasFocus: boolean;
  label: string;
  inputValue: string;
}
export const LabelWave = ({ label, hasFocus, inputValue }: LabelWaveProps) => {
  const labelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    const spans = labelRef.current?.children;
    if (spans) {
      for (let i = 0; i < spans.length; i++) {
        const span = spans[i] as HTMLSpanElement;
        span.style.transitionDelay = `${i * 50}ms`;

        if (hasFocus || inputValue.length > 0) {
          span.style.transform = "translateY(-30px)";
          span.style.color = "lightblue";
        } else {
          span.style.transform = "";
          span.style.color = "";
        }
      }
    }
  }, [hasFocus]);

  return (
    <label
      className=" absolute top-4 left-0 pointer-events-none "
      ref={labelRef}
    >
      {label.split("").map((char, index) => {
        return (
          <span
            key={index}
            className=" inline-block text-lg min-w-1 duration-300 ease-in-out "
            style={{ transitionDelay: "0ms" }}
          >
            {char}
          </span>
        );
      })}
    </label>
  );
};
