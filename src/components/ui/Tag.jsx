export default function Tag({ children }) {
  return (
    <span
      className="inline-block px-2.5 py-1 rounded text-xs font-medium"
      style={{
        background: 'rgba(79,140,255,0.1)',
        border: '1px solid rgba(79,140,255,0.2)',
        color: '#4F8CFF',
      }}
    >
      {children}
    </span>
  )
}
