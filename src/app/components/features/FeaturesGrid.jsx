import FeatureCard from "./FeatureCard";
import { GoldIcon, ClockIcon, TaxFreeIcon, ArrowIcon } from "./Icons";
import { GiGoldBar } from "react-icons/gi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { Ri24HoursFill } from "react-icons/ri";
import { CiCalculator1 } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";
export default function FeaturesGrid() {
  return (
    <div className="p-6 w-[min(1398px,93%)] rounded-[40px] bg-background-light mx-auto sm:translate-y-[-22%] shadow-[0px_10px_40px_0px_#0000001A]">
      <div className="grid grid-cols-2 divide-border-middle sm:grid-cols-6 [clip-path:inset(1px_0_0_2px)] divide-x divide-y">
        <FeatureCard icon={<GiGoldBar size={32} />} title="امکان دریافت فیزیکی طلا" />
        <FeatureCard icon={<Ri24HoursFill size={32} />} title="خرید و فروش آنلاین و شبانه‌روزی طلا" />
        <FeatureCard icon={<CiCalculator1 size={32} />} title="بدون هزینه اجرت و مالیات" />
        <FeatureCard icon={<FaMoneyBillTransfer size={32} />} title="امکان انتقال دارایی طلا به دیگران" />
        <FeatureCard icon={<GiGoldBar size={32} />} title="امکان وثیقه‌گذاری طلا" />
        <FeatureCard icon={<IoIosTimer size={32} />} title="قیمت‌گذاری لحظه‌ای و شفاف" />
      </div>
    </div>
  );
}
