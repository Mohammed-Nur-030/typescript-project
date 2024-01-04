import React from 'react'

// Creating a type for Props
type HeadingProps={
    title:string
}

// It is Okay to let Typescript infer the return type of rafce function

const Heading = ({title}:HeadingProps) => {
  return (
    <div>
      {
        title
      }
    </div>
  )
}

export default Heading
