import { IList } from "./List.interfaces";

const List = (props: IList) => {
  const { title, children } = props
  return (
    <div className="flex">
      <p className="font-semibold">{title}:&nbsp;</p>
      <p>{children}</p>
    </div>
  )
}

export default List;