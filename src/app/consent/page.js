"use client"
import { useState } from "react"
import { RiArrowLeftLine, RiDownloadLine } from "react-icons/ri"
import { FaFilePdf } from "react-icons/fa"
import dynamic from "next/dynamic"

const SPdfViewer = dynamic(() => import("../components/SPdfViewer"), {
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

const consentForms = [
  { id: 1, title: "Tracheostomy", file: "/documents/Tracheostomy.pdf" },
  { id: 2, title: "Thyroid Surgery", file: "/documents/Thyroid-surgery.pdf" },
  { id: 3, title: "Tympanoplasty", file: "/documents/Tympanoplasty.pdf" },
  { id: 4, title: "Tonsillectomy", file: "/documents/Tonsillectomy.pdf" },
  { id: 5, title: "Adenoidectomy", file: "/documents/Adenoidectomy.pdf" },
  { id: 6, title: "Consent for General ENT Procedure", file: "/documents/Consent-for-General-ENT-Procedure.pdf" },
  { id: 7, title: "Functional Endoscopic Sinus Surgery", file: "/documents/Functional-Endpscopic-sinus-surgery.pdf" },
  { id: 8, title: "General Anaesthesia", file: "/documents/General-anaesthesia.pdf" },
  { id: 9, title: "Local Anaesthesia", file: "/documents/Local-anaesthesia.pdf" },
  { id: 10, title: "Mastoid Surgery", file: "/documents/Mastoid-surgery.pdf" },
  { id: 11, title: "Parotidectomy", file: "/documents/Parotidectomy.pdf" },
  { id: 12, title: "Rhinoplasty", file: "/documents/Rhinoplasty.pdf" },
  { id: 13, title: "Rigid Bronchoscopy", file: "/documents/Rigid-bronchoscopy.pdf" },
  { id: 14, title: "Rigid Oesophagoscopy", file: "/documents/Rigid-oesophagoscopy.pdf" },
  { id: 15, title: "Septoplasty", file: "/documents/Septoplasty.pdf" },
  { id: 16, title: "Submandibular Gland Surgery", file: "/documents/Submandibular-Gland-Surgery.pdf" },
  { id: 17, title: "Stapes Surgery", file: "/documents/Stapes-surgery.pdf" },
]

export default function ConsentFormsPage() {
  const [selectedForm, setSelectedForm] = useState(null)

  const handleClick = (form) => {
    setSelectedForm(form)
  }

  const handleBack = () => {
    setSelectedForm(null)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mx-auto">
            <h1 className="text-3xl font-bold text-dark mb-6 text-center">Consent Forms</h1>
            {!selectedForm ? (
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {consentForms.map((form) => (
                  <li
                    key={form.id}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <button
                      onClick={() => handleClick(form)}
                      className="w-full text-left flex items-center text-lg font-medium text-gray-700 hover:text-primary transition-colors duration-200 focus:outline-none"
                    >
                      <FaFilePdf className="text-red-600 mr-3 text-xl flex-shrink-0" />
                      {form.title}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <button
                    onClick={handleBack}
                    className="text-lg text-gray-600 hover:text-primary flex items-center transition-colors duration-200"
                  >
                    <RiArrowLeftLine className="mr-2" />
                    Back to Consent Forms
                  </button>

                  <a
                    href={selectedForm.file}
                    download
                    className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors flex items-center"
                  >
                    <RiDownloadLine className="mr-2" /> Download PDF
                  </a>
                </div>

                <div className="mt-4 bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-primary p-4 sm:p-6">
                    <div className="flex items-center">
                      <FaFilePdf className="text-white text-2xl sm:text-3xl mr-3" />
                      <h2 className="text-xl sm:text-2xl font-semibold text-white">{selectedForm.title}</h2>
                    </div>
                  </div>
                  <div className="p-4">
                    <SPdfViewer pdfUrl={selectedForm.file} title={selectedForm.title} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

