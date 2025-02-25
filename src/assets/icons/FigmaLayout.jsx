const FigmaLayout = ({
    width = "24",
    height = "24",
    color = "white",
    className = "",
  }) => (
    <svg
      stroke={color}
      fill={color}
      strokeWidth="0"
      viewBox="0 0 24 24"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M3 12l2 2 4-4 6 6 4-4 2 2-6 6-8-8z" />
    </svg>
  );
  
  export default FigmaLayout;
  