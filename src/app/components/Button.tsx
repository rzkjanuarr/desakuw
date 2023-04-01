interface Props {
  text: string;
  type?: "primary" | "secondary";
  className?: string;
}

export default function Button(props: Props) {
  return (
    <button className={`px-4 py-2 bg-primary text-black hover:bg-green-500
    ${props.type === "secondary" && "bg-white border-2 border-black text-black"}
    ${props.className}`}
    >
      {props.text}
    </button>
  )
}
