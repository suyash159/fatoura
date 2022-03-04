import nsarrow from "../Image/nsarrow.png";

export default function ShortHeading(props) {
  return (
    <div
      className={`flex flex-row font-face-gb  text-2xl space-x-1 items-center ${props?.class}`}
    >
      <img src={nsarrow} className="my-1 w-4 h-4"></img>
      <h3>{props.value}</h3>
    </div>
  );
}
