interface ButtonProps {
  label: string;
  onClick: () => void;
  wide?: boolean;
}

export default function Button({ label, onClick, wide }: ButtonProps) {
  return (
    <button className={`button ${wide ? "wide" : ""}`} onClick={onClick}>
      {label}
    </button>
  );
}
