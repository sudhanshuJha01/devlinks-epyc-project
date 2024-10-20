import React from 'react';

const RectangularComponent = ({ content, width = '237px', height = '44px', bgColor = '#EEEEEE', borderColor = '#333',className }) => {
  return (
    <div
      className={`flex items-center justify-center  rounded-lg ${className}`}
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
