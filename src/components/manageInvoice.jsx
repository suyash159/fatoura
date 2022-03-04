import Home2 from "../Image/Home2.svg";
import nsarrow from "../Image/nsarrow.png";
import BigHeading from "./bigHeading";
import { ButtonPrimary } from "./button";
import ShortHeading from "./shortHeadind";

export default function ManageInvoices() {
  return (
    <div className="h-screen py-56  flex flex-row  ">
      <div className="w-1/2 py- justify-end">
        <img src={Home2} />
      </div>
      <div className="w-1/2 pl-56 space-y-5 justify-end">
        <ShortHeading value="invoicing made simple" class="justify-end" />
        <BigHeading
          value="Manage Invoices Securely with Ease"
          class="text-right"
        />
        <p className="font-face-gb text-2xl text-right">
          Fatoura.work was built to serve freelancers and business owners with a
          complete suite of invoicing & payment tools to advance their business.
        </p>

        <p className="font-face-gb text-2xl flex text-right">
          Invoicing & Payments Every feature is geared towards accurate and
          secure invoicing and getting you paid.
        </p>
        <ButtonPrimary value="Start Now" class="ml-auto" />
      </div>
    </div>
  );
}
