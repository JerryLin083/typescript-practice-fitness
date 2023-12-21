interface Props {
  className?: string;
  data: object[];
  render(prop: object, index?: number): React.ReactNode;
}

const ListPattern = ({ data, render, className }: Props) => {
  return <ul className={className}>{data.map(render)}</ul>;
};

export default ListPattern;
