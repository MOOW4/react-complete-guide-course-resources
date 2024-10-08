import {Outlet} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout({children}) {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}