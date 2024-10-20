import React from 'react';

const CircularComponent = ({ content, size = '96px', bgColor = '#EEEEEE' ,className}) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: bgColor,
      }}
    >
      {content}
    </div>
  );
};

export default CircularComponent;
