import Navigation from "./component/Navigation.jsx"

export default function RootLayout({ children }) {
  return (
  <div className="flex flex-col items-center justify-center h-full">
  <Navigation/>
  {children}
  </div>
 
  );
}