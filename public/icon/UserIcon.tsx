interface UserIconProps {
  className?: string;
}
const UserIcon = ({ className }: UserIconProps) => {
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
        d="M14.1673 7.08329C14.1673 4.78211 12.3018 2.91663 10.0007 2.91663C7.69947 2.91663 5.83398 4.78211 5.83398 7.08329C5.83398 9.38446 7.69947 11.25 10.0007 11.25C12.3018 11.25 14.1673 9.38446 14.1673 7.08329Z"
        stroke="#305CDE"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M15.8327 17.0833C15.8327 13.8617 13.221 11.25 9.99935 11.25C6.77769 11.25 4.16602 13.8617 4.16602 17.0833"
        stroke="#305CDE"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
};

export default UserIcon;
