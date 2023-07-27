import { title } from "process";

export const CustomButton = ({
  title,
  textStyles,
  containerStyles,
  btnType,
}) => {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      type={btnType || "button"}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
    </button>
  );
};
