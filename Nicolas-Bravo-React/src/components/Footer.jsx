export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
          <p className="text-center mb-4">
            Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.
          </p>
          <p className="text-center">
            Email: <a href="mailto:info@tuempresa.com" className="text-blue-400 hover:underline">Nicolasbravo@edu.com.mx</a>
          </p>
          <p className="text-center">
            Teléfono: <a href="tel:+1234567890" className="text-blue-400 hover:underline">+52 (618) 000-000</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
