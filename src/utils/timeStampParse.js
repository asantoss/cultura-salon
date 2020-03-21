export default function timeStampParse(timestamp) {
  const date = new Date(timestamp * 1000)
  const month = date.toLocaleString("default", { month: "long" })
  const day = date.getDay()
  const year = date.getFullYear()
  return `${month} ${day}, ${year}`
}
