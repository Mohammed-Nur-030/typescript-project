import React ,{ReactNode} from 'react'

//we are using gerneics
interface listProps<T>{
    items:T[],

    //render function
    render:(item:T)=>ReactNode

}


// correctly uses generics to handle different types of items.
const List = <T,>({items,render}:listProps<T>) => {
  return (
    <div>
      <ul>
        {
            items.map((item,i)=>(
                <li key={i}>
                    {render(item)}
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default List
