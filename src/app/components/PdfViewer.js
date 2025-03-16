"use client";
import dynamic from "next/dynamic";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const Viewer = dynamic(
  async () => {
    const { Worker, Viewer } = await import("@react-pdf-viewer/core");
    const { defaultLayoutPlugin } = await import("@react-pdf-viewer/default-layout");
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return ({ pdfUrl }) => (
      <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`}>
        <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    );
  },
  { ssr: false }
);

export default function PdfViewer({ pdfUrl, title }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>
      <div className="h-[600px] w-full overflow-hidden rounded-lg border">
        <Viewer pdfUrl={pdfUrl} />
      </div>
    </div>
  );
}
