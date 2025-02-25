const WebDesign = ({
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
      <path d="M21 19c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2V5c0-1.104.896-2 2-2h14c1.104 0 2 .896 2 2v14zM7 9h10v2H7zm0 4h10v2H7z" />
    </svg>
  );
  
  export default WebDesign;
  