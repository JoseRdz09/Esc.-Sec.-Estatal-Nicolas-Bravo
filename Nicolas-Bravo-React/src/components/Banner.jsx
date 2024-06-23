export default function banner() {
  return (
    <div className="relative w-full h-1/2">
      <img
        src='../img/home2.png'
        alt='imagen logotipo'
        className="w-full h-full object-cover filter brightness-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4 whitespace-pre-line text-center">
          BIENVENIDOS A LA ESC. SEC.<br />ESTATAL NICOLAS BRAVO
        </h1>
        <p className="text-lg mb-4 text-white">Inspirando mentes, construyendo futuros</p>
        <button className="px-4 py-2 bg-picton-blue-400 hover:bg-blue-700 text-white font-bold rounded-lg">
          Conócenos
        </button>
      </div>
    </div>
  )
}
