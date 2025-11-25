const SortByIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M6.24967 5L3.33301 7.91667M6.24967 5L9.16634 7.91667M6.24967 5V15M13.7497 15L10.833 12.0833M13.7497 15L16.6663 12.0833M13.7497 15V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SortByIcon;
