import useTimer from "./useTimer";

export function WorkShopTimer() {
  const count = useTimer();

  return <div>Count: {count}</div>;
}
