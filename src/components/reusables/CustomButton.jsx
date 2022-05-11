import { IconContainer } from "./IconContainer.jsx";

export default function CustomButton({
  type,
  children,
  className,
  bg,
  color,

  size,
  iconOnly,
  prependIcon,
  appendIcon,
  ...rest
}) {
  const bgColor = bg ? `bg-${bg}` : "bg-primary";
  const textColor = color ? `t-${color}` : "t-white";

  return (
    <button
      type={type || "button"}
      size={size || undefined}
      className={`btn border-0 ${bgColor} ${textColor} ${
        iconOnly ? "icon-only" : ""
      } ${prependIcon ? "prepend-icon" : ""} ${
        appendIcon ? "append-icon" : ""
      }  ${className || ""}`}
      {...rest}
    >
      {iconOnly ? (
        { iconOnly }
      ) : (
        <>
          {/* {prependIcon && (
						<IconContainer className="btn-icon-prepend">
							{prependIcon}
						</IconContainer>
					)} */}
          {children}
          {/* {appendIcon && (
						<IconContainer className="btn-icon-append">
							{appendIcon}
						</IconContainer>
					)} */}
        </>
      )}
    </button>
  );
}
