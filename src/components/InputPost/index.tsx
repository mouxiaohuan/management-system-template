/*
 * @Author: xiaohuan.mou
 * @Date: 2023-04-27 20:10:04
 * @Last Modified by: xiaohuan.mou
 * @Last Modified time: 2023-04-27 21:40:45
 */
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import './index.less';
import classNames from 'classnames';

interface IInputPost {
  value?: string;
  onchange?: (P: string) => void;
  onPost?: (P: string) => void;
}

const InputPost: React.FC = ({ value = '', onchange, onPost }: IInputPost) => {
  const [buttonStatus, setButtonStatus] = useState<boolean>(false);
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  useEffect(() => {
    onchange?.(inputValue);
    setButtonStatus(!inputValue);
  }, [inputValue, onchange]);

  useEffect(() => {
    setInputValue(value);
  }, [value]);
  return (
    <div className={classNames('InputPost', { focus: inputFocus })}>
      <div className="_name">O</div>
      <input
        type="text"
        className="_input"
        value={inputValue}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="please input"
      />
      <Button
        size="small"
        type="primary"
        className="_button"
        onClick={() => onPost?.(inputValue)}
        disabled={buttonStatus}
      >
        Post
      </Button>
    </div>
  );
};

export default InputPost;
