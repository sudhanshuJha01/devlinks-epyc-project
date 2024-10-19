"use client";
const Button = ({ className,label, classT , onClick}) => {
  return (
    <button onClick={onClick} className={`${className }`}>
        <span className={classT}>{label}</span>
    </button>
  )
}

export default Button
