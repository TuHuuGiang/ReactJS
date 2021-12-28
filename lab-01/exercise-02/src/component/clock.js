import "../assets/css/style.css";

function Clock() {
    let time = new Date();
    let day = time.getHours > 12 ? 'PM' : 'AM'
    let hours = time.getHours() % 12;
    hours = hours ? hours : 12;
    let minutes = time.getMinutes() < 10 ? '0'+time.getMinutes() : time.getMinutes();

  return (
    <>
      <h1 class="title">Hello, I am Clock</h1>
      <h2 class="clock">Now is {hours}:{minutes}:{time.getSeconds()} {day}</h2>
    </>
  );
}

export default Clock;