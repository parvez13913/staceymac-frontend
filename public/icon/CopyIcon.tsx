const CopyIcon = ({ className }: { className?: string }) => {
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
        d="M10.832 16.6665V18.3332H12.4987L17.4987 13.3332L15.832 11.6665L10.832 16.6665Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M15.8333 9.16666V7.49999L10 1.66666H4.16667C3.24619 1.66666 2.5 2.41285 2.5 3.33332V16.6667C2.5 17.5872 3.24619 18.3333 4.16667 18.3333H8.33333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 1.66666V5.83332C10 6.7538 10.7462 7.49999 11.6667 7.49999H15.8333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CopyIcon;
