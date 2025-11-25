const LogOutIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        d="M8 6L6 8M6 8L8 10M6 8H14"
        stroke="#5B5A64"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 5C10 3.34315 8.65685 2 7 2H6C3.79086 2 2 3.79086 2 6V10C2 12.2091 3.79086 14 6 14H7C8.65685 14 10 12.6569 10 11"
        stroke="#5B5A64"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LogOutIcon;
