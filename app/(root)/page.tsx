import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { todo } from "node:test";
import React from "react";

export default function Home() {
  const loggedIn = { firstName: "Naveen" };
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
    </div>
  );
}
