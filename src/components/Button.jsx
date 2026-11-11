export default function Button({ href, children, secondary = false, ...props }) {
  return (
    <a
      className={secondary ? 'button button-secondary' : 'button button-primary'}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
}
