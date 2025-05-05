import React from 'react';

export const RemotionVideo = ({ canvasData }) => {
  return (
    <div>
      {canvasData.map((image, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: image.position.y,
            left: image.position.x,
            width: image.size.width,
            height: image.size.height,
          }}
        >
          <img src={image.src} alt={`Canvas item ${index}`} style={{ width: '100%', height: '100%' }} />
        </div>
      ))}
    </div>
  );
};
