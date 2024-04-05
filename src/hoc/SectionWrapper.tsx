import React from 'react'
import {motion} from 'framer-motion'
import { staggerContainer } from '../utils/motion'

type SectionWrapperProps = {
  idName: string;
}

function SectionWrapper<T extends SectionWrapperProps>(Component: React.ComponentType<T>, idName: string){
  return (props: T) => {
    return (
          <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView='show'
            viewport={{once: true, amount: 0.25}}
            className='padding max-w-7xl mx-auto relative z-0'
          >
            <span className='hash-span' id={idName}>
              &nbsp;
            </span>
            <Component {...props}/>
          </motion.section>
    )
  }
}

export default SectionWrapper