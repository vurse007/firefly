export default function GlassNav({ children, className = '', style = {}, isScrolled = false }) {
  return (
    <nav
      className={`glass-effect fixed inset-x-0 top-0 z-50 p-4 slide-in ${isScrolled ? 'glass-effect-scrolled' : ''} ${className}`}
      style={style}
    >
      {children}
    </nav>
  );
}

