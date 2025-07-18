const HeroBuyForm = () => {
    return (
        <div className="flex flex-col w-full gap-10 pt-6">
            <div className="flex bg-background-dark rounded-t-lg p-2 gap-2 items-center">
                <div className="w-[50px] h-[26px] bg-green-500 text-white rounded text-center">Live</div>
                <div className="flex flex-col sm:flex-row">
                    <p className="text-black">قیمت لحظه‌ای خرید هر گرم طلای ۱۸ عیار:</p>
                    <p className="text-black">6,421,000 تومان</p>
                </div>
            </div>
            <div className="flex flex-col gap-y-6 pr-5 sm:pr-9 relative">
                <div className="absolute top-11 right-0.5 sm:right-4 border border-gray-500 border-l-0 w-5 h-28" />
                <div className="w-full">
                    <label className="text-medium14 text-black mb-0.5 mr-4">مقدار طلا</label>
                    <input type="text" dir="rtl" className="w-full text-black border border-gray-500 rounded px-4 py-2" placeholder="مثلاً ۱ گرم" />
                </div>
                <div className="w-full">
                    <label className="text-medium14 text-black mb-0.5 mr-4">ارزش کل</label>
                    <input type="text" disabled className="w-full text-black border border-gray-500 rounded px-4 py-2 bg-gray-100" placeholder="— تومان" />
                </div>
            </div>
            <a href="/">
                <button className="w-full bg-[#eabc26] text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2">
                    خرید
                </button>
            </a>
        </div>
    )
}

export default HeroBuyForm