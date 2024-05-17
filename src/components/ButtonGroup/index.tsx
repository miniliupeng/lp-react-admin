import { Button, type ButtonProps } from 'antd';

const defaultConfig: ButtonProps = {
  size: 'small',
  type: 'primary'
};

interface ButtonGroupProps {
  options: ButtonProps[];
}

export const ButtonGroup = ({ options }: ButtonGroupProps) => {
  return (
    <div className="flex-y-center gap-2">
      {options.map((option, index) => (
        <Button key={index} {...defaultConfig} {...option} />
      ))}
    </div>
  );
};
