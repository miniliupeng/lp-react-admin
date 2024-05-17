import { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Input, InputRef, Tag } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import './index.scss';

interface TagProps {
  name: string;
  closable?: boolean;
}
interface TagGroupProps {
  value?: TagProps[];
  onChange?: (value: TagProps[]) => void;
  onDelete?: (name: string) => void;
  onAdd?: (name: string) => void;
}

export const TagGroup = ({ value = [], onChange, onDelete, onAdd }: TagGroupProps) => {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<InputRef>(null);
  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);
  const handleClose = (tagName) => {
    onDelete?.(tagName);
    onChange?.(value.filter((tag) => tag.name !== tagName));
  };
  const showInput = () => {
    setInputVisible(true);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputConfirm = () => {
    if (inputValue && !value.find((tag) => tag.name === inputValue)) {
      onAdd?.(inputValue);
      onChange?.([...value, { name: inputValue, closable: true }]);
    }
    setInputVisible(false);
    setInputValue('');
  };
  const forMap = ({ name, closable }: TagProps) => {
    const tagElem = (
      <Tag
        closable={closable}
        onClose={(e) => {
          e.preventDefault();
          handleClose(name);
        }}
        className="port-tag"
      >
        {name}
      </Tag>
    );
    return (
      <span
        key={name}
        style={{
          display: 'inline-block',
          marginTop: 4,
          marginBottom: 8
        }}
      >
        {tagElem}
      </span>
    );
  };
  const tagChild = value.map(forMap);
  return (
    <>
      <div style={{ whiteSpace: 'break-spaces' }}>
        <TweenOneGroup
          enter={{
            scale: 0.8,
            opacity: 0,
            type: 'from',
            duration: 100
          }}
          onEnd={(e) => {
            if (e.type === 'appear' || e.type === 'enter') {
              (e.target as any).style = 'display: inline-block; margin: 4px 0 8px 0;'; // 设置动画结束后元素的样式
            }
          }}
          leave={{
            opacity: 0,
            width: 0,
            scale: 0,
            duration: 200
          }}
          appear={false}
        >
          {tagChild}
        </TweenOneGroup>
      </div>
      {inputVisible ? (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={{
            width: 78
          }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      ) : (
        <div style={{ height: 32 }}>
          <Tag onClick={showInput} className="border-dashed">
            <PlusOutlined /> 添加
          </Tag>
        </div>
      )}
    </>
  );
};
