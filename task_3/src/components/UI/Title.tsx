type TitleProps = {
  title: string;
};

function Title({ title }: TitleProps) {
  return <p className="text-lg font-semibold text-purple-800">{title}</p>;
}

export default Title;
