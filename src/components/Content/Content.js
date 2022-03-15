const Content = (props) => {
  return (
    <div>
      <h3>{props.content.site_id}</h3>
      <div>
        <h4>共同生活戶</h4>
        <p>男: {props.content.household_ordinary_m}人</p>
        <p>女: {props.content.household_ordinary_f}人</p>
      </div>
      <div>
        <h4>獨立生活戶</h4>
        <p>男: {props.content.household_single_m}人</p>
        <p>女: {props.content.household_single_f}人</p>
      </div>
    </div>
  )
}
export default Content
