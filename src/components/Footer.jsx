import brand from '../assets/brands/1578496245414 1.png'
import {ImFacebook2, ImLinkedin, ImTwitter } from 'react-icons/im'
// ImFacebook2


function Footer() {
  return (
    <>
      <footer className='flex text-xs border-t-2 border-dark'>
        <div className='basis-full md:basis-11/12 px-5 pt-10 mb-16 bordeer-it'>
          <div className='flex mb-6'>
            <div className='basis-[10%]'><img src={brand} alt="company brand femcode" className="w-full" /></div>
          </div>

          <section className='flex flex-wrap md:flex-row md:justify-between gap-10'>
            <div className='basis-2/5 md:basis-1/5'>
              <h6 className='pl-4 mb-2'>Get in touch</h6>
              <ul className='flex flex-col gap-1 mb-4'>
                <li><a href="#">+234 907 7343 810</a></li>
                <li><a href="#">femcodeafrica@gmail.com</a></li>
                <li><a href="#">@femcodeafrica.org</a></li>
              </ul>
              <h6 className='pl-4 mb-2'>Connect with us</h6>
              <ul className="flex gap-3">
                {/* icons or imgs */}
                <li><a href=""><ImFacebook2 className='text-fb'/></a></li> 
                <li><a href=""><ImLinkedin className='text-linkdn'/></a></li>
                <li><a href=""><ImTwitter className='text-twit'/></a></li>
              </ul>
            </div>
            <ul className='flex flex-col gap-3 basis-2/5 md:basis-1/5'>
              <li><a href="#">FemCode Africa</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Achievements</a></li>
              <li><a href="#">Join The Community</a></li>
              <li><a href="#">Our Services</a></li>
            </ul>
            <ul className='flex flex-col gap-3 basis-2/5 md:basis-1/5'>
              <li><a href="#">FemAcademy</a></li>
              <li><a href="#">Our Courses</a></li>
              <li><a href="#">Tuition Fee</a></li>
              <li><a href="#">Our Classes</a></li>
              <li><a href="#">E-learning</a></li>
              <li><a href="#">Join the Waiting List</a></li>
            </ul>
            <ul className='flex flex-col gap-3 basis-2/5 md:basis-1/5'>
              <li><a href="#">FemReach</a></li>
              <li><a href="#">Sponsor</a></li>
              <li><a href="#">Donate</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </section>
        </div>
      </footer>
    </>
  )
}

export default Footer


