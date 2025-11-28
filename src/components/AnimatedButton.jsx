export default function AnimatedButton({ 
  children, 
  className = '', 
  style = {},
  onClick,
  type = 'button'
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`mt-13 buy-btn ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}

