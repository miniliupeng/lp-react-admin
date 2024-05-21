import { Button, type ButtonProps } from 'antd';

const defaultConfig: ButtonProps = {
  // type: 'primary'
};

interface ButtonGroupProps {
  size?: ButtonProps['size'];
  options: ButtonProps[];
}

export const ButtonGroup = ({ options, size }: ButtonGroupProps) => {
  return (
    <div className="flex-y-center gap-2">
      {options.map((option, index) => (
        <Button key={index} {...defaultConfig} size={size} {...option} />
      ))}
    </div>
  );
};
