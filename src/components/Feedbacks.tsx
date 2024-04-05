import React from 'react'
import {motion} from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'
import FeedbackCard from './FeedbackCard'


const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className='padding bg-tertiary rounded-2xl min-h-[300px]'>
        <motion.div
          variants={textVariant()}
        >
          <p className='sectionSubText'>
            What others say
          </p>
          <h2 className='sectionHeadText'>Testimonials.</h2>
        </motion.div>
      </div>
      <div className='paddingX -mt-20 pb-14 flex flex-wrap gap-7'>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} testimonial={testimonial}/>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, 'feedback')