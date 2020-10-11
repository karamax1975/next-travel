export async function _getDataFromAPI(srtingAPISection){
  const response = await fetch(`api/${srtingAPISection}`)
  return response.json()
}