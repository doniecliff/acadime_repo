import { Link } from "react-router-dom";
import FAHeader from "../components/FAHeader"


function Mission() {
  return (
    <>
      <main className="pt-20 mb-10">
        <FAHeader />
        <section className="border-i min-h-[80vh] flex justify-center items-center text-8xl text-fc_prim font-bold mb-12">
          <h1>
            OUR <span className="text-4xl text-fc_txt1 font-bold">MISSON</span>
          </h1>
        </section>
        {/*bg-img  */}

        <section className="text-center max-w-[66.6%] px-5 mx-auto text-center mb-10">
          <h2 className="text-3xl font-semibold mb-10">
            Our <span className="text-fc_txt1 font-bold">Mission</span> Story
          </h2>
          <p>
            In 2019, we saw a problem which was that there was a decline of
            women in learning digital skills necessary for their financial
            independence and effective contributions to society. and decided to
            bring a lasting solution. We started by training women across Africa
            for free in software development skills and other digital skills.
            Women ranging from 18-35 years have effectively benefited from the
            programme, and have moved to explore opportunities using their new
            found skills.
          </p>
          <p className="mt-4 mb-10 px-1">
            And so far, we have trained more than 1,700 women across Africa on
            web and Android development, graphics design, social media
            management and content development. Our training are centered mainly
            on Females who have the zeal to learn but lack the essential
            resources to make their dreams come true. As a company, aimed at
            equipping ladies with on-demand digital skills, FemCode Africa is
            positively changing the narrative and closing the gap when it comes
            to women inclusion in technology. We have trained 1000+ and have
            help a lot of these women get employed.
          </p>

          <h2 className="text-3xl font-semibold mb-10">
            Our <span className="text-fc_txt1 font-bold">Mission</span>
          </h2>
          <p className="px-11 mb-4">
            Statistics have stated that there is a lot of gap in the ratio of
            women to men in tech in Africa. We at FemCode Africa believe that
            every female has all it takes to start and sustain a career in Tech.
            Our Academy is set to provide these African females with not just a
            school to learn and grow but also a community to sustain their tech
            careers by helping them get employed after their tech education with
            us.
          </p>
          <p className="px-11">
            With our well structured curriculum which includes both theory and
            hand on desktop projects, we equip these women to become top
            software engineers and be able to work with any software company.
          </p>
        </section>

        {/* an img */}
        <section className="flex">
          <div className="basis-5/6 flex flex-col gap-10 bg-fc_sect1 mx-auto px-10 py-14">
            <h2 className="text-center text-3xl font-semibold">
              Accomplishments!
            </h2>

            <section className="flex flex-col md:flex-row gap-10 md:gap-0 md:justify-between">
              <p className="basis-2/5 pr-7">
                We have trained 1000+ and have help a lot of these women get
                employed. Countries covered: 3 countries (Nigeria, Ghana, Benin
                Republic), Mentored a lot of African females.
              </p>
              <div className="basis-3/5 border-it">
                <div>
                  <img
                    src={null}
                    alt="two ladies high-fiv-ing and celebrating"
                    className="w-full"
                  />
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="bg-fc_prim text-fc_cardbg text-center py-16">
          <section className="mb-7"><Link to='contact-us'><span className="mr-10">Need to talk to someone?</span><i>msgn icon colord</i></Link></section>
          <section><span className="mr-10">Hire a female software engineer</span><Link
              className="bg-fc_cardbg text-fc_dark text-sm font-semibold px-4 rounded-3xl"
              to='fem_academy/hire'
            >
              Hire
            </Link></section>
        </section>
      </main>
    </>
  );
}

export default Mission