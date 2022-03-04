export default function BigHeading(props) {
  return (
    <div className={`flex flex-row ${props?.class} text-5xl font-face-geb `}>
      {props.value}
    </div>
  );
}
