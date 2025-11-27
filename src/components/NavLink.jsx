export default function NavLink({ 
  href = "#", 
  children, 
  className = '' 
}) {
  return (
    <a 
      href={href} 
      className={`nav-link ${className}`}
    >
      {children}
    </a>
  );
}

