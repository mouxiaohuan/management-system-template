import { obj2params } from '@/utils/utils';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import './index.less';

interface Iprop {
  src: string;
  param?: Record<string, any>;
  style?: Record<string, any>;
  scrolling?: 'auto' | 'no' | 'yes';
  className?: string;
  [key: string]: any;
}

const AppIframe: React.FC<Iprop> = (props) => {
  const { src, param, style, className, scrolling = 'auto' } = props;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState('100vh');

  function iframeAutoFit() {
    setTimeout(function () {
      if (!iframeRef) return;
      setHeight(`${iframeRef?.current?.parentElement?.clientHeight}px`);
    }, 200);
  }
  useEffect(() => {
    iframeAutoFit();
    window.addEventListener('resize', iframeAutoFit);
  }, []);
  return (
    <iframe
      ref={iframeRef}
      {...props}
      src={`${src}${param ? '?=' + obj2params(param) : ''}`}
      frameBorder="0"
      style={style}
      allowFullScreen={true}
      scrolling={scrolling}
      height={height}
      className={classNames('Ifame', className)}
    />
  );
};

export default AppIframe;
