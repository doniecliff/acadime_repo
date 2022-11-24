import {useState} from 'react'

function useToggle(initialState) {
  const [toggle, setToggle] = useState(initialState)
  // setToggle(!toggle)
  return [toggle, setToggle]
}

export default useToggle