import React from 'react'

type ButtonProps = {
  text: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

function Button({ text, onClick }: ButtonProps) {
  return <button onClick={onClick}>{text}</button>
}

export default Button
