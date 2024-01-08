import React from 'react'

export const CardComponent = (props) => {
  return (
    <div
    id={props.id}
    className={props.className}
    style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 0,
        flexShrink: 0,
        width: '350px',
        minHeight: '450px',
        backgroundColor: 'transparent',
        border: '1px solid #0000005f',
        borderRadius: '10px',
        padding: '20px',
        gap: '20px',
    }}
    >
        {props.children}
    </div>
  )
}


  const loadingCardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '350px',
    minHeight: '450px',
    backgroundColor: 'transparent',
    border: '1px solid #0000005f',
    borderRadius: '10px',
    padding: '20px',
    gap: '20px',
  };

  const loadingLineStyle = {
    width: '100%',
    height: '20px',
    background: 'linear-gradient(90deg, #ccc 25%, #ddd 50%, #ccc 75%)',
    backgroundSize: '200% 100%',
    animation: 'loading-wave 1.5s infinite',
  };

  const loadingWaveAnimation = '@keyframes loading-wave { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }';
  export const LoadingCardComponent = () => {
  return (
    <div style={loadingCardStyle}>
      <style>{loadingWaveAnimation}</style>
      <div style={loadingLineStyle}></div>
      <div style={loadingLineStyle}></div>
      <div style={loadingLineStyle}></div>
    </div>
  )
}

