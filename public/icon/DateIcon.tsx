const DateIcon = ({ className }: { className?: string }) => {
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
        d="M13.333 1.66667V4.16667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6.66699 1.66667V4.16667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2.5 6.91667C2.5 4.70754 4.29086 2.91667 6.5 2.91667H13.5C15.7091 2.91667 17.5 4.70753 17.5 6.91667V14.3333C17.5 16.5425 15.7091 18.3333 13.5 18.3333H6.5C4.29086 18.3333 2.5 16.5425 2.5 14.3333V6.91667Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DateIcon;
