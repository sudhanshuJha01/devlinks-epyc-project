import CardContainer from "../CardContainer.jsx"

const DetailAddCard = () => {
  return (
    <CardContainer className={"flex flex-col item-center justify-center p-3 px-7 gap-2" }>
      <label className="text-[#737373]" htmlFor="firstname">FirstName:</label>
       <input  className="p-1 rounded-lg" type="text" id="firstname"/>
      <label className="text-[#737373]" htmlFor="lastname">LastName:</label>
       <input  className="p-1 rounded-lg" type="text" id="lastname"/>
      <label className="text-[#737373]" htmlFor="email">Email:</label>
       <input className="p-1 rounded-lg" type="email" id="email" />
    </CardContainer>
  )
}

export default DetailAddCard