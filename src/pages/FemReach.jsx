import React from 'react'

function FemReach() {
  return (
    <>
      <main className="pt-20 mb-10">
        <section className="flex">
          <div className="basis-5/6 h-[70vh] flex flex-col md:flex-row items-center md:justify-between mx-auto border-it">
            <div className="basis-5/12">
              <h1 className="text-xl mb-8">
                A non-profit project powered by FemCode Africa dedicated to
                advancing the lives of the underprivileged girls through
                technology.
              </h1>
              <a
                className="bg-fc_prim text-fc_cardbg text-sm px-4 py-2 rounded-3xl rounded-br"
                href="#"
              >
                Find More
              </a>
            </div>
            <div className="basis-7/12 flex border-it">
              <div className="basis-3/4 mx-auto border-it">
                <img src={null} alt="keep girl child in education femreach" />
              </div>
            </div>
          </div>
        </section>
        <section className="flex">
          {/*  items-center justify-between */}
          <div className="basis-5/6 h-[89vh] mx-auto border-it">
            <h2 className="text-2xl font-bold mb-5">Upcoming Programs</h2>

            <div>
              <img src="" alt="girl child, lend a helping hand today" />
            </div>

            <section className='mb-6'>
              <h2 className="text-2xl text-center font-bold mb-8">
                Partner or Sponsor an
                <br />
                Underprivileged Girl Child
              </h2>

              <div className="flex flex-col-reverse md:flex-row">
                <p className="basis-1/2 bg-fc_prim text-fc_cardbg px-14 py-8">
                  Educate a girl child today. Be the one to bring her joy and
                  promise of tomorrow. Your gifts will help equip them with the
                  perfect teachers and resources that our girls need for hope,
                  dreams and the chance to transform their lives.
                </p>
                {/* background img with css */}
              </div>

            </section>
            <a href="#" className="bg-fc_sc1  text-sm px-4 py-2 rounded-3xl rounded-br mr-10">Sponsor</a>
            <a href="#" className="bg-fc_cardbg text-sm px-4 py-2 rounded-3xl rounded-br border-fc_sc1 border">Partner</a>
          </div>
        </section>

        {/* FAQ */}
        
      </main>
    </>
  );
}

export default FemReach