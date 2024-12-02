import hero from "@/app/assets/landingHero2.png";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="h-screen w-screen flex flex-col items-center tracking-widest text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${hero.src})`,
        backgroundSize: "cover",
      }}
    >
      <div className={"flex flex-col my-[32px] z-10 h-1/2 justify-between"}>
        <div className={"flex flex-col"}>
          <span className={"text-white text-5xl font-serif"}>
            Amber & Aroma
          </span>
          <span className={"text-white text-xl font-mono"}>Coffee & Tea</span>
        </div>
        <div>
          <p className={"text-white italic font-serif"}>
            Exceptional coffee, artisanal matcha, premium teas, and freshly
            baked pastries crafted in-house.
          </p>
          <div className={"flex flex-row justify-evenly mt-[32px] font-mono"}>
            <Link
              className={
                "text-xl relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              }
              href={"/menu"}
            >
              Menu
            </Link>
            <Link
              className={
                "text-xl relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              }
              href={"/location"}
            >
              Location
            </Link>
            <Link
              className={
                "text-xl relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              }
              href={"#"}
            >
              About us
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    </div>
  );
}
