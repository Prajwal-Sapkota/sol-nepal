import PdfViewer from "../components/PdfViewer";
import { FaFilePdf } from "react-icons/fa";

export default function ConstitutionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-7xl"> {/* Increased width */}
          <div className="mx-auto">
            <h1 className="text-3xl font-bold text-dark mb-6 text-center">Constitution</h1>
            <div className="mt-8 bg-primary-dark p-6 rounded-md shadow-lg">
              <div className="flex items-center mb-4">
                <FaFilePdf className="text-white text-2xl sm:text-3xl mr-3" />
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  SOL Nepal Constitution
                </h2>
              </div>
              <PdfViewer pdfUrl="/documents/constitution.pdf" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
