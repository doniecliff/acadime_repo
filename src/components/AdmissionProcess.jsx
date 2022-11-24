function AdmissionProcess() {
  return (
    <>
      <section className="flex flex-col mb-7 gap-20">
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
          <a
          className="bg-fc_prim_a2 text-fc_sec text-sm px-8 py-2 rounded-3xl rounded-br"
          href="#"
          >
          Register
          </a>
        </div>
      </section>
    </>
  )
}

export default AdmissionProcess