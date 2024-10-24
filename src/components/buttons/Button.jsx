"use client";
const Button = ({ className,label, classT , onClick}) => {
  return (
    <button onClick={onClick} className={`${className } hover:bg-[#785fdd] active:bg-[#613bf9] focus:bg-[#5231d7]  hover:text-white focus:text-white active:text-white`}>
        <span className={classT}>{label}</span>
    </button>
  )
}

export default Button
