import { useState } from "react";
import { Link } from "react-router-dom";

import LSimage from "../assets/img/360_F_260038257_AsuRe61dHkzbnUsWu880EenOyARDJxqK 1.png"
import L2image from "../assets/img/360_F_340574229_LLtUvm4iX1HGL1GX4MEJ4TOBf6szdoAp.png"
import employed from "../assets/icon/image 17.svg"
import PchartS from "../assets/icon/group-stat.svg"
import PchartN from "../assets/icon/group-num.svg"
import {FaChevronDown} from "react-icons/fa"

function Home() {

  const [selected, setSelected] = useState(null)

  const _toggleFaq = (i) => {
    if(i === selected){
      return setSelected(null)
    }

    setSelected(i)
  }


  const faqDataSet = [
    {
      question: 'What is FemAcademy?',
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
      accusamus, iusto minima officia nihil aliquam. Delectus numquam
      tenetur ullam qui excepturi minus expedita voluptatibus, sequi,
      molestias quibusdam asperiores eveniet minima.`
    },
    {
      question: 'Is Femcode Africa just for ladies? ',
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
      accusamus, iusto minima officia nihil aliquam. Delectus numquam
      tenetur ullam qui excepturi minus expedita voluptatibus, sequi,
      molestias quibusdam asperiores eveniet minima.`
    },
    {
      question: 'Who can apply?',
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
      accusamus, iusto minima officia nihil aliquam. Delectus numquam
      tenetur ullam qui excepturi minus expedita voluptatibus, sequi,
      molestias quibusdam asperiores eveniet minima.`
    },
    {
      question: 'What is the application process like?',
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
      accusamus, iusto minima officia nihil aliquam. Delectus numquam
      tenetur ullam qui excepturi minus expedita voluptatibus, sequi,
      molestias quibusdam asperiores eveniet minima.`
    },
    {
      question: 'Are there physical trainings?',
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
      accusamus, iusto minima officia nihil aliquam. Delectus numquam
      tenetur ullam qui excepturi minus expedita voluptatibus, sequi,
      molestias quibusdam asperiores eveniet minima.`
    },
    {
      question: 'What if I am working?',
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
      accusamus, iusto minima officia nihil aliquam. Delectus numquam
      tenetur ullam qui excepturi minus expedita voluptatibus, sequi,
      molestias quibusdam asperiores eveniet minima.`
    },
    {
      question: 'What trainings do you offer?',
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
      accusamus, iusto minima officia nihil aliquam. Delectus numquam
      tenetur ullam qui excepturi minus expedita voluptatibus, sequi,
      molestias quibusdam asperiores eveniet minima.`
    },
    {
      question: 'What is the tuition fee?',
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
      accusamus, iusto minima officia nihil aliquam. Delectus numquam
      tenetur ullam qui excepturi minus expedita voluptatibus, sequi,
      molestias quibusdam asperiores eveniet minima.`
    },
    {
      question: 'What if I can’t pay the tuition fee all at once?',
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
      accusamus, iusto minima officia nihil aliquam. Delectus numquam
      tenetur ullam qui excepturi minus expedita voluptatibus, sequi,
      molestias quibusdam asperiores eveniet minima.`
    },
    {
      question: 'What if I have a question not listed here?',
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
      accusamus, iusto minima officia nihil aliquam. Delectus numquam
      tenetur ullam qui excepturi minus expedita voluptatibus, sequi,
      molestias quibusdam asperiores eveniet minima.`
    }
  ]

  return (
    <>
      <main className="pt-32 mb-10">
        <section className="flex border-i md:min-h-[80vh] mb-10">
          <div className="basis-5/6 mx-auto flex flex-col gap-16 md:gap-0 md:flex-row justify-between">
            <div className=" text-fc_prim md:mt-16">
              <div className="mb-14">
                <h1 className="text-6xl font-bold mb-2">
                  Your Female <br /> Tech Career
                </h1>
                <span className="text-3xl font-semibold">Starts Here</span>
              </div>
              <Link
                className="bg-fc_sc1 text-sm px-3 py-2 rounded-3xl rounded-br"
                to='fem_academy/enroll'
              >
                Join The Waiting List
              </Link>
            </div>
            <div className="basis-3/5 fc_bgimg">
              <img src={LSimage} alt="" />
            </div>
          </div>
        </section>

        <section className=" flex flex-col gap-10 items-center justify-center text-center min-h-[80vh]">
          <h2 className="text-fc_prim font-bold text-4xl">About Us</h2>
          <p className="max-w-prose text-xl">
            Statistics have stated that there is a lot of gap in the ratio of
            women to men in tech in Africa. We at FemCode Africa believe that
            every female has all it takes to start and sustain a career in Tech.
            FemCode Africa is a virtual tech education company focused on
            training young females in Africa and helping them get employed.
          </p>

          <section className="self-stretch">
            <div className="flex flex-col gap-8 md:gap-0 md:flex-row md:justify-evenly">
              <figure>
                <div className="mb-4">
                  <div className="p-4 bg-fc_ibg inline-block rounded-full">
                    <img
                      className="w-full"
                      src={employed}
                      alt="employed illustration"
                    />
                  </div>
                </div>
                <figcaption className="text-sm">
                  Helps you get employed
                </figcaption>
              </figure>
              <figure>
                <div className="mb-4">
                  <div className="p-4 bg-fc_ibg inline-block rounded-full">
                    <img
                      className="w-full"
                      src={employed}
                      alt="employed illustration"
                    />
                  </div>
                </div>
                <figcaption className="text-sm">
                  Helps you get employed
                </figcaption>
              </figure>
              <figure>
                <div className="mb-4">
                  <div className="p-4 bg-fc_ibg inline-block rounded-full">
                    <img
                      className="w-full"
                      src={employed}
                      alt="employed illustration"
                    />
                  </div>
                </div>
                <figcaption className="text-sm">
                  Helps you get employed
                </figcaption>
              </figure>
              <figure>
                <div className="mb-4">
                  <div className="p-4 bg-fc_ibg inline-block rounded-full">
                    <img
                      className="w-full"
                      src={employed}
                      alt="employed illustration"
                    />
                  </div>
                </div>
                <figcaption className="text-sm">
                  Helps you get employed
                </figcaption>
              </figure>
            </div>
          </section>
        </section>

        <section className="flex flex-col gap-15 special-bg min-h-[80vh] mb-10">
          <h2 className="text-fc_cardbg text-5xl md:text-3xl flex items-center justify-center  md:justify-none md:block font-bold bg-cover bg-no-repeat bg-services h-[30vh] md:pt-5 md:pl-5">
            Our Services
          </h2>
          <section className="flex mb-7">
            <div className="basis-5/6 mx-auto flex flex-col md:flex-row gap-7 mt-[-4rem]">
              <article className="basis-1/4 bg-fc_cardbg text-xs  shadow-md px-3 py-6">
                <h3 className="text-base font-bold mb-2">FemAcademy</h3>
                <p className="mb-10">
                  Fem-Academy is a Virtual institute that trains and fortify
                  females with real life projects to become software experts
                </p>
                <a
                  className="bg-fc_sc1 px-3 py-2 rounded-3xl rounded-br"
                  href="#"
                >
                  See more
                </a>
              </article>
              <article className="basis-1/4 bg-fc_cardbg text-xs  shadow-md px-3 py-6">
                <h3 className="text-base font-bold mb-2">FemReach</h3>
                <p className="mb-10">
                  FemReach is a non-profit project powered by FemCode Africa
                  dedicated to advancing the lives of underprivileged girls
                  through technology.
                </p>
                <a
                  className="bg-fc_sc1 px-3 py-2 rounded-3xl rounded-br"
                  href="#"
                >
                  See more
                </a>
              </article>
              <article className="basis-1/4 bg-fc_cardbg text-xs  shadow-md px-3 py-6">
                <h3 className="text-base font-bold mb-2">FemAcademy</h3>
                <p className="mb-10">
                  Fem-Academy is a Virtual institute that trains and fortify
                  females with real life projects to become software experts
                </p>
                <a
                  className="bg-fc_sc1 px-3 py-2 rounded-3xl rounded-br"
                  href="#"
                >
                  See more
                </a>
              </article>
              <article className="basis-1/4 bg-fc_cardbg text-xs  shadow-md px-3 py-6">
                <h3 className="text-base font-bold mb-2">FemAcademy</h3>
                <p className="mb-10">
                  Fem-Academy is a Virtual institute that trains and fortify
                  females with real life projects to become software experts
                </p>
                <a
                  className="bg-fc_sc1 px-3 py-2 rounded-3xl rounded-br"
                  href="#"
                >
                  See more
                </a>
              </article>
            </div>
          </section>

          <section className="flex">
            <div className="basis-1/3 mx-auto flex flex-col gap-10">
              <figure className="flex justify-between items-center">
                <div className="basis-1/3">
                  <img
                    className="w-full"
                    src={PchartS}
                    alt="ninety-nine percent Pie Chart"
                  />
                </div>
                <figcaption>
                  <ul className="flex flex-col gap-4">
                    <li>Internships</li>
                    <li>Women Trained</li>
                    <li>Job Opportunities</li>
                  </ul>
                </figcaption>
              </figure>
              <figure className="flex justify-between items-center">
                <div className="basis-1/3">
                  <img
                   className="w-full"
                   src={PchartN}
                   alt="number three pie" />
                </div>
                <figcaption>Countries Covered</figcaption>
              </figure>
            </div>
          </section>
        </section>

        <section className="flex md:min-h-[90vh] items-center mb-10 bg-fc_sect1">
          <div className="basis-5/6 mx-auto flex flex-col md:flex-row gap-32 md:gap-10">
            <div className="basis-1/2 py-16 fc_bgimg self-center">
              <div className=" fc_bgimg">
                <img src={L2image} alt="" />
              </div>
            </div>

            <div className="basis-2/5">
              <h2 className="text-3xl text-fc_prim font-bold mb-7">
                Mission Statement
              </h2>
              <div className="flex flex-col gap-5 ml-7">
                <p>
                  Statistics have stated that there is a lot of gap in the ratio
                  of women to men in tech in Africa. We at FemCode Africa
                  believe that every female has all it takes to start and
                  sustain a career in Tech.
                </p>
                <p>
                  Our Academy is set to provide these African females with not
                  just a school to learn and grow but also a community to
                  sustain their tech careers by helping them get employed after
                  their tech education with us.
                </p>
                <p>
                  With our well structured curriculum which includes both theory
                  and hand on desktop projects, we equip these women to become
                  top software engineers and be able to work with any software
                  company.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex">
          <div className="basis-5/6 mx-auto">
            <h2 className="text-3xl mb-3">
              Frequently Asked <span className="text-fc_txt1">Questions</span>
            </h2>
            <p className="mb-10">
              We’ve answered some of the questions you might have about our
              services here
            </p>

            <section className="flex flex-col gap-7">
                {faqDataSet.map((item, i) => (
                  <article key={i}>
                    <div onClick={() => { _toggleFaq(i)}} className="flex justify-between items-center bordr-it bg-fc_fq px-10 py-4">
                      <h3>{item.question}</h3>
                      <FaChevronDown className="text-xs" />
                    </div>
                    <p className={"bg-fc_fqd px-20 py-5 borer-it " + (selected === i ? null : " hidden")}>
                      {item.answer}
                    </p>
                </article>
                ))}
              
            </section>
          </div>
        </section>
      </main>
    </>
  );
} 

export default Home;
