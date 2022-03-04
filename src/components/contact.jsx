import nsarrow from "../Image/nsarrow.png";
import BigHeading from "./bigHeading";
import ShortHeading from "./shortHeadind";

export default function Contact() {
  return (
    <div id="ContactUs" className="h-screen flex  px-36 bg-[rgb(235,246,247)] ">
      <div className="  w-1/2 text-2xl mt-[20%]">
        <ShortHeading value="Contact Us" />
        <BigHeading value="Let’s Get in Touch!" />
      </div>
      <div className="  flex flex-col w-1/2 p-25 mt-[20%] space-y-2 ">
        <input
          className="rounded-2xl border grid-cols-1 h-16 p-3 w-[70%]"
          type="text"
          placeholder="Full Name"
        />
        <input
          className="rounded-2xl border grid-cols-1 h-16 p-3 w-[70%]"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="rounded-2xl border h-64 p-3 w-[70%]"
          type="text"
          placeholder="Message"
        />
        <button className="rounded-2xl border bg-white w-28 h-10">Send</button>
      </div>
    </div>
  );
}
