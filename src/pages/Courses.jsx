
import AdmissionProcess from '../components/AdmissionProcess'

function Courses() {
  return (
    <>
      <main className="pt-24 mb-10">
        <h1 className='font-semibold text-sm text-fc_prim mb-10 max-w-[80%] mx-auto'>
          Software Courses <br /> <span className='font-bold text-fc_txt1'>we offer</span>
        </h1>
      
      {/* touchings */}
        <section>
          <div className="md:max-w-[83.3%] mx-auto flex flex-col md:flex-row gap-7 md:justify-between mb-10">
            <div>
              <h2>Frontend</h2>
              <article className="md:basis-1/4 bg-fc_cardbg shadow-md px-10 py-10">
                <h3 className="text-base max-w-max mx-auto font-bold mb-5 px-3 border-2 ">
                  FRONTEND SOFTWARE
                </h3>
                <p className="">
                  Frontend software development career focuses on the creation
                  of element and features of a webapp that the user can see. Our
                  program is designed to take you through from zero of no
                  knowledge to building and implementing designs and equipping
                  you with the skill to work in a tech company.
                </p>
              </article>
            </div>
            <div>
              <h2>Backend</h2>
              <article className="md:basis-1/4 bg-fc_cardbg shadow-md px-10 py-10">
                <h3 className="text-base max-w-max mx-auto  font-bold mb-5 px-3 border-2">
                BACKEND SOFTWARE
                </h3>
                <p className="">
                  Backend software development which is also known as
                  server-side development. It is everything that the users don't
                  see which occurs when any action a webapp is performed with
                  our choice or language. We focus on taking you on this journey
                  by the hand and preparing you for life of a backend developer.
                </p>
              </article>
            </div>
            <div>
              <h2>Drupal</h2>
              <article className="md:basis-1/4 bg-fc_cardbg shadow-md px-10 py-10">
                <h3 className="text-base max-w-max mx-auto  font-bold mb-5 px-3 border-2">
                DRUPAL SOFTWARE
                </h3>
                <p className="">
                  Coming up soon!
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* touchings: spacn, fontsize*/}
        <section className="min-h-[80vh] flex flex-col justify-center">
          <h2 className=" min-w-[83.3%] mx-auto text-xl font-bold mb-10">
            ADMISSION PROCESS
          </h2>
          <div>
            <AdmissionProcess />
          </div>
        </section>
      </main>
    </>
  );
}

export default Courses