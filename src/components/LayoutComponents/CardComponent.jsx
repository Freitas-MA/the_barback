import React from 'react'

const CardComponent = (props) => {
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

export default CardComponent