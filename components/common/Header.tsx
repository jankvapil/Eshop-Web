
export default function Header() {
  return (
    <header 
      style={{
        display: 'block',
        width: '100%',
        height: 100,
        backgroundImage: `url('./bgimg.jpeg')`,
      }}
    >
      <h1 
        style={{
          color: '#fff',
          padding: '20px 0 0 10px',
        }}
      >
        GPU Store
      </h1>
    </header>
  )
}
