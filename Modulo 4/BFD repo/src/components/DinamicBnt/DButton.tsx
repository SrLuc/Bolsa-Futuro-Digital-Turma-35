import "./style.css"

interface DButtonProps {
    label: string;
}

const DButton = ({ label }: DButtonProps) => {
  return (
    <button className="dbtn">
      {label}
    </button>
  )
}
export default DButton
