import { Link } from "react-router-dom"

import FAHeader from "../components/FAHeader"
import AdmissionProcess from "../components/AdmissionProcess"

function FemAcademy() {
  return (
    <>
      <main className="pt-20 mb-10">
        <FAHeader/>
        {/* <header className="w-[92%] md:w-[80%] mx-auto">
          <h1>FemAcademy</h1>
        </header> */}
        <section className="flex h-[70vh] items-start">
          <div className="basis-3/5 ml-20 shadow-lg text-fc_prim md:mt-16 px-5 py-8">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-16">
                Become A Skilled <br />
                Female Software Developer
              </h2>
            </div>
            <Link
              className="bg-fc_sc1 text-sm px-8 py-2 rounded-3xl rounded-br"
              to='courses'
            >
              Choose a Course
            </Link>
          </div>
        </section> 
        {/* bg-img spacn */}

        {/*min-hvh spacn   */}
        <section className="h-[50vh]">
          <div className="max-w-[66.6%] px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Why FemAcademy</h2>
            <p>
              Our Academy is set to provide these African females with not just
              a school to learn and grow but also a community to sustain their
              tech careers by helping them get employed after their tech
              education with us. With our well structured curriculum which
              includes both theory and hand on desktop projects, we equip these
              women to become top software engineers and be able to work with
              any software company.
            </p>
          </div>
        </section>

        {/* continue.. imgs animatn*/}
        <section className="relativ flex flex-col items-center justify-center text-center border-it mb-16">
          <h2 className="text-2xl font-bold">
            Software Courses <br />
            We Offer
          </h2>

          <section className="absolut border-it min-h-[80vh]">
            <div className="flex flex-col gap-5">
              <div>
                <a href="" className="border-it">
                  <div>
                    <img src="" alt="" />
                  </div>
                </a>
                <a href="" className="border-it">
                  <div>
                    <img src="" alt="" />
                  </div>
                </a>
              </div>
              <div>
                <a href="">
                  <div>
                    <img src="" alt="" />
                  </div>
                </a>
                <a href="">
                  <div>
                    <img src="" alt="" />
                  </div>
                </a>
              </div>
              <a href="">
                <div>
                  <img src="" alt="" />
                </div>
              </a>
            </div>
          </section>
          <div className="border-it">
            <Link
              className="bg-fc_sc1 text-sm px-8 py-2 rounded-3xl rounded-br"
              to="courses"
            >
              Choose a course
            </Link>
          </div>

        </section>

        <section className="min-h-[80vh] flex flex-col justify-center">
          <h2 className="text-center text-xl font-bold mb-16">ADMISSION PROCESS</h2>
          <div>
            <section className="flex flex-col mb-7 gap-20">
              {/* <AdmissionProcess/> maybe */}
              <div className="md:max-w-[83.3%] mx-auto flex flex-col md:flex-row gap-7 md:justify-between">
                <article className="md:basis-1/4 bg-fc_cardbg shadow-md px-10 py-10">
                  <h3 className="text-base max-w-max mx-auto font-bold mb-5 px-3 border-2 ">
                    1. Enroll
                  </h3>
                  <p className="">
                    Enroll by clicking the button and fill out the form which
                    includes a charge of 15$. After payment has been made,
                    check your email for the next step.
                  </p>
                </article>
                <article className="md:basis-1/4 bg-fc_cardbg shadow-md px-10 py-10">
                  <h3 className="text-base max-w-max mx-auto  font-bold mb-5 px-3 border-2">2. Take a test</h3>
                  <p className="">
                    Send in your mail as the link to book a date for your
                    assessment test and don't forget to add it to your
                    calendar.
                  </p>
                </article>
                <article className="md:basis-1/4 bg-fc_cardbg shadow-md px-10 py-10">
                  <h3 className="text-base max-w-max mx-auto  font-bold mb-5 px-3 border-2">
                    3. Set Up
                  </h3>
                  <p className="">
                    If you meet up with our score rate, you would be directed
                    on how to set up and complete your enrollment process and
                    then welcome!!
                  </p>
                </article>
              </div>
              <div className="flex justify-center">
                <Link
                className="bg-fc_prim_a2 text-fc_sec text-sm px-8 py-2 rounded-3xl rounded-br"
                to='enroll'
                >
                Register
                </Link>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}

export default FemAcademy;
