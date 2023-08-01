import React from 'react'

type ButtonProps = {
  text: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}

function Button({ text, onClick, className }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
