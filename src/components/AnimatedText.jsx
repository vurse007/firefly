export default function AnimatedText({ 
  children, 
  className = '', 
  style = {},
  as: Component = 'p'
}) {
  return (
    <Component
      className={`mt-8 max-w-2xl text-base md:text-lg font-light slide-in text-[var(--muted)] ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
}

