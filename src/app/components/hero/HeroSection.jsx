// components/hero/HeroSection.jsx
import HeroTextContent from "./HeroTextContent"
import HeroFormBox from "./HeroFormBox"
import HeroImage from "./HeroImage"

const HeroSection = () => {
    return (
        <div className="flex flex-col bg-gold">
            <div className="relative h-[850px] overflow-hidden">
                <HeroImage />
                <div className="absolute top-0 left-0 w-full h-full flex items-center bg-[linear-gradient(180deg,#f5f5f700_10%,#000000_100%)]">
                    <div className="2xl:max-w-[1436px] mx-[50px] 2xl:mx-auto flex items-end gap-[5%] pb-8">
                        <HeroTextContent />
                        <HeroFormBox />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HeroSection