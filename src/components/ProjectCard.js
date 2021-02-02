import React from 'react'
import { Card } from '@aragon/ui'

export default ({ children }) => {
    return (
        <Card>
            {children}
        </Card>
    )
}


// // Base icon
// const IconBase = React.memo(({ src, size, alt = '', ...props }) => (
//     <img {...props} src={src} width={size} height={size} alt={alt} />
//   ))