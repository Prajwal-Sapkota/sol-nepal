"use client"

export default function SPdfViewer({ pdfUrl, title = "Document" }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="h-[600px] w-full overflow-hidden rounded-lg border">
        <object data={pdfUrl} type="application/pdf" width="100%" height="100%">
          <p className="p-4 text-center">
            It appears you don't have a PDF plugin for this browser.
            <a
              href={pdfUrl}
              download
              className="block mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark inline-block mx-auto w-fit"
            >
              Download the PDF
            </a>
          </p>
        </object>
      </div>
    </div>
  )
}

