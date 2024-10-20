import React from 'react'
import RectangularComponent from './ReactangularComponent.jsx'
import CircularComponent from './CircularComponent.jsx'
const PhoneMokeUp = () => {
  return (
    <section className='flex flex-col items-center gap-14 justify-center w-[237px] h-[514px]' >
        <section className='flex flex-col items-center justify-center gap-6 ' >
        <CircularComponent/>
        <section className='flex flex-col items-center justify-center gap-3 '>
        <RectangularComponent width='160px' height='16px'/>
        <RectangularComponent  width='72px' height='8px'/>
        </section>
        </section>
        <section className='flex flex-col items-center justify-center gap-5 ' >
        <RectangularComponent/>
        <RectangularComponent/>
        <RectangularComponent/>
        <RectangularComponent/>
        </section>
    </section>
  )
}

export default PhoneMokeUp