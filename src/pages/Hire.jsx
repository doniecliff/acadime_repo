import React from 'react'
import { Link } from 'react-router-dom'

function Hire() {
  return (
    <>
    <main className="mb-10">
      <div className='h-[99.99vh] flex items-center border-fc_prim border-b-8 mb-8'>
        <h1 className='basis-1/2 text-fc_prim text-4xl py-10 px-20 rounded-tr-lg rounded-br-lg border-it'>Hire a Female<br />Software Engineer</h1>
      </div>


      <section>
        <div className='max-w-[83.3%] mx-auto mb-20'>
          <h2 className='text-3xl font-semibold mb-8'>Hire From FemAcademy</h2>
          <ul>
            <li>★ Top software engineers</li>
            <li>★ Well experienced engineers that work under pressure</li>
            <li>★ Vetted software engineers</li>
            <li>★ Problem Solvers</li>
            <li>★ Worked on real life projects</li>
          </ul>
        </div>


        {/* d inputs on click border should still b hidden */}
        <section className='max-w-[83.3%] mx-auto'>
          <h2 className='text-3xl font-semibold mb-4'>Hiring Form</h2>

          <form action="" method='' onSubmit={null}>
            <div className='border-it flex flex-col bg-fc_cardbg px-12 py-12 gap-4 mb-16'>
              <label className='border-it w-full pl-5 pt-1'>
                <div className='text-xs'>Name/Company's Name</div>
                <input className='border-it' type="text" />
              </label>
              <label className='border-it w-full pl-5 pt-1'>
                <div className='text-xs'>Message</div>
                <textarea cols="30" rows="3"></textarea>
              </label>
            </div>
              <div className='flex gap-4 text-xs'>
                <button className='bg-fc_sc1 px-4 py-2 rounded-3xl rounded-br' type='submit'>Hire</button>
                <h3 className='text-xs '>or speak to our representative</h3>
                <Link
                  className="bg-fc_sc1 px-4 py-2 rounded-3xl rounded-br"
                  to="contact-us"
                  // absolute?
                >
                  Call
                </Link>
              </div>
          </form>

        </section>
      </section>
      
    </main>{/*  bg-img*/}
    </>
  )
}

export default Hire