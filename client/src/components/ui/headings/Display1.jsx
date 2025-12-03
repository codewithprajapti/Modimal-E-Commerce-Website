export default function Display1({ className, children, ...props }) {
  return (
    <h1
      className={cn('text-[64px] font-bold leading-tight', className)}
      {...props}
    >
      {children}
    </h1>
  );
}


