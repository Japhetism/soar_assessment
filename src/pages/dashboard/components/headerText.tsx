
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
  return (
    <div className={`mb-${bottom}`}>
      <span className={`text-[#343C6A] text-[${fontSize}px] font-inter font-semibold ${classes}`}>
        {text}
      </span>
    </div>
  )
}

export default HeaderText;