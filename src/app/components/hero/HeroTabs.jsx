"use client"
import { useState } from "react"

import HeroBuyForm from "./HeroBuyForm"
import HeroSellForm from "./HeroSellForm"

const HeroTabs = () => {
  const [tab, setTab] = useState("buy")

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex justify-center border-0 border-b border-solid border-gray-400 w-full">
        <div className="flex gap-4">
          <button
            onClick={() => setTab("buy")}
            className={`px-4 py-2 rounded-t ${tab === "buy" ? "text-black font-bold border-b-2 border-primary" : "text-text-middle"}`}
          >
            خرید
          </button>
          <button
            onClick={() => setTab("sell")}
            className={`px-4 py-2 rounded-t ${tab === "sell" ? "text-black font-bold border-b-2 border-primary" : "text-text-middle"}`}
          >
            فروش
          </button>
        </div>
      </div>
      <div className="w-full">
        {tab === "buy" ? <HeroBuyForm /> : <HeroSellForm />}
      </div>
    </div>
  )
}

export default HeroTabs