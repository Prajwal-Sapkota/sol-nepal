"use client"
import { useState } from "react"
import { Worker, Viewer } from "@react-pdf-viewer/core"
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"
import "@react-pdf-viewer/core/lib/styles/index.css"
import "@react-pdf-viewer/default-layout/lib/styles/index.css"

// Import the worker directly from pdfjs-dist
import { pdfjsVersion } from "pdfjs-dist/package.json"

export default function PdfViewer({ pdfUrl, title = "Document" }) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Create the plugin instance once
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  // Use the correct worker URL based on the installed version
  const workerUrl = `https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="h-[600px] w-full overflow-hidden rounded-lg border relative">
        {/* Error handling */}
        {error && (
          <div className="absolute inset-0 bg-red-50 text-red-700 p-6 rounded-lg z-10">
            <h3 className="text-lg font-medium mb-2">Error loading PDF</h3>
            <p>{error.message}</p>
            <div className="mt-4">
              <a
                href={pdfUrl}
                download
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark inline-block mr-4"
              >
                Download PDF
              </a>
              <button
                onClick={() => {
                  setError(null)
                  setIsLoading(true)
                }}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 inline-block"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {!error && (
          <Worker workerUrl={workerUrl}>
            <div style={{ height: "100%", width: "100%" }}>
              <Viewer
                fileUrl={pdfUrl}
                plugins={[defaultLayoutPluginInstance]}
                onDocumentLoad={() => {
                  console.log("PDF document loaded successfully")
                  setIsLoading(false)
                }}
                onError={(err) => {
                  console.error("PDF loading error:", err)
                  setError(err)
                  setIsLoading(false)
                }}
              />
            </div>
          </Worker>
        )}

        {/* Loading state */}
        {isLoading && !error && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600">Loading PDF...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

