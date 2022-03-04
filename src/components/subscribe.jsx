import pricing from "../Image/pricing.svg";
import ShortHeading from "./shortHeadind";
import BigHeading from "./bigHeading";
import { ButtonPrimary } from "./button";

export default function Subscribe() {
  return (
    <div className=" h-screen  flex flex-row  items-center justify-around ">
      <div className="flex flex-col space-y-4">
        <ShortHeading value="subscribe to our newsletter" />
        <BigHeading value="Be the first to know" />
        <input
          className="rounded-lg border grid-cols-1 h-10 p-3"
          type="text"
          placeholder="Enter Your Email Address"
        />
        <ButtonPrimary value="subscribe" class="w-[40%]" />
      </div>
      <img src={pricing} />
    </div>
  );
}
