
export default function App() {
  const [time, setTime] = React.useState(0);
  const [realTime, setRealTime] = React.useState(false);

  React.useEffect(() => {
    let interval;
    if (realTime) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [realTime]);

  const handelclick = () => {
    setRealTime(!realTime);
  };
  return (
    <div className="App">
      <button onClick={handelclick}>{realTime ? "pause" : "start"}</button>
      <div>{time}</div>
    </div>
  );
}
