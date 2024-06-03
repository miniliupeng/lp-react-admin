import { Button, type ButtonProps } from 'antd';

const defaultConfig: ButtonProps = {
  // type: 'primary'
};

interface ButtonGroupProps {
  size?: ButtonProps['size'];
  options: ButtonProps[];
  className?: string;
}

export const ButtonGroup = ({ options, size, className }: ButtonGroupProps) => {
  return (
    <div className={`flex-y-center gap-2 ${className}`}>
      {options.map((option, index) => (
        <Button key={index} {...defaultConfig} size={size} {...option} />
      ))}
    </div>
  );
};
