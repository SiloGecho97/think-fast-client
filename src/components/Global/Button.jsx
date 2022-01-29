import classnames from 'classnames'
import * as React from 'react'
import PropTypes from 'prop-types'

const classes = {
  base: 'focus:outline-none transition ease-in-out duration-300',
  disabled: 'opacity-50 cursor-not-allowed',
  pill: 'rounded-full',
  size: {
    small: 'px-2 py-1 text-sm',
    normal: 'px-4 py-2',
    medium: 'px-6 py-2 text-md rounded-sm',
    large: 'px-8 py-3 text-lg',
    extra: 'px-10 py-4 text-lg md:text-2xl',
    extra_2x: 'px-10 py-4 text-4xl',
  },
  variant: {
    primary:
      'bg-primary hover:bg-primary focus:ring-2 focus:ring-backgrd focus:ring-opacity-50 text-white',
    secondary:
      'bg-gray-200 hover:bg-blue-400 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-primary hover:text-white',
    accent:
      'bg-yellow-800 hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 text-white hover:text-white',
    danger:
      'bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white',
  },
}

const Button = ({
  type = 'button',
  className,
  variant = 'primary',
  size = 'normal',
  pill,
  disabled = false,
  children,
  ...props
}) => (
  <div className={classnames('', className)}>
    <button
      {...props}
      disabled={disabled}
      type={type}
      className={classnames(`
                ${classes.base}
                ${classes.size[size]}
                ${classes.variant[variant]}
                ${pill && classes.pill}
                ${disabled && classes.disabled}
                ${className}
            `)}
    >
      {children}
    </button>
  </div>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['submit', 'button']),
  className: PropTypes.string,
  pill: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large', 'extra']),
}

Button.defaultProps = {
  children: null,
  className: '',
}

export default Button
