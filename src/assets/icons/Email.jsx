import React from 'react'

const Email = ({ width = '24px', height = '24px', color = 'white' }) => {
  return (
    <svg
      stroke='currentColor'
      fill={color}
      strokeWidth={0}
      viewBox='0 0 24 24'
      height={height}
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path fill='none' d='M0 0h24v24H0z' />
      <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z' />
    </svg>
  )
}

export default Email
