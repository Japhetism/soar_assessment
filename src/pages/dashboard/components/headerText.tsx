import { IHeaderText } from "../../../interfaces";

const HeaderText = ({
  text,
  fontSize = 22,
  bottom = 5,
  classes,
  onClick,
}: IHeaderText) => {

  const style = {
    fontSize: typeof fontSize === "number" ? `${fontSize}px` : fontSize,
    marginBottom: typeof bottom === "number" ? `${bottom}px` : bottom,
  };

  return (
    <div className={`mb-${bottom}`}>
      <button
        className={`text-[#343C6A] font-inter font-semibold ${classes}`}
        style={style}
        onClick={() => onClick && onClick()}
      >
        {text}
      </button>
    </div>
  )
}

export default HeaderText;