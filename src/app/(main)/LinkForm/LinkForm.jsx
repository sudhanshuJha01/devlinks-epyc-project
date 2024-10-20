"use client";
import React, { useState } from "react";
import Image from "next/image";
import optionData from "@/lib/config/optionData.js";
import {useLinkStore} from "@/lib/store/linkSore.js";
const LinkForm = ({ link , index}) => {
  const [selectedOption, setSelectedOption] = useState(optionData[0]?.value);
  const removeLink = useLinkStore((state) => state.removeLink);
  const handleRemove = () => {
    removeLink(link.id);
    console.log("id"+link.id);
    console.log("value"+link.value);
    
  }

  // Find the selected option's icon to display
  const selectedPlatform = optionData.find(
    (item) => item.value === selectedOption
  );

  return (
    <section className="flex flex-col w-[728px] h-[228px] bg-[#FAFAFA] rounded-lg p-5 justify-center gap-3">
      <section className="flex items-center justify-between text-[#737373]">
        <section className="flex items-center justify-center gap-2">
          <Image
            src={"/images/icon-drag-and-drop.svg"}
            alt="drag and drop icon"
            width={12}
            height={6}
          />
          <h2 className="font-bold text-base ">Link #{index+1}</h2>
        </section>
        <span onClick={handleRemove} className="text-base cursor-pointer">Remove</span>
      </section>

      <form className="flex flex-col text-[#333333] text-xs gap-1">
        <label htmlFor="platform-select">Platform</label>
        <section className="flex items-center w-full bg-[#FFFFFF] border border-[#E0E0E0] focus:border-[#633CFF] focus:ring-[#633CFF] focus:ring-1 focus:ring-opacity-50 rounded-lg  pl-4 gap-3">
          {/* Display the icon of the selected platform */}
          {selectedPlatform && (
            <Image
            className=""
              src={selectedPlatform.icon}
              alt={selectedPlatform.name}
              width={12.52}
              height={14.52}
            />
          )}

          <select
            id="platform-select"
            className="w-[100%]  py-3 outline-none  rounded-r-lg text-base"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)} // Update selected option
          >
            {optionData?.map((item) => (
              <option key={item?.value} value={item?.value}>
                {item?.name}
              </option>
            ))}
          </select>
        </section>
      </form>

      <form className="flex flex-col text-[#333333] text-xs gap-1">
        <label htmlFor="url">Link</label>
        <input
          className="px-4 py-3 rounded-lg bg-[#FFFFFF] border border-[#E0E0E0] focus:outline-none focus:border-[#633CFF] focus:ring-[#633CFF] focus:ring-1 focus:ring-opacity-50 stroke-[#D9D9D9]"
          type="url"
          name="url"
          id="url"
          placeholder="https://github.com/sudhanshuJha01"
          pattern="https://.*"
          size="30"
          required
        />
      </form>
    </section>
  );
};

export default LinkForm;

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import optionData from "@/lib/config/optionData.js";

// const Page = () => {
//   const [selectedOption, setSelectedOption] = useState(optionData[0]?.value);

//   // Find the selected option's icon to display
//   const selectedPlatform = optionData.find((item) => item.value === selectedOption);

//   return (
//     <section className="flex flex-col w-[728px] h-[228px] bg-[#FAFAFA] rounded-lg p-5 justify-center gap-3">
//       <section className="flex items-center justify-between text-[#737373]">
//         <section className="flex items-center justify-center gap-2">
//           <Image
//             src={"/images/icon-drag-and-drop.svg"}
//             alt="drag and drop icon"
//             width={12}
//             height={6}
//           />
//           <h2 className="font-bold text-base ">Link #1</h2>
//         </section>
//         <span className="text-base">Remove</span>
//       </section>

//       <form className="flex flex-col text-[#333333] text-xs gap-1">
//         <label htmlFor="platform-select">Platform</label>
        
//         {/* Display the icon of the selected platform */}
//         {selectedPlatform && (
//           <Image
//             src={selectedPlatform.icon}
//             alt={selectedPlatform.name}
//             width={20}
//             height={20}
//           />
//         )}

//         <select
//           id="platform-select"
//           className="px-4 py-3 rounded-lg bg-[#FFFFFF] border border-[#E0E0E0] focus:outline-none focus:border-[#633CFF] focus:ring-[#633CFF] focus:ring-1 focus:ring-opacity-50"
//           value={selectedOption}
//           onChange={(e) => setSelectedOption(e.target.value)} // Update selected option
//         >
//           {optionData?.map((item) => (
//             <option key={item?.value} value={item?.value}>
//               {item?.name}
//             </option>
//           ))}
//         </select>
//       </form>

//       <form className="flex flex-col text-[#333333] text-xs gap-1">
//         <label htmlFor="url">Link</label>
//         <input
//           className="px-4 py-3 rounded-lg bg-[#FFFFFF] border border-[#E0E0E0] focus:outline-none focus:border-[#633CFF] focus:ring-[#633CFF] focus:ring-1 focus:ring-opacity-50 stroke-[#D9D9D9]"
//           type="url"
//           name="url"
//           id="url"
//           placeholder="https://github.com/sudhanshuJha01"
//           pattern="https://.*"
//           size="30"
//           required
//         />
//       </form>
//     </section>
//   );
// };

// export default Page;
