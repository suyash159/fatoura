export function Button(props) {
  return (
    <button
      className={`${props?.class} flex flex-row border items-center rounded-2xl px-10 py-4 bg-[#0c4d71] hover:bg-[#0b4463] text-white font-face-gb text-sm `}
    >
      {props.value}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="mx-1 my-1 w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </button>
  );
}
export function ButtonPrimary(props) {
  return (
    <button
      className={`flex flex-row border items-center rounded-2xl px-10 py-4 font-face-gb text-sm ${props?.class}`}
    >
      {props.value}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="mx-1 my-1 w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </button>
  );
}
