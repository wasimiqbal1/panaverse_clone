import {FC} from "react"

const Button : FC<{text:string}> = ({text}) => {
  return (
    <button className="mt-3 mb-6 text-bold h-10 px-5 text-white transition-colors duration-150 bg-teal-600 rounded-full focus:shadow-outline hover:bg-teal-800">{text} </button>
  )
}

export default Button