interface ProPlanIconProps {
  className?: string;
}

const ProPlanIcon = ({ className }: ProPlanIconProps) => {
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
        d="M17.5 17.5H2.5V2.5"
        stroke="#9810FA"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M2.91602 17.0834C3.28217 14.4531 6.39637 7.30362 8.68952 7.30362C10.2744 7.30362 10.6848 10.5295 12.238 10.5295C14.9103 10.5295 14.5228 3.33337 17.4993 3.33337"
        stroke="#9810FA"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ProPlanIcon;
