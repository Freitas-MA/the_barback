import React from 'react'

const FlexTopContainer = (props) => {
  return (
    <section
    id={props.id}
    className={props.className}
    style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 0,
        flexShrink: 0,
        width: '100%',
        maxWidth: '1280px',
        minHight: 'calc(100vh - 60px)',
        padding: '1rem 1rem'
    }}
    >
        {props.children}
    </section>
  )
}

export default FlexTopContainer