import React from 'react'

function Error404() {
  return (
    <>
      <section className='pt-20 flex items-center '>
        {/* TODO: footer and main header shouldn't b 
        shown on all other none-existent/error paths */}

        <h1 className='basis-2/5 h-[60%] border-it rounded-md font-semibold text-sm text-fc_prim mb-10 max-w-[80%] mx-auto'>
          404 you have reached a wrong path,<br />
          <span className='font-bold text-fc_txt1'>
            this page doesn't exist
          </span>
        </h1>
      </section>
    </>
  )
}

export default Error404