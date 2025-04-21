
interface IHeaderText {
  text: string;
  fontSize?: string | number;
  bottom?: string | number;
  classes?: string;
}

const HeaderText = ({
  text,
  fontSize = 22,
  bottom = 5,
  classes,
}: IHeaderText) => {

  const style = {
    fontSize: typeof fontSize === "number" ? `${fontSize}px` : fontSize,
    marginBottom: typeof bottom === "number" ? `${bottom}px` : bottom,
  };

  return (
    <div className={`mb-${bottom}`}>
      <span
        className={`text-[#343C6A] font-inter font-semibold ${classes}`}
        style={style}
      >
        {text}
      </span>
    </div>
  )
}

export default HeaderText;