import React from 'react';

const RectangularComponent = ({ content, width = '237px', height = '44px', bgColor = '#EEEEEE', borderColor = '#333',className }) => {
  return (
    <div
      className={`flex items-center justify-center  rounded-lg w-[237px] 2-[44px] ${className}`}
      style={{
        width: width,
        height: height,
        backgroundColor: bgColor,
        borderColor: borderColor,
      }}
    >
      {content}
    </div>
  );
};

export default RectangularComponent;
