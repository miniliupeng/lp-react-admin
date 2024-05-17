import { Button, Space } from 'antd';

interface CheckboxButtonProps {
  options: { label: React.ReactNode; value: string | number }[];
  value?: (string | number)[];
  onChange?: (val: (string | number)[]) => void;
}

export const CheckboxButton = ({ options, value = [], onChange }: CheckboxButtonProps) => {
  return (
    <Space.Compact block>
      {options.map((option) => (
        <Button
          key={option.value}
          type={value.includes(option.value) ? 'primary' : 'default'}
          onClick={() =>
            onChange?.(
              value.includes(option.value)
                ? value.filter((item) => item !== option.value)
                : [...value, option.value]
            )
          }
        >
          {option.label}
        </Button>
      ))}
    </Space.Compact>
  );
};
