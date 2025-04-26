const HeroTextContent = () => {
    return (
      <div className="flex-1 flex flex-col text-text-white items-center sm:items-start text-center sm:text-start">
        <h1 className="md:text-4xl font-bold text-2xl mb-4">
          خرید طلای آب شده آنلاین، بدون اجرت و مالیات
        </h1>
        <p className="mb-6 text-regular16 text-gold sm:text-regular20">
          در پرگلد می‌توانید با هر میزان سرمایه‌ای، بدون اجرت، به صورت کاملا آنلاین
          طلا‌ی آبشده بخرید و بفروشید. تمام طلا‌های خریداری شده توسط کاربران پرگلد، در{' '}
          <span className="text-bold16 sm:text-h6 text-primary-light">
            «بانک کارگشایی»
          </span>{' '}
          ذخیره و نگهداری می‌شوند.
        </p>
        <a className="w-full" href="/">
          <button className="w-full sm:!w-[257px] flex items-center justify-center gap-2 bg-primary text-white bg-[#D4AF37] py-3 px-6 rounded-lg">
            <span>&nbsp;سرمایه گذاری در طلا</span>
          </button>
        </a>
      </div>
    )
  }
  
  export default HeroTextContent