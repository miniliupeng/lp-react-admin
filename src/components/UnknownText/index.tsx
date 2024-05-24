interface UnknownProps {
  text?: string;
  minWidth?: number;
}

export const UnknownValue = '-';

export const UnknownText = ({ text, minWidth /*  = 100 */ }: UnknownProps) => {
  return (
    <span style={{ color: 'var(--xdrsec-default-color)', minWidth, display: 'inline-block' }}>
      {text || UnknownValue}
    </span>
  );
};
