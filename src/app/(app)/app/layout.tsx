import AppFooter from "@/components/appfooter";
import AppHeader from "@/components/appheader";
import BackgroundPattern from "@/components/backgroundpattern";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackgroundPattern />
      <div className="max-w-[1050px] mx-auto px-4">
        <AppHeader />
        {children}

        <AppFooter />
      </div>
    </>
  );
}
