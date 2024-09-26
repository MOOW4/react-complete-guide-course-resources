export default function Button({ children, textOnly, className, ...props }) {
  return (
    <button className={`button ${textOnly ? 'text-button' : ''} ${className}`} {...props}>
      {children}
    </button>
  );
}