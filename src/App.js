import './App.css'
import { useEffect, useState } from 'react'
import { scaleBand } from 'd3'
import Content from './components/Content/Content'
import DropdownMenu from './components/dropdown/DropdownMenu'
function App() {
  const [data, setData] = useState([])
  const [content, setContent] = useState({})
  useEffect(() => {
    const fetchingData = async () => {
      try {
        console.log('fecthing data')
        const apiURL = '/api/v1/rest/datastore/301000000A-000082-041'
        const res = await fetch(apiURL)
        console.log(res)
        const data = await res.json()
        console.log(data)
        const record = data.result.records
        console.log(record)
        const filterData = {}
        record.forEach((el) => {
          if (filterData[el.site_id]) {
            const {
              site_id,
              household_business_f,
              household_business_m,
              household_ordinary_f,
              household_ordinary_m,
              household_single_f,
              household_single_m,
            } = el
            filterData[site_id].household_business_f += Number(
              household_business_f,
            )
            filterData[site_id].household_business_m += Number(
              household_business_m,
            )
            filterData[site_id].household_ordinary_f += Number(
              household_ordinary_f,
            )
            filterData[site_id].household_ordinary_m += Number(
              household_ordinary_m,
            )
            filterData[site_id].household_single_f += Number(household_single_f)
            filterData[site_id].household_single_m += Number(household_single_m)
          } else {
            const {
              site_id,
              household_business_f,
              household_business_m,
              household_ordinary_f,
              household_ordinary_m,
              household_single_f,
              household_single_m,
            } = el
            filterData[`${site_id}`] = {
              site_id,
              household_business_f: Number(household_business_f),
              household_business_m: Number(household_business_m),
              household_ordinary_f: Number(household_ordinary_f),
              household_ordinary_m: Number(household_ordinary_m),
              household_single_f: Number(household_single_f),
              household_single_m: Number(household_single_m),
            }
            // console.log(filterData[`${site_id}`])
          }
        })
        console.log(filterData)
        setData(filterData)
      } catch (error) {
        console.error(error)
      }
    }
    fetchingData()
  }, [])
  useEffect(() => {
    console.log('data state change!')
  }, [data])
  const changeContent = (data) => {
    setContent(data)
  }
  return (
    <div>
      <DropdownMenu data={data} onSetContent={changeContent} />
      {content && <Content content={content} />}
    </div>
  )
}

export default App
