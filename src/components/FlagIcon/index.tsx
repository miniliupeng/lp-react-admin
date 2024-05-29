import { CloseSquareOutlined } from '@ant-design/icons';

interface FlagIconProps {
  code: string;
}

export const FlagIcon = ({ code }: FlagIconProps) => {
  if (!code) return <CloseSquareOutlined />;
  return <span className={`fi fi-${code.toLowerCase() || 'xx'}`}></span>;
};
