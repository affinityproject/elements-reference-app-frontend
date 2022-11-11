import { SVGAttributes } from 'react'

export default (props: SVGAttributes<SVGElement>) => (
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 19.444h20v-2.407H2v2.407zm0-6.018h20v-2.408H2v2.408zM2 5v2.407h20V5H2z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
