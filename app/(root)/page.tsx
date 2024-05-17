import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { todo } from "node:test";
import React from "react";

export default function Home() {
  const loggedIn = {
    firstName: "Naveen",
    lastName: "Raj",
    email: "naveen123@xyz.com",
  };
  return (
    <div className="home">
      <header className="home-content">
        <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Be on top of your finances with ease"
        />
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.5}
        />
      </header>
      {/* todo recent transactions */}
      <RightSideBar user={loggedIn} transactions={[]} banks={[{}, {}]} />
    </div>
  );
}
