import CardContainer from "../CardContainer.jsx";
import LogoButton from "@/components/buttons/LogoButton.jsx";

const ImageAddCard = () => {
  return (
    <CardContainer className="flex  items-center justify-around">
      <h3 className="text-lg text-[#737373]">Profile Picture</h3>
      <LogoButton
        className={"flex flex-col items-center text-center justify-center p-14 rounded-xl bg-[#EFEBFF] "}
        textClass={"text-[#633CFF] font-semibold"}
        label={"+ Upload Image"}
        imgHref={"/images/icon-upload-image.svg"}
        type={"Upload Image"}
        w={"42"}
        h={"42"}
      />
     
    </CardContainer>
  );
};

export default ImageAddCard;
