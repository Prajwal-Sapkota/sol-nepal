"use client"
import { useForm } from "react-hook-form"
import CustomFileUpload from "@/app/components/CustomFileUpload"

const MembershipForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log("Form Data:", data)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow py-8 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-dark text-center mb-6">Membership Form</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information Section */}
            <section className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-dark">Personal Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1 text-dark">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("firstName", { required: "First Name is required" })}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-dark">Middle Name</label>
                  <input
                    {...register("middleName")}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-dark">
                    Family Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("familyName", { required: "Family Name is required" })}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.familyName && <p className="text-red-500 text-xs mt-1">{errors.familyName.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-dark">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    {...register("dateOfBirth", { required: "Date of Birth is required" })}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-dark">Gender</label>
                  <select
                    {...register("gender")}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-dark">Nationality</label>
                  <input
                    {...register("nationality")}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </section>

            {/* Contact Information Section */}
            <section className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-dark">Contact Info</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1 text-dark">Address</label>
                  <input
                    {...register("address")}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-dark">Tel</label>
                  <input
                    {...register("tel")}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-dark">Fax</label>
                  <input
                    {...register("fax")}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-dark">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-dark">
                    Hospital/Office <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("hospitalOffice", { required: "Hospital/Office is required" })}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.hospitalOffice && (
                    <p className="text-red-500 text-xs mt-1">{errors.hospitalOffice.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-dark">Tel</label>
                  <input
                    {...register("officeTel")}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-dark">P.O. Box</label>
                  <input
                    {...register("poBox")}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-dark">
                    Designation <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("designation", { required: "Designation is required" })}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.designation && <p className="text-red-500 text-xs mt-1">{errors.designation.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-dark">Clinic</label>
                  <input
                    {...register("clinic")}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-dark">Tel</label>
                  <input
                    {...register("clinicTel")}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-dark">
                    Medical Council Regd. No. <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("medicalCouncilRegdNo", {
                      required: "Medical Council Registration Number is required",
                    })}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.medicalCouncilRegdNo && (
                    <p className="text-red-500 text-xs mt-1">{errors.medicalCouncilRegdNo.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-dark">
                    Name of Council <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("nameOfCouncil", { required: "Name of Council is required" })}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.nameOfCouncil && <p className="text-red-500 text-xs mt-1">{errors.nameOfCouncil.message}</p>}
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium mb-1 text-dark">Country</label>
                <select
                  {...register("country")}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select Country</option>
                  <option value="Nepal">Nepal</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
              </div>
            </section>

            {/* MBBS or Equivalent Qualifications Section */}
            <section className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-dark">MBBS or Equivalent Qualifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1 text-dark">
                    Degree <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("mbbsDegree", { required: "Degree is required" })}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.mbbsDegree && <p className="text-red-500 text-xs mt-1">{errors.mbbsDegree.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-dark">
                    Name of University/Institution <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("mbbsUniversity", { required: "University name is required" })}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.mbbsUniversity && (
                    <p className="text-red-500 text-xs mt-1">{errors.mbbsUniversity.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-dark">
                    Year of Qualification <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    {...register("mbbsYear", { required: "Year is required" })}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.mbbsYear && <p className="text-red-500 text-xs mt-1">{errors.mbbsYear.message}</p>}
                </div>
              </div>
            </section>

            {/* Specialist Qualification Section */}
            <section className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-dark">Specialist Qualification</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1 text-dark">Degree</label>
                  <div className="flex items-center space-x-4">
                    <label className="inline-flex items-center">
                      <input type="radio" {...register("specialistQualification")} value="DLO" className="form-radio" />
                      <span className="ml-2">DLO</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        {...register("specialistQualification")}
                        value="FRCS"
                        className="form-radio"
                      />
                      <span className="ml-2">FRCS</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" {...register("specialistQualification")} value="MS" className="form-radio" />
                      <span className="ml-2">MS</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-dark">Name of university/institution</label>
                  <input
                    type="text"
                    {...register("specialistUniversity")}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-dark">Year of qualification</label>
                  <input
                    type="date"
                    {...register("specialistQualificationYear")}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </section>

            {/* Enclosures Section */}
            <section className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-dark">Enclosures</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="border-2 p-4 rounded-lg shadow-md bg-white">
                  <CustomFileUpload
                    register={register}
                    name="mbbsCertificate"
                    label="Upload MBBS Certificate"
                    required={true}
                    error={errors.mbbsCertificate}
                  />
                </div>
                <div className="border-2 p-4 rounded-lg shadow-md bg-white">
                  <CustomFileUpload
                    register={register}
                    name="graduateDiploma"
                    label="Upload Graduate Diploma/Degree/Fellowship"
                  />
                </div>
                <div className="border-2 p-4 rounded-lg shadow-md bg-white">
                  <CustomFileUpload
                    register={register}
                    name="citizenshipCertificate"
                    label="Upload Citizenship Certificate"
                    required={true}
                    multiple={true}
                    error={errors.citizenshipCertificate}
                  />
                </div>
                <div className="border-2 p-4 rounded-lg shadow-md bg-white">
                  <CustomFileUpload
                    register={register}
                    name="medicalCouncilRegistration"
                    label="Upload Medical Council Registration Certificate"
                    required={true}
                    error={errors.medicalCouncilRegistration}
                  />
                </div>
                <div className="border-2 p-4 rounded-lg shadow-md bg-white">
                  <CustomFileUpload
                    register={register}
                    name="specialistRegistration"
                    label="Upload Specialist Registration Certificate"
                  />
                </div>
                <div className="border-2 p-4 rounded-lg shadow-md bg-white">
                  <CustomFileUpload
                    register={register}
                    name="photo"
                    label="Upload Photo"
                    required={true}
                    error={errors.photo}
                  />
                </div>
              </div>
            </section>

            {/* Payment Section */}
            <section className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-dark">Payment Details</h3>
              <p className="text-sm text-gray-600 mb-4">Payment details will be provided after form submission</p>
            </section>

            {/* Submit Button */}
            <div className="mt-6 text-center">
              <button
                type="submit"
                disabled={Object.keys(errors).length > 0}
                className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default MembershipForm

