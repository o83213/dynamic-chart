import { useCallback } from 'react'
const useHttp = (applyData) => {
  const sendRequest = useCallback(async () => {
    try {
      console.log('sendRequest!')
      const apiURL = '/api/v1/rest/datastore/301000000A-000082-041'
      const res = await fetch(apiURL)
      const data = await res.json()
      const record = data.result.records
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
        }
      })
      console.log('Sending request success!')
      applyData(filterData)
    } catch (error) {
      console.error(error)
    }
  }, [applyData])
  return { sendRequest }
}

export default useHttp
