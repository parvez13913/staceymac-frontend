const BookmarkIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="currentColor"
      className={className}
    >
      <path
        d="M0.75 11.4167V2.08333C0.75 1.34695 1.34695 0.75 2.08333 0.75H10.0833C10.8197 0.75 11.4167 1.34695 11.4167 2.08333V11.4167C11.4167 12.5154 10.1623 13.1426 9.28333 12.4833L6.88333 10.6833C6.40926 10.3278 5.75741 10.3278 5.28333 10.6833L2.88333 12.4833C2.00435 13.1426 0.75 12.5154 0.75 11.4167Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BookmarkIcon;
