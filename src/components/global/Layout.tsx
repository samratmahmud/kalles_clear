import React, {ReactNode} from "react";
import Navbar from "./navbar/Navbar";
import Offer from "@/app/home/Offer";

interface layoutProps {
  children: ReactNode;
}

function Layout(props: layoutProps) {
  const {children} = props;

  return (
    <main>
      <Offer />
      <Navbar />
      {children}
    </main>
  );
}

export default Layout;
