"use client"
const Button = ({ className,label, classT}) => {
  return (
    <button className={`${className }`}>
        <span className={classT}>{label}</span>
    </button>
  )
}

export default Button
