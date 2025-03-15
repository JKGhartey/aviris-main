interface ArchiveIconProps {
  className?: string;
}

export const ArchiveIcon = ({ className }: ArchiveIconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4C4 2.89543 4.89543 2 6 2H14L20 8V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z"
      className="fill-current opacity-20"
    />
    <path d="M12 2V8H20" className="stroke-current" strokeWidth="2" />
    <path
      d="M10 12H14M10 9H14M10 15H14M10 18H14"
      className="stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
