import nsarrow from "../Image/nsarrow.png";
import BigHeading from "./bigHeading";
import { Button, ButtonPrimary } from "./button";
import ShortHeading from "./shortHeadind";

export default function Pricing() {
  const plans = [
    {
      planFeature: "Create (Invoices, Bills, Quotes, Purchase Orders)",
      free: "Yes",
      basic: "Yes",
      pro: "Yes",
    },
    {
      planFeature: "Save Invoices",
      free: "Yes",
      basic: "Yes",
      pro: "Yes",
    },
    {
      planFeature: "Get paid through PayPal",
      free: "No",
      basic: "No",
      pro: "Yes",
    },
    {
      planFeature: "Send Invoice by email",
      free: "Yes",
      basic: "Yes",
      pro: "Yes",
    },
    {
      planFeature: "Search invoices by date range and type",
      free: "Yes",
      basic: "Yes",
      pro: "Yes",
    },
    {
      planFeature: "Pay now by email",
      free: "Yes",
      basic: "Yes",
      pro: "Yes",
    },
    {
      planFeature: "Track Payments",
      free: "Yes",
      basic: "Yes",
      pro: "Yes",
    },
    {
      planFeature: "Export in CSV and PDF",
      free: "Yes",
      basic: "Yes",
      pro: "Yes",
    },
    {
      planFeature: "Multi-Currency",
      free: "Yes",
      basic: "Yes",
      pro: "Yes",
    },
    {
      planFeature: "Sequential Invoice Numbering",
      free: "Yes",
      basic: "Yes",
      pro: "Yes",
    },
    {
      planFeature: "Form Limitation",
      free: "10",
      basic: "1500",
      pro: "5000",
    },
  ];

  return (
    <>
      <div id="Pricing" className="max-h-screen mt-4 space-y-8">
        <div className=" w-25% flex flex-col ">
          <ShortHeading value="pricing" />
          <BigHeading value="Choose the plan which suits you" />
        </div>
        <div className="flex flex-col  p-5  bg-[#ebf6f7] rounded-2xl  table-auto bg={#ebf6f7} ">
          <table className="">
            <tr className="py-8    border-b-2 ">
              <th className="w-1/4">Plan Features</th>
              <th>
                Free <br />
                $0/year
              </th>
              <th>
                Basic <br />
                $90/year
              </th>
              <th>
                Pro <br />
                $140/year
              </th>
            </tr>
            {plans.map((item, i) => {
              return (
                <tr className="py-8 h-16 border-b-2  " key={i}>
                  <td className="GilroyBold ">{item.planFeature}</td>
                  <td className="text-center GilroyBold ">{item.free}</td>
                  <td className="text-center GilroyBold ">{item.basic}</td>
                  <td className="text-center GilroyBold ">{item.pro}</td>
                </tr>
              );
            })}
            <tr className="p-5 rounded-lg  ">
              <td></td>
              <td className="text-center">
                <ButtonPrimary value="start" />
              </td>
              <td className="text-center">
                <Button value="Get This" />
              </td>
              <td className="text-center">
                <Button value="Get This" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
