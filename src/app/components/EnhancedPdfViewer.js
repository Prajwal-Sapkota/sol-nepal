"use client"
import { useState } from "react"
import { RiDownloadLine, RiSwitchLine } from "react-icons/ri"

export default function EnhancedPdfViewer({ pdfUrl, title = "Document" }) {
  const [viewerType, setViewerType] = useState("object")

  const toggleViewerType = () => {
    setViewerType(viewerType === "object" ? "iframe" : "object")
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="p-4 border-b flex justify-between items-center">
        <button
          onClick={toggleViewerType}
          className="flex items-center px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-md text-sm transition-colors"
        >
          <RiSwitchLine className="mr-2" />
          Switch to {viewerType === "object" ? "Basic" : "Advanced"} Viewer
        </button>

        <a
          href={pdfUrl}
          download
          className="flex items-center px-3 py-1.5 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors text-sm"
        >
          <RiDownloadLine className="mr-2" /> Download PDF
        </a>
      </div>

      <div className="h-[600px] w-full overflow-hidden">
        {viewerType === "object" ? (
          <object data={pdfUrl} type="application/pdf" width="100%" height="100%" className="border-0">
            <p className="p-4 text-center">Unable to display PDF. Please try the basic viewer or download the file.</p>
          </object>
        ) : (
          <iframe src={pdfUrl} width="100%" height="100%" className="border-0" title={title}>
            <p className="p-4 text-center">Your browser doesn't support iframes. Please download the PDF instead.</p>
          </iframe>
        )}
      </div>
    </div>
  )
}

