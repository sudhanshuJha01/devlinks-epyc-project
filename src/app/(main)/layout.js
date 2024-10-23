
import NavBar from "./components/navbar/NavBar.jsx";


export default function RootLayout({ children }) {
  return (
  <div className="flex flex-col items-center justify-center h-full">
  <NavBar/>
  {children}
  </div>
 
  );
}