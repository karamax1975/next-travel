export async function _getDataFromAPI(srtingAPISection, controller){
  const response = await fetch(`api/${srtingAPISection}`,{signal: controller.signal})
  return response.json()
}