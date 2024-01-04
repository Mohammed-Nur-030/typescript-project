import React ,{ReactNode} from 'react'


type sectionProps={
    title?:string,
    children: ReactNode,
}

// we made title as default parameter because we made string as optional
const Section = ({children,title="Default Heading"}:sectionProps) => {
  return (
    <div>
      <h2>
        {title}
      </h2>
      <p>
        {children}
      </p>
    </div>
  )
}

export default Section
