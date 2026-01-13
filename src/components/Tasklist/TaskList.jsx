import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'


const TaskList = (props) => {

  return (
    <div id='tasklist' className='flex flex-nowrap scrollbar-hide items-center m-5 overflow-x-auto w-full h-80 gap-5'>
      {props.data.tasks.map(function(elem,idx){
       if(elem.active){
        return <AcceptTask key={idx} data={elem}/>
       }
       if(elem.newTask){
        return <NewTask key={idx} data={elem}/>
       }
       if(elem.completed){
        return <CompleteTask key={idx} data={elem}/>
       }
       if(elem.failed){
        return <FailedTask key={idx} data={elem}/>
       }
      })}
    
    </div>
  )
}

export default TaskList