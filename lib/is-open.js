export default function IsOpen() {
  const date = new Date()
  const options = {
    weekday: 'long',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }

  const now = date.toLocaleString('en-US', options)

  return (
    <div>
      <p id='time'>It is {now}.</p>
    </div>
  )
}