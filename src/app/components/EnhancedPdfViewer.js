"use client"
import { RiDownloadLine } from "react-icons/ri"

export default function EnhancedPdfViewer({ pdfUrl, title = "Document" }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="p-4 border-b flex justify-end items-center">
        <a
          href={pdfUrl}
          download
          className="flex items-center px-3 py-1.5 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors text-md"
        >
          <RiDownloadLine className="mr-2" /> Download PDF
        </a>
      </div>

      <div className="h-[600px] w-full overflow-hidden">
        <object data={pdfUrl} type="application/pdf" width="100%" height="100%" className="border-0">
          <p className="p-4 text-center">
            Unable to display PDF. Please download the file instead.
          </p>
        </object>
      </div>
    </div>
  )
}
