import React from 'react'
import { useCounterStore } from '../store/useCounterStore';

const Counter = () => {
  const { count , increment, reset,setNumber} = useCounterStore();

  const clear = () =>{
    //zustand로 담긴 세션 or로컬 스토리지 비워주기
    useCounterStore.persist.clearStorage();
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}> one up</button>
      <button onClick={reset}> reset</button>
      <button onClick={() => setNumber(3)}> setNumber</button>
      <button onClick={clear}> clear</button>
    </div>
  )
}

export default Counter