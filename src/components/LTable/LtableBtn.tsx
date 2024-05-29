interface LtableBtnProps {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const LtableBtn = ({
  className,
  onClick,
  disabled,
  children,
  ...restProps
}: LtableBtnProps) => {
  return (
    <a
      className={`table-btn ${className} ${disabled ? '!text-disabled cursor-not-allowed' : ''}`}
      onClick={() => {
        if (!disabled) onClick?.();
      }}
      {...restProps}
    >
      {children}
    </a>
  );
};
