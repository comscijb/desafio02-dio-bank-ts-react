import './Button.css'

interface ButtonProps {
  onClick: () => void;
  content: string;
  children?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  return (
    <button className="Button" onClick={props.onClick}>
      {props.content}
    </button>
  )
}
