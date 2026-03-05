import { cn } from "@/lib/utils";

type LeafIconProps = {
  className?: string;
};

const LeafIcon = ({ className }: LeafIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={cn("h-10 w-8", className)}
    >
      <path
        d="M32 5C43.4 14.7 50 25.9 50 37.3C50 47.8 42.2 55.4 32 57C21.8 55.4 14 47.8 14 37.3C14 25.9 20.6 14.7 32 5Z"
        strokeWidth="3"
      />
      <path
        d="M32 50V36.5C32 29.7 33.3 23.5 36.9 17.4"
        strokeWidth="2.6"
      />
      <path
        d="M32 34.8C28.4 33.2 25.5 30.6 23.7 27"
        strokeWidth="1.9"
      />
      <path
        d="M32.3 39.7C36.2 39.6 39.6 38.2 42.3 35.3"
        strokeWidth="1.9"
      />
    </svg>
  );
};

export default LeafIcon;
