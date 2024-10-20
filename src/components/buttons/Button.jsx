"use client";
const Button = ({ className,label, classT , onClick}) => {
  return (
    <button onClick={onClick} className={`${className } hover:bg-[#EFEBFF] active:bg-[#EFEBFF] focus:bg-[#EFEBFF] `}>
        <span className={classT}>{label}</span>
    </button>
  )
}

export default Button
