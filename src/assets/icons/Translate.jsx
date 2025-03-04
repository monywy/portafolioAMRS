const Translate = ({
  width = "20",
  height = "20",
  color = "white",
  className = "",
}) => (
  <svg
    stroke={color}
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden="true"
    height={height}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
    ></path>
  </svg>
);

export default Translate;
