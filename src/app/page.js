export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col max-w-[560] ">
      <form className="px-8 mt-10">
        <div className="flex flex-wrap  mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Nombre completo
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="nick"
              type="text"
            />
            {/* <p className="text-gray-600 text-xs italic">Remove if not needed</p> */}
          </div>
        </div>
        <div className="flex flex-wrap  mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
            />
            <p className="text-gray-600 text-xs italic">
              Lo necesitamos para poder brindarle una respuesta!
            </p>
          </div>
        </div>
        <div className="flex flex-wrap  mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Su consulta
            </label>
            <textarea
              className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
            ></textarea>
            <p className="text-gray-600 text-xs italic">
              ¡Contanos que tipo de seguro estas buscando!
            </p>
          </div>
        </div>
        <div className="">
          <div className="max-[553px]:flex  flex-col gap-3 ">
            <button
              className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mx-2 "
              type="button"
            >
              Contactenos por Email
            </button>
            <button
              className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mx-2 "
              type="button"
            >
              Contactenos por Whatsapp
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
