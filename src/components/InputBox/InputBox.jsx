"use client"

const InputBox = ({onChange , id , label ,className ,type ,placeholder}) => {
  return (
    <form className="flex flex-col  justify-center gap-2" action="submit">
         <label className="text-[#737373] " htmlFor={`${id}`}>
          {label}
        </label>
        <input
          onChange={onChange}
          className={`${className} p-3 px-4 rounded-lg outline-none`}
          placeholder={`${placeholder}`}
          type={`${type}`}
         id={`${id}`}
      />
    </form>
  )
}

export default InputBox