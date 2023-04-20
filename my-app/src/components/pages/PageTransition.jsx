import {motion} from 'framer-motion'

// const opacityAnimation ={
//     initial: {opacity:0},
//     animate: {opacity:1},
//     exit: {opacity:0}
// }

const rotateAnimation ={
    initial: {rotateY:90},
    animate: {rotateY:0},
    exit: {rotateY:-90}
}

const PageTransition = ({children}) => {
  return (
    <motion.div
    transition={{ease:"easeInOut",duration:0.5}}
    variants={rotateAnimation}
    initial='initial'
    animate='animate'
    exit='exit'
    >
{children}
    </motion.div>
  )
}

export default PageTransition;