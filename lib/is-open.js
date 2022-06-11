export default function IsOpen() {
  const date = new Date()
  const options = {
    weekday: 'long',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }

  const now = date.toLocaleString('en-US', options)

  const hour = date.toLocaleString('en-US', {hour: 'numeric', hour12: false,})
  const minute = date.toLocaleString('en-US', {minute: '2-digit'});
  const weekday = date.toLocaleString('en-US', {weekday: 'long'});

  console.log(weekday + " " + hour + ":" + minute)

  let status = 'closed';
  
  return (
    <div>
      <p id='time'>It is {now} we are {status}!</p>
    </div>
  )
}