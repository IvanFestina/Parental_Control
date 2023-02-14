import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const ArrowBackSvg = (props: SvgProps) => (
    <Svg
        width={6}
        height={12}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M5.528 1.533A.75.75 0 0 0 4.472.467l-1.795 1.78c-.676.669-1.228 1.217-1.62 1.704C.65 4.46.355 4.974.276 5.591a3.228 3.228 0 0 0 0 .817c.079.618.374 1.133.781 1.64.392.488.944 1.036 1.62 1.706l1.795 1.779a.75.75 0 1 0 1.056-1.066L3.765 8.72c-.716-.71-1.206-1.197-1.538-1.61-.323-.402-.434-.66-.463-.892a1.728 1.728 0 0 1 0-.436c.03-.232.14-.49.463-.891.332-.414.823-.902 1.538-1.611l1.763-1.747Z"
            fill="#1E1E1E"
        />
    </Svg>
)

export default ArrowBackSvg
