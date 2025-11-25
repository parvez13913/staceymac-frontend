const DataImportIcon = ({ className }: { className?: string }) => {
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
        d="M12.6667 10V6.00001L8 1.33334H3.33333C2.59695 1.33334 2 1.9303 2 2.66668V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 1.33334V4.66668C8 5.40306 8.59693 6.00001 9.33333 6.00001H12.6667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.33203 14.6665L7.33203 12.6665L9.33203 10.6665M12.6654 12.6665H7.7379"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DataImportIcon;
