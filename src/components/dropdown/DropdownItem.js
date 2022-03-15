import classes from './DropdownItem.module.css'
const DropdownItem = (props) => {
  return (
    <div
      className={classes.item}
      onClick={() => {
        props.onChose(props.text)
      }}
    >
      {props.text.slice(-3)}
    </div>
  )
}

export default DropdownItem
