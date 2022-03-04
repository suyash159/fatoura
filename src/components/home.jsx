import Home1 from "../Image/Home.png";
import BigHeading from "./bigHeading";
import { Button, ButtonPrimary } from "./button";
import ShortHeading from "./shortHeadind";

export default function Home() {
  return (
    <>
      <div
        id="Home"
        name="Home"
        className=" flex flex-col items-center my-28 h-screen space-y-5"
      >
        <ShortHeading value="invoicing made simple" />
        <BigHeading value="Use Fatoura and win back your time" />
        <div className="flex  justify-center space-x-5 ">
          <Button value="See All Feature"></Button>
          <ButtonPrimary value="Start Now" />
        </div>
        <div className="">
          <img src={Home1} className="" />
        </div>
      </div>
    </>
  );
}
