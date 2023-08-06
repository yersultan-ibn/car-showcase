"use client";
import Image from "next/image";
import { title } from "process";

const CustomButton = ({
  title,
  onClick,
  textStyles,
  containerStyles,
  btnType,
  rightIcon,
}) => {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      type={btnType || "button"}
      onClick={onClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="allow_left"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};
export default CustomButton;
