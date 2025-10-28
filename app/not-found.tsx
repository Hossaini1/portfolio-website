import "./globals.css"
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">404 Opss</h1>
        <p className="text-5xl text-gray-600 mb-8 uppercase">Page not found</p>
        <a href="/" className="text-blue-600 hover:text-blue-500 text-lg">
          Back to homepage
        </a>
      </div>
    </div>
  )
}

