const EyeIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_6233_26544)">
        <path
          d="M14.0865 6.56871C14.8596 7.38209 14.8596 8.61786 14.0865 9.43125C12.7827 10.8031 10.5434 12.6666 7.99967 12.6666C5.456 12.6666 3.21667 10.8031 1.91281 9.43125C1.13974 8.61787 1.13974 7.38209 1.91281 6.56871C3.21667 5.19687 5.456 3.33331 7.99967 3.33331C10.5434 3.33331 12.7827 5.19687 14.0865 6.56871Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M9.99967 7.99998C9.99967 9.10455 9.10424 9.99998 7.99967 9.99998C6.8951 9.99998 5.99967 9.10455 5.99967 7.99998C5.99967 6.89541 6.8951 5.99998 7.99967 5.99998C9.10424 5.99998 9.99967 6.89541 9.99967 7.99998Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_6233_26544">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default EyeIcon;
