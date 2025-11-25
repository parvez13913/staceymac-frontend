const DollerIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <circle
        cx="9.99935"
        cy="10.0003"
        r="8.33333"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M11.6663 8.33333C11.6663 7.41286 10.9201 6.66667 9.99967 6.66667C9.0792 6.66667 8.33301 7.41286 8.33301 8.33333C8.33301 9.25381 9.0792 10 9.99967 10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M10.0007 9.99967C10.9211 9.99967 11.6673 10.7459 11.6673 11.6663C11.6673 12.5868 10.9211 13.333 10.0007 13.333C9.08018 13.333 8.33398 12.5868 8.33398 11.6663"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M10 5.41699V6.66699"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13.333V14.583"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DollerIcon;
