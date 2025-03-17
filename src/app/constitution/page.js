"use client"
import { FaFilePdf, FaDownload } from "react-icons/fa"
import dynamic from "next/dynamic"

const EnhancedPdfViewer = dynamic(() => import("../components/EnhancedPdfViewer"), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] flex items-center justify-center bg-gray-100 rounded-lg">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600">Loading PDF viewer...</p>
      </div>
    </div>
  ),
})

export default function ConstitutionPage() {
  const pdfUrl = "/documents/constitution.pdf"

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mx-auto">
            <h1 className="text-3xl font-bold text-dark mb-6 text-center">Constitution</h1>

            <div className="mb-4 flex justify-end">
              <a
                href={pdfUrl}
                download
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors flex items-center"
              >
                <FaDownload className="mr-2" /> Download PDF
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary p-4 sm:p-6">
                <div className="flex items-center">
                  <FaFilePdf className="text-white text-2xl sm:text-3xl mr-3" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-white">SOL Nepal Constitution</h2>
                </div>
              </div>

              <div className="p-4">
                <EnhancedPdfViewer pdfUrl={pdfUrl} title="SOL Nepal Constitution" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

