import './App.css'
import Datepicker from './components/Datepicker'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Hello World! 🚀
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Welcome to your React app built with Vite and styled with Tailwind CSS!
        </p>
        <p className="text-gray-500 mb-6">
          This is a simple Hello World page created following the Vite guide with Tailwind CSS integration.
        </p>
        
        {/* Datepicker Component */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select a date:
          </label>
          <Datepicker />
        </div>
        
        <div className="mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
