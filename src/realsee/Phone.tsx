import React, { FC, PropsWithChildren } from 'react';

const PhonePortrait: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div
    style={{
      boxShadow: "0 0 20px 10px rgba(0,0,0,.2)",
      boxSizing: 'border-box',
      width: `${344 / 16}rem`,
      height: `${704 / 16}rem`,
      padding: `${12 / 16}rem`,
      borderRadius: `${54 / 16}rem`,
      background: '#000',
      margin: `${20 / 16}rem`,
      overflow: 'hidden',
      position: 'relative',
      flex: 'none',
    }}
  >
    <div
      style={{
        position: 'absolute',
        boxSizing: 'border-box',
        width: `${219 / 16}rem`,
        height: `${23 / 16}rem`,
        left: '50%',
        transform: 'translateX(-50%)',
        top: `${11 / 16}rem`,
        zIndex: 100,
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 219 31">
        <path fill="#000" d="M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z" fillRule="evenodd"></path>
      </svg>
    </div>
    <div style={{
      position: 'relative',
      boxSizing: 'border-box',
      borderRadius: `${42 / 16}rem`,
      overflow: 'hidden',
      width: '100%',
      height: '100%',
      transform: 'translateZ(0)'
    }}>
      {children}
    </div>
    <div style={{
      boxSizing: 'border-box',
      width: `${120 / 16}rem`,
      height: `${4 / 16}rem`,
      background: '#999',
      borderRadius: `${999 / 16}rem`,
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: `${20 / 16}rem`,
      zIndex: 100,
    }}></div>
  </div>
};

const PhoneLandscape: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div
    style={{
      boxShadow: "0 0 20px 10px rgba(0,0,0,.2)",
      boxSizing: 'border-box',
      width: `${704 / 16}rem`,
      height: `${344 / 16}rem`,
      padding: `${12 / 16}rem`,
      borderRadius: `${54 / 16}rem`,
      background: '#000',
      margin: `${20 / 16}rem`,
      overflow: 'hidden',
      position: 'relative',
      flex: 'none',
    }}
  >
    <div
      style={{
        position: 'absolute',
        boxSizing: 'border-box',
        width: `${219 / 16}rem`,
        height: `${23 / 16}rem`,
        top: '50%',
        transform: 'translate(-50%, -50%) rotate(-90deg)',
        left: `${20 / 16}rem`,
        zIndex: 100,
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 219 31">
        <path fill="#000" d="M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z" fillRule="evenodd"></path>
      </svg>
    </div>
    <div style={{
      position: 'relative',
      boxSizing: 'border-box',
      borderRadius: `${42 / 16}rem`,
      overflow: 'hidden',
      width: '100%',
      height: '100%',
      transform: 'translateZ(0)'
    }}>
      {children}
    </div>
    <div style={{
      boxSizing: 'border-box',
      width: `${200 / 16}rem`,
      height: `${4 / 16}rem`,
      background: '#111',
      borderRadius: `${999 / 16}rem`,
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: `${18 / 16}rem`,
      zIndex: 100,
    }}></div>
  </div>;
}

export { PhoneLandscape, PhonePortrait };
