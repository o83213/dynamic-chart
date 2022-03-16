import './App.css'
import { useEffect, useState } from 'react'
import DropdownMenu from './components/dropdown/DropdownMenu'
import useHttp from './hooks/useHttp'
import BarChart from './components/Content/BarChart'
import logo from './picture/taipeilogo.png'
const getMax = (data) => {
  let max = 0
  if (data)
    Object.entries(data).forEach((el) => {
      if (el[0].includes('臺北市')) {
        Object.entries(el[1]).forEach((item) => {
          if (Number(item[1]) > max) {
            max = item[1]
          }
        })
      }
    })
  console.log(max)
  return max
}
function App() {
  const [data, setData] = useState([])
  const [content, setContent] = useState({})
  const { sendRequest } = useHttp(setData)
  useEffect(() => {
    sendRequest()
  }, [sendRequest])
  const changeContent = (data) => {
    setContent(data)
  }
  console.log(getMax(data))
  const contentMax = (getMax(data) / 10000).toFixed() * 10000
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="chart">
        <DropdownMenu data={data} onSetContent={changeContent} />
        {content && <BarChart content={content} max={contentMax} />}
      </div>
    </div>
  )
}

export default App
