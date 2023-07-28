/*
 * @Author: xiaohuan.mou
 * @Date: 2023-04-27 20:40:22
 * @Last Modified by: xiaohuan.mou
 * @Last Modified time: 2023-04-27 21:55:30
 */
import React from 'react';
import { Timeline } from 'antd';
import './index.less';

const Case1: React.FC = () => {
  return (
    <div className="case">
      <div className="title">
        <span>case1</span> <span>2015-09-01</span>
      </div>
      <div className="content">case1 status</div>
    </div>
  );
};
const Case2: React.FC = () => {
  return (
    <div className="case">
      <div className="title">
        <span>case2</span> <span>2015-09-01</span>
      </div>
      <div className="content2">case2 status</div>
    </div>
  );
};

//You don't need to over-encapsulate, just change the style
const NewTimeline: React.FC = () => {
  const itemList = [
    {
      children: <Case1 />,
    },
    {
      color: 'gray',
      children: <Case2 />,
    },
    {
      color: 'gray',
      children: (
        <>
          <p>Technical testing 1</p>
          <p>Technical testing 2</p>
          <p>Technical testing 3 2015-09-01</p>
        </>
      ),
    },
  ];

  return <Timeline items={itemList as any} className="Timeline" />;
};

export default NewTimeline;
