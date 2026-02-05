import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTimes, FaDownload, FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const PublicationViewer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [pdfPath, setPdfPath] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const pdfParam = searchParams.get("pdf");
    const titleParam = searchParams.get("title");

    if (pdfParam) {
      try {
        // Decode the path - encodeURIComponent was used when navigating, so decode it
        let decodedPath = decodeURIComponent(pdfParam);
        // Ensure the path starts with / if it's a relative path
        if (!decodedPath.startsWith("http") && !decodedPath.startsWith("/")) {
          decodedPath = "/" + decodedPath;
        }
        setPdfPath(decodedPath);
        setTitle(titleParam ? decodeURIComponent(titleParam) : "Publication");
        setLoading(false);
      } catch (err) {
        console.error("Error decoding PDF path:", err);
        setError(true);
        setLoading(false);
      }
    } else {
      // If no PDF parameter, redirect to publications page
      navigate("/publications");
    }
  }, [searchParams, navigate]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = pdfPath.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBack = () => {
    navigate("/publications");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange mb-4"></div>
          <p className="text-gray-600 font-poppins">Loading publication...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="max-container max-w-full w-full min-h-screen bg-gray-50 font-poppins">
      {/* Header */}
      <motion.div
        className="bg-white shadow-md sticky top-0 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.button
                onClick={handleBack}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaArrowLeft />
                <span className="hidden sm:inline">Back to Publications</span>
              </motion.button>
              <h1 className="text-lg sm:text-xl font-bold text-gray-800 truncate max-w-md sm:max-w-lg">
                {title}
              </h1>
            </div>
            <motion.button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-orange text-white rounded-lg hover:bg-orange/90 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              <span className="hidden sm:inline">{t("common.download")}</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* PDF Viewer */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {error ? (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <FaExclamationTriangle className="text-orange text-6xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Unable to Load PDF</h2>
            <p className="text-gray-600 mb-6">
              There was an error loading the PDF document. Please try downloading it instead or view it directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-3 bg-orange text-white rounded-lg hover:bg-orange/90 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                <span>Download PDF</span>
              </motion.button>
              <motion.a
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Open in New Tab</span>
              </motion.a>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-[calc(100vh-200px)] min-h-[600px] relative">
              <object
                data={pdfPath}
                type="application/pdf"
                className="w-full h-full"
                style={{ minHeight: "600px" }}
              >
                <iframe
                  src={pdfPath}
                  className="w-full h-full border-0"
                  title={title}
                  style={{ minHeight: "600px" }}
                />
                <div className="p-12 text-center">
                  <FaExclamationTriangle className="text-orange text-6xl mx-auto mb-4" />
                  <p className="text-gray-600 mb-6">
                    Your browser does not support PDFs. Please download the PDF to view it.
                  </p>
                  <motion.button
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-6 py-3 bg-orange text-white rounded-lg hover:bg-orange/90 transition-colors duration-300 mx-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaDownload />
                    <span>Download PDF</span>
                  </motion.button>
                </div>
              </object>
              {/* Fallback message if PDF doesn't load */}
              <div className="absolute bottom-4 right-4 z-10">
                <motion.a
                  href={pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-orange/90 text-white rounded-lg hover:bg-orange transition-colors duration-300 text-sm shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Open in New Tab</span>
                </motion.a>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default PublicationViewer;
