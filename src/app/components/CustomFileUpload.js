"use client"
import { useState } from "react"
import { RiUploadCloud2Line, RiCloseCircleLine } from "react-icons/ri"

const CustomFileUpload = ({ register, name, label, required, error, multiple = false }) => {
  const [files, setFiles] = useState([])
  const [fileNames, setFileNames] = useState([])

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      const selectedFiles = Array.from(event.target.files)
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"]
      const maxSize = 2 * 1024 * 1024
      
      const validFiles = selectedFiles.filter((file) => {
        return allowedTypes.includes(file.type) && file.size <= maxSize
      })
      
      if (validFiles.length !== selectedFiles.length) {
        alert("Only JPG, PNG, and GIF files are allowed, and file size should not exceed 2MB.")
        return
      }
      
      const fileURLs = validFiles.map((file) => URL.createObjectURL(file))
      const fileNames = validFiles.map((file) => file.name)

      setFiles(fileURLs)
      setFileNames(fileNames)
    } else {
      setFiles([])
      setFileNames([])
    }
  }

  const clearFile = (index) => {
    const newFiles = [...files]
    const newFileNames = [...fileNames]
    
    newFiles.splice(index, 1)
    newFileNames.splice(index, 1)
    
    setFiles(newFiles)
    setFileNames(newFileNames)
  }

  return (
    <div className="mb-4">
      <label className="block text-md font-medium text-dark mb-2" htmlFor={name}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative">
        <input
          type="file"
          id={name}
          className="sr-only"
          accept="image/*"
          multiple={multiple}
          {...register(name, { required: required && `${label} is required` })}
          onChange={handleFileChange}
          aria-label={`Upload ${label}`}
        />
        <label
          htmlFor={name}
          className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer"
        >
          <RiUploadCloud2Line className="mr-2 h-5 w-5 text-gray-400" />
          <span>{files.length > 0 ? "Change Image" : "Choose file"}</span>
        </label>
      </div>

      {files.length > 0 && (
        <div className="mt-2 flex gap-2">
          {files.map((file, index) => (
            <div key={index} className="flex items-center space-x-2">
              <img src={file} alt={`Preview ${index}`} className="w-24 h-24 object-cover rounded border" />
              <div className="flex flex-col">
                <p className="text-sm text-gray-600">{fileNames[index]}</p>
                <button
                  type="button"
                  onClick={() => clearFile(index)}
                  className="mt-1 text-xs text-red-500 flex items-center hover:text-red-700"
                >
                  <RiCloseCircleLine className="mr-1" /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </div>
  )
}

export default CustomFileUpload
