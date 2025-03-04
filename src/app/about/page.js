"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"

const AboutUs = () => {
  const sections = [
    {
      title: "Introduction",
      content: `The Society of Otolaryngologists of Nepal (SOL Nepal) is an organization of Otorhinolaryngologists. It was established on 6 June, 1998 (26 Chaitra, 2054) in the Chief District Officer (CDO) office, Kathmandu with the registration number: 728/054/55.

    Since then, all ENT related health professionals have this organization as a platform to discuss and plan in an organized way to provide quality ENT and Head & Neck services to the people of Nepal. Till Feb 2017, SOL Nepal has 141 life members, 4 Honorary Members, 4 Foreign Members and  11 Associate Life Members.

    The society has been organizing regular CME programmes so that all members of the society can become updated in their field. Apart from CME Programmes, SOL Nepal is organizing National, Regional and International Conferences which help the members to share the experiences and knowledge with the international faculties as well.

    The Society strongly believes in quality care in ENT and Head & Neck Surgery. It is involved in decision making with regard to quality ENT care. SOL Nepal has recently started publication of its own official journal.`,
    },
    {
      title: "History",
      content: `The concept of forming a society of ENT specialists of Nepal was started in 1997, during an informal gathering at Dr. Som Nath Aryal’s residence, who then was consultant ENT surgeon working at Bir Hospital. Prof. R.C.M. Amatya, Prof. Bimal Sinha, Dr. Y.B. Bhandari, Dr. R.K. Singh, Dr. Madhav Dahal, Prof. D.K. Baskota, Dr. Gopal Gyanwali and Prof. Rajendra Guragain were present in the meeting. Prof. Bimal Sinha took the responsibility of preparing the constitution of the society. A rough draft was prepared and a series of discussions and meetings were held and necessary corrections made when & wherever required. Dr. L.R. Malla, Dr. G.B. Thapa, Dr. Anil Jha, Prof. Hari Bhattarai, Dr. Y.B. Bhandari, Dr. R.K. Singh and Prof. Rajendra Guragain contributed significantly in the series of discussions to finalise the draft. Finally, a draft of the constitution was prepared and an ad hoc executive committee with Prof. R.C.M. Amatya as the first president and Dr. S.N. Aryal as the first vice president was formed. But the registration of the society at the CDO office was somehow delayed for nearly one year due to various reasons. Finally, it was registered at the CDO office in Kathmandu in 1998 (Reg.No.: 728/054/55; PAN number: 301761480).

    The first election for the executive committee was held on 31 Oct 1998 (14 Kartik, 2055). Since then, the subsequent elections for the executive committee were held regularly on 14 Kartik 2055, 4 Falgun 2057, 11 Magh 2059, 19 Mangsir 2063,4 Paush 2065, 19 Kartik 2068, 27 Paush 2070 and 29 Magh 2072, The executive committees were elected unanimously in all the elections.`,
    },
    {
      title: "Second SAARC ENT Congress 2000 AD",
      content: `The decision to host the second SAARC ENT congress was in fact taken even before the executive body of SOL Nepal was officially formed. Prof. Rakesh Prasad and Prof. Hari Bhattarai played a significant role in bringing the congress to Nepal. The decision was taken at a meeting held at T.U. Teaching Hospital under the chairmanship of Dr. L.N. Prasad, the first ENT surgeon of Nepal. An organizing committee was then formed.

    The second SAARC ENT congress was held at the Birendra International Convention Centre from May 24 to 27, 2000. The conference was inagurated by Her Late Majesty Queen Aishwarya Rajya Laxmi Devi Shah who was accompanied by Late Crown Prince Deependra Bir Bikram Shah Dev. One of the key attractions of the inaugural function was the honor given to Dr. L.H. Hiranandani from India as the Surgeon of the Millenium. The theme of the congress was “Extending ENT Services to the Community.” The conference was a grand success and is still fondly remembered by all the participants.`,
    },
    {
      title: "7th SAARC ENT Congress 2011 AD",
      content: `Theme : “Future ENT Head and Neck Surgery in developing countries”

    7th SAARC ENT Congress was held at Army Officer’s club Kathmandu from 25-27 may 2011. The Conference was inaugurated by honorable President of the Republic of Nepal Dr. Ram Baran Yadav. The organizing committee was led by Prof. Bimal Kumar Sinha. Guest oration was deliver by Prof. Mohan Kameshwaran (India) .

    In the 7th SAARC ENT Congress all together 3 key note address, 8 panel discussion, 50 guest Lecture, 86 free papers and 24 posters were presented.

    The congress was attended by 415 delegates from around the globe and it was a grand success.`,
    },
    {
      title: "First National Conference 1999 AD",
      content: `The 1st National conference was held in Kathmandu on 9 April, 1999 (26 Chaitra, 2055). The theme was “Better ENT services in the Next Century”. The Chief guest was Dr. Keshar Jung Rayamajhi, President of Raj Shabha Standing Commiittee.`,
    },
    {
        title: "Second National SOL Conference 2001 AD",
        content: `The second National SOL Conference was held at Biratnagar under the chairmanship of Dr. Madan Koirala on 4 Chaitra, 2057 at Hotel Zenith, Biratnagar. Several international delegates also participated in the conference. The conference was inaugurated by then Late Prime Minister Girija Prasad Koirala.`,
    },
    {
        title: "Third National SOL Conference 2003 AD",
        content: `The 3rd National conference was held in BP Koirala Memorial Cancer Hospital, Bharatpur on 25th January, 2003 (11 Magh, 2059) under the chairmanship of Dr. Ghisup N. Prasiko. The conference was inaugurated by then honorable minister for health, science and technology Prof. Upendra Devkota. More than 40 ENT surgeons from Nepal and abroad participated. . The theme of the conference was “Prevention and Early detection of Head and Neck Cancer”. More than 15 papers were presented in the conference.`,
    },
    {
        title: "Fourth National SOL Conference 2005 AD",
        content: `The 4th National conference was held in Hotel Himalaya, Kupondole, Kathmandu from 5th to 8th December, 2006 (19 to 22 Marga, 2063) under the chairmanship of Dr. Rajendra Prasad Guragain. The conference was inaugurated by the Vice chancellor of Kathmandu University Prof. Dr. Suresh Raj Sharma.
    Highlights:
    Live surgical demonstrations of head & neck lesions at TU Teaching Hospital, Maharajgunj, Kathmandu.
    Invited faculties were:
    Prof. A. K. D’Cruz, Professor & Chief, Head & Neck unit, Tata memorial hospital.
    Dr. Mandhar Despande, Tata Memorial hospital, Mumbai.
    Dr. Alok Thakar, Associate Prof. AIIMS, New Delhi
    Dr. Hiroshi Ogasawara, Japan
    Honorary membership award:
    The following international dignitaries were awarded honorary membership of SOL Nepal during the inaugural ceremony.
    Mrs Claudia Walters, USA
    Dr. Hiroshi Ogasawara, Japan`,
    },
    {
        title: "Fifth National SOL conference 2009 AD",
        content: `The 5th National conference was held at Hotel Pokhara Grande, Pokhara on 20th & 21st February, 2009 (9-10 Falgun, 2065) under the chairmanship of Dr. Toran K.C. The Oration was given by the guest Dr. Chittaloor Madhu Sudana Rao from India. The theme of the conference was “Minimal Invasive Surgery in Otorhinolaryngology”`,
    },
    {
        title: "Sixth National SOL Conference 2013 AD",
        content: `The 6th National Conference was held at Bharatpur, Chitwan on 22nd & 23rd Feb, 2013 under the Chairmanship of Dr. Sudarshan Sharma . Several international delegates also participated in the Conference. The oration was given by Dr. Alok Thakar from India. The theme of the Conference was “Expanding Horizon in the field of Head & Neck Surgery”.`,
    },
    {
        title: "Seventh National SOL Conference 2015 AD",
        content: `The 7th National Conference of Society of Otorhinolaryngologists (SOL) Nepal was held successfully in KUSMS, Dhulikhel, Kavre from 12-14th March, 2015. There was preconference workshop (live surgical demonstration) on rhinoplasty. Prof. Dr. Balwant Singh Gendeh, an imminent ENT surgeon from Malaysia performed live surgical demonstration. On the 2ndday the opening ceremony was inaugurated by honourable vice-chancellor of Kathmandu University Prof. Dr. Ram Kantha Makaju.  The 4th Sir L.N. Prashad oration was delivered by Prof.  Gendeh.

    The society falicitated two senior ENT surgeons Dr. Purushottam Lal Rajbhandari and Dr. Laxmi Ram Malla.

    Total 102 delegates participated the conference. There were 4 guest lectures. Prof. Balwant Gendeh delivered lecture on rhinoplasty, Prof. S.C. Mishra India delivered lecture on “functional restoration after laryngectomy for advanced cancers” and Dr. Seung-Ha Oh from South Korea delivered 2 guest lectures on “ deaf brain and cochlear implant: neuroimaging findings”  and “ Newborn Hearing Screening ( NHS) in Korea:  Results of a 6 years experience”. Lectures on Expert opinion were delivered by Prof. Rakesh Pd. Shrivastav on “cochlear Implant programme in Nepal-an update “and Prof. Dr. Bibhu Pradhan on “sphenopalatine artery cauterization in refractory posterior epistaxis”. There were 46 free papers  and  case reports. Beside this, there were poster presentations. This congress provided a good forum to the delegates for sharing  their experience and  discussion among themselves. There was enjoyable gala dinner and  cultural program performed by various artists in the 2nd day evening.`,
    },
    {
        title: "Eighth National SOL Conference 2017 AD",
        content: `The 8th National Conference of Society of Otorhinolaryngologists (SOL Nepal) was held successfully in Pokhara from 16-18th Feb, 2017. The Theme of the Conference “Dilemma in Otology: Reminisce the past to foster the future”.There was preconference workshop (live surgical demonstration) on Otosurgery. Dr. Jeremy Lavy, Prof. Dr. Michael CF Smith  from UK and Prof. Dr. Vijayendra Honnurappa from India  performed live surgical demonstration. On the 2nd day the opening ceremony was inaugurated by honorable vice-chancellor of Pokhara University Prof. Dr. Chiranjeebi Prasad Sharma.  The 5th Sir L.N. Prasad oration was delivered by Dr. Mazin Jawad Jaffer Al- Khabouri. The society felicitated senior ENT surgeon Prof.  Dr. Ram Chhaya Man Amatya. Total 130 delegates participated the conference. There were 4 guest lectures  and one Key Note lecture . Dr.  Mike Smith delivered guest lecture on “Revision Cholesteatoma Surgery”. Dr. Jeremy Lavy delivered guest lecture on “Management of Otosclerosis Surgery”. Prof. SC Mishra  delivered guest lecture  on “ our experiences over Pediatric Neoplasia of Ear, Nose Throat & Neck”. Prof. Dr. V. Honnurappa delivered  guest lecture on “Piquant situations in ossiculoplasty- How I do it ”(Reviving cartilage ossiculoplasty)”. Prof. Bibhu Pradhan delivered lecture on How to read CT Scan Nose. There were 53 free papers and  case reports. Beside this, there were poster presentations. This congress provided a good forum to the delegates for sharing their experience and discussion among themselves. There was enjoyable gala dinner and cultural program performed by various artists in the 2nd day evening, which was appreciated by everyone.`,
    },
    {
        title: "12th SAARC ENT Congress 2022 AD",
        content: `Theme : “A Quest for Perfection in ENT Head and Neck Services”

    12th SAARC ENT Congress was held at Nepal Pragya Prathisthan. Kamaladi Kathmandu from 27& 28 may 2022. The Conference was inaugurated by honorable President of the Republic of Nepal MRS. Bidhya Devi Vandari  . The organizing committee was led by Prof. Bimal Kumar Sinha. Guest oration were  deliver by Prof. Dinesh K Chhetri (USA),Prof. Pran gopal Datta (Bangladesh), Prof. Anirban Biswas ( India)  .

    In the 12th SAARC ENT Congress all together    key note address,  panel discussion,   guest Lecture,  free papers and   posters were presented.

    The congress was attended by 400 delegates from around the globe and it was a grand success.

 `,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null); 

  const toggleSection = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); 
  };

  return (
    <div className="text-green-900 min-h-screen flex flex-col">
      <div className="container mx-auto px-4 lg:px-8 max-w-screen-lg p-6 flex-grow">
        <h1 className="text-3xl font-bold text-left mb-10 text-primary">About Us</h1>
        <div className="space-y-5">
          {sections.map((section, index) => (
            <div key={index} className="border-b pb-4 border-primary">
              <button
                className="w-full flex justify-between items-center text-left font-semibold text-lg py-2 text-dark hover:text-primary transition-colors duration-300"
                onClick={() => toggleSection(index)}
              >
                {section.title}
                <motion.div
                  initial={false}
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="mt-4">
                      <p className="text-green-900 leading-relaxed text-justify">
                        {section.content.split("\n").map((paragraph, idx) => (
                          <span key={idx}>
                            {paragraph}
                            <br />
                          </span>
                        ))}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUs

