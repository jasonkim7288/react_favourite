import React from 'react';

const bgStyles = {

}

const imgStyles = {
  position: 'absolute',
  top: '0',
  objectFit: 'contain',
  width: '100%',
  height: '500px',
  maxHeight: '500px',
  minHeight: '500px',
  zIndex: '-1',
  opacity: '0.7',
  filter: 'blur(4px)',
  webkitFilter: 'blur(8px)'
}

const BackgroundImg = () => {
  return (
    <div class="" style={bgStyles}>
      <img src="https://images.unsplash.com/photo-1556656793-08538906a9f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" style={imgStyles}/>
    </div>
  );
};

export default BackgroundImg;
