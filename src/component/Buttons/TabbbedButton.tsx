
interface TabbedProps{
    list:string[];
    setPicked: Function,
    picked:string,
    smallText?:boolean
}
export const TabbbedButton = (props:TabbedProps) => {
    const {list, picked, setPicked, smallText} = props
    // console.log(picked)
  return (
    <div className={`flex text-black ${!smallText? 'text-[24px]':''}font-800`}>
        {list.map((item)=>
        <div onClick={()=>setPicked(item)} className={` mx-4 cursor-pointer ${picked===item&&'border-b-4 border-b-purple-800'} px-2`}>
          {item}  
        </div>)}
    </div>
  )
}
