import classes from './DropdownMenu.module.css'
import { useState, useEffect } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import DropdownItem from './DropdownItem'
const DropdownMenu = (props) => {
  const [open, setOpen] = useState(false)
  const [head, setHead] = useState('')
  const [value, setValue] = useState([])
  useEffect(() => {
    let valueArray = []
    if (props.data) {
      console.log(props.data)
      Object.entries(props.data).forEach((item) => {
        if (item[0].slice(0, 3) === '臺北市') valueArray.push(item[0])
      })
    }
    // console.log(valueArray)
    setValue(valueArray)
  }, [props.data])
  useEffect(() => {
    console.log(props.data)
    console.log(head)
    const newContent = props.data[head]
    console.log(newContent)
    props.onSetContent(newContent)
  }, [value, head])
  const setHeadHandler = (value) => {
    setHead(value)
    setOpen(false)
  }
  return (
    <div className={classes.dropdown}>
      <span>地區</span>
      <button
        id="link"
        className={classes.link}
        onClick={() => {
          setOpen((prev) => !prev)
        }}
      >
        <span>{head.slice(-3)}</span>
        <i>
          <AiOutlineDown />
        </i>
      </button>
      <div className={`${classes['dropdown-menu']} ${open && classes.active}`}>
        {value.map((item) => (
          <DropdownItem key={item} text={item} onChose={setHeadHandler} />
        ))}
      </div>
    </div>
  )
}

export default DropdownMenu
