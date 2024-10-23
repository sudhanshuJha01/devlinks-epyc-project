
import Image from "next/image";


export default function RootLayout({ children }) {
  return (
  <main className="flex flex-col items-center justify-center h-ful p-7 gap-9 ">
     <Image
          src="images/logo-devlinks-large.svg"     
          alt="Devlinks Logo"
          width={182}
          height={52}
          className="hidden sm:block"
        />
  {children}
  </main>
 
  );
}