/*
 * @Author: xiaohuan.mou
 * @Date: 2023-04-27 20:30:12
 * @Last Modified by: xiaohuan.mou
 * @Last Modified time: 2023-04-27 21:50:33
 */
import React, { ReactNode, useEffect, useState } from 'react';
import { Input, Select } from 'antd';

// You don't need to wrap it, it's already there, you can change the style according to the UI design
// https://ant.design/components/input-cn
const { Option } = Select;
interface IInputSelectDrop {
  value?: string;
  onchange?: (P: string) => void;
  //Merge value together according to format?
  onUnitChange?: (P: string) => void;
}
const InputSelectDrop: React.FC = ({ value = '', onchange, onUnitChange }: IInputSelectDrop) => {
  const [inputValue, setInputValue] = useState<string>('');
  useEffect(() => {
    onchange?.(inputValue);
  }, [inputValue, onchange]);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const selectAfter: ReactNode = (
    <Select defaultValue="ch" onChange={(e) => onUnitChange?.(e)}>
      <Option value="ch">￥</Option>
      <Option value="us">$</Option>
    </Select>
  );
  return (
    <div className="postInput">
      <Input
        addonAfter={selectAfter}
        value={inputValue}
        placeholder="please input money"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </div>
  );
};

export default InputSelectDrop;
