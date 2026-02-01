export default function Container({ children, className }) {
  return (
    <div className={`py-20 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );
}
