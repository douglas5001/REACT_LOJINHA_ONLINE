import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm mt-8">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-2">LOJA</h3>
          <p>Sua plataforma para projetos e serviços freelancer de qualidade.</p>
        </div>

        <div>
          <h3 className="text-white text-lg font-bold mb-2">Contato</h3>
          <ul className="space-y-2">
            <li>📧 contato@loja.com</li>
            <li>📞 (11) 99999-9999</li>
            <li>📍 São Paulo, SP</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-bold mb-2">Redes Sociais</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
            <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-400">
        © {new Date().getFullYear()} LOJA. Todos os direitos reservados.
      </div>
    </footer>
  )
}

export default Footer
