 const SectionTitle = ({heading,subHeading})=>{

  return (
    <div className="md:w-4/12 mx-auto text-center my-8">
      <p className="text-[#D99904] italic mb-2">{subHeading}</p>
      <h1 className="text-4xl border-y-4 font-semibold py-4 ">{heading}</h1>
    </div>
  )
 }

 export default SectionTitle