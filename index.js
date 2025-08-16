import Link from "next/link"

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎮 Bienvenido a WePlay 2.0</h1>
      <p>Juega, gana monedas y sube de nivel 🚀</p>
      <div>
        <Link href="/login"><button>Iniciar Sesión</button></Link>
        <Link href="/register"><button>Registrarse</button></Link>
        <Link href="/shop"><button>Tienda</button></Link>
      </div>
    </div>
  )
}