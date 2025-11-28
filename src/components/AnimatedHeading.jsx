export default function AnimatedHeading({ 
  children, 
  className = '', 
  style = {},
  as: Component = 'h1'
}) {
  return (
    <Component
      className={`text-5xl font-light leading-none tracking-tight md:text-7xl text-[var(--text)] ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
}

