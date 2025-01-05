import React,{useId} from 'react'
import PropTypes from 'prop-types';

function Select({
  options,
  label,
  className,
  ...props},ref) {
    const id=useId()
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className=''></label>}
      <select
      {...props}
      id={id}
      ref={ref}
      className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >

        {options?.map((option)=>(
          <option key={option} value={option}>
          {option}
        </option>))}
      </select>
    </div>
    
  )
}
Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
};


export default React.forwardRef(Select)