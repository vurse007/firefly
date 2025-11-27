export default function BrandText({ 
  children, 
  className = '', 
  style = {}
}) {
  return (
    <div
      className={`text-2xl font-light italic tracking-wider text-[var(--accent)] ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

