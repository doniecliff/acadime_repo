function FRDonate() {
  return (
    <>
      <main className="pt-20 mb-10">
        <section className="flex h-[70vh] items-center mb-10">
          <div className="basis-5/6 mx-auto">
            <div className="flex flex-col md:flex-row mb-16">
              <div className="border-it basis-2/5">
                <h1 className="text-4xl font-bold mb-5">Donate/Partner</h1>
                <p className="text-xl mb-10">
                  Sponsor an underprivileged girl child. Your donation will help
                  train an Underprivileged girl child With a tech skill and
                  improve their life in general.
                </p>
                <a
                  href="#"
                  className="bg-fc_sc1  text-sm px-4 py-2 rounded-3xl rounded-br mr-10"
                >
                  Donate/Partner
                </a>
              </div>
              <div className="basis-3/5 border-it">
                <div>
                  <img
                    src={null}
                    alt="femreach, lend a helping hand today; for a girl child "
                  />
                </div>
              </div>
            </div>

            {/* schoolarship pkg animatn */}
            <h2 className="bg-fc_prim text-fc_cardbg text-center text-lg font-semibold py-6">
              Scholarship Packages
            </h2>
          </div>
        </section>
        {/* img */}

        <section className="h-[85vh] items-center mb-10">
          <div className="flex mb-8">
            <div className="basis-5/6 mx-auto">
              <div className="md:max-w-[60%] mx-auto flex flex-col md:flex-row justify-between mb-10">
                <div className="shadow-md pt-2 px-5 pb-5 text-center">
                  <h3 className="mb-5">Bronze</h3>
                  <em>$500 USD</em>
                </div>
                <div className="shadow-md pt-2 px-5 pb-5 text-center">
                  <h3 className="mb-5">Silver</h3>
                  <em>$1000 USD</em>
                </div>
                <div className="shadow-md pt-2 px-5 pb-5 text-center">
                  <h3 className="mb-5">Gold</h3>
                  <em>$2000 USD</em>
                </div>
              </div>

              <div className="md:max-w-[40%] mx-auto flex flex-col md:flex-row justify-between mb-10">
                <div className="shadow-md pt-2 px-5 pb-8 text-center">
                  <h3 className="mb-5">Diamond</h3>
                  <em>$5000 USD</em>
                </div>
                <div className="shadow-md pt-2 px-5 pb-8 text-center">
                  <h3 className="mb-5">Hooge</h3>
                  <em>$20,000 USD</em>
                </div>
              </div>

              <div className="flex">
                <div className=" basis-1/4 mx-auto shadow-md pt-2 px-5 pb-5 text-center">
                  <h3 className="mb-5">Custom Donation</h3>
                  <p className="mb-2">
                    Didn't see a match for what you have in mind?
                  </p>
                  <p> Click here and make your donation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="#"
              className="mx bg-fc_sc1  text-sm px-4 py-2 rounded-3xl rounded-br mr-10"
            >
              Read More
            </a>
          </div>
        </section>

        <section>
          <div className="flex">
            <div className="basis-5/6 mx-auto">
              <h2 className="text-3xl font-bold mb-10">
                Upcoming program budget
              </h2>

              <div className="flex items-center gap-20 mb-12">
                <h3>Today's Money Raised</h3>

                <div className="shadow-lg pt-2 px-5 pb-5 text-center">
                  <h3 className="mb-5">Bronze</h3>
                  <em>$500 USD</em>
                </div>
              </div>{/* some css transforms */}
              <div className="flex items-center gap-20 mb-20">
                <h3>Estimated Annual Budget</h3>

                <div className="shadow-lg pt-2 px-5 pb-5 text-center">
                  <h3 className="mb-5">Bronze</h3>
                  <em>$500 USD</em>
                </div>
              </div>{/* some css transforms */}

              <div className="flex justify-center gap-5 text-sm">
                <p>
                  Want to partner with us to improve their life in general??{" "}
                  <a href="#" className="text-fc_txt1">
                    Send us a mail
                  </a>
                </p>{" "}
                <a
                  href="#"
                  className="mx bg-fc_sc1  text-sm px-4 py-2 rounded-3xl rounded-br mr-10"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
{
  /* 
            <a href="#" className="bg-fc_sc1  text-sm px-4 py-2 rounded-3xl rounded-br mr-10">Sponsor</a>
            <a href="#" className="bg-fc_cardbg text-sm px-4 py-2 rounded-3xl rounded-br border-fc_sc1 border">Partner</a> */
}

export default FRDonate;
