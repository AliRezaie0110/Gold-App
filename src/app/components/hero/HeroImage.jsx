import Image from "next/image";

const HeroImage = () => (
    <div className=" sm:block relative max-h-[850px] overflow-hidden">
        <Image
            alt="Home Background Image"
            loading="lazy"
            width={300}
            height={300}
            decoding="async"
            className="w-full"
            style={{ color: 'transparent' }}
            sizes="100vw"
            src="/homeBackgroundDesktop.webp"
        />
    </div>
);

export default HeroImage;
