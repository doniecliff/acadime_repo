import React from 'react'

function FRAboutUs() {
  return (
    <>
      <main className="pt-20 mb-10 flex">
        <section className="flex flex-col basis-2/3 px-8 mx-auto">
          <section className='text-center mb-20'> {/* bg-img lik-water-mark */}
            <h1 className="text-3xl font-bold mb-12">About us</h1>
            <p className='mb-5'>
              FemReach is a non-profit project powered by FemCode Africa
              dedicated to advancing the lives of underprivileged girls through
              technology. Our mission is to provide skills training and
              employment opportunities to over 5000+ underprivileged women in
              the next 5 years; so they can secure sustainable jobs,
              independence and a brighter future.
            </p>
            <p>
              Our focus would be females who are underprivileged, the orphan
              girls. This would include giving out laptops, data stipends and
              training, as well as helping these ladies build their personal
              brands and helping them find employment.
            </p>
          </section>

          {/* d img */}
          <div className="mb-12">
            <div><img src={null} alt="femreach, the girl child; let's give thema chance to success, donate" /></div>
          </div>

          <div className='flex justify-center'><a href="#" className="bg-fc_sc1  text-sm px-4 py-2 rounded-3xl rounded-br mr-10">Sponsor</a></div>
        </section>
      </main>
    </>
  );
}

export default FRAboutUs