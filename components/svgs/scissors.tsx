import * as React from 'react'

const ScissorsIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height={20}
      viewBox="0 0 23 20"
      width={23}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title />
      <path
        d="M8.5 4c0-2.2-1.8-4-4-4s-4 1.8-4 4 1.8 4 4 4c.6 0 1.1-.1 1.6-.4L8.5 10l-2.4 2.4c-.5-.3-1-.4-1.6-.4-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4c0-.6-.1-1.1-.4-1.6l2.4-2.4 7 7h4L8.1 5.6c.3-.5.4-1 .4-1.6zm-4 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-8.5c.3 0 .5.2.5.5s-.2.5-.5.5-.5-.2-.5-.5.2-.5.5-.5zm11-8.5h-4l-6 6 2 2 8-8z"
        fill="#fff"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default ScissorsIcon