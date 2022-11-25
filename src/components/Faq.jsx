import {useState} from 'react'
import {FaChevronDown} from 'react-icons/fa'

function Faq() {

  const [selected, setSelected] = useState(null)

  const _toggleFaq = (i) => {
    if(i === selected){
      return setSelected(null)
    }

    setSelected(i)
  }


  const faqDataSet = [
    {
      question: 'What is FemReach?',
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
      accusamus, iusto minima officia nihil aliquam. Delectus numquam
      tenetur ullam qui excepturi minus expedita voluptatibus, sequi,
      molestias quibusdam asperiores eveniet minima.`
    },
    {
      question: 'How can I donate?',
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
      accusamus, iusto minima officia nihil aliquam. Delectus numquam
      tenetur ullam qui excepturi minus expedita voluptatibus, sequi,
      molestias quibusdam asperiores eveniet minima.`
    },
    {
      question: 'How do I register an Orphan?',
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
      accusamus, iusto minima officia nihil aliquam. Delectus numquam
      tenetur ullam qui excepturi minus expedita voluptatibus, sequi,
      molestias quibusdam asperiores eveniet minima.`
    },
  ]

  return (
    <>
    <section className="flex flex-col gap-7">
      {faqDataSet.map((item, i) => (
        <article key={i}>
          <div onClick={() => { _toggleFaq(i)}} className="flex justify-between items-center bg-fc_fq px-10 py-4">
            <h3>{item.question}</h3>
            <FaChevronDown className="text-xs" />
          </div>
          <p className={"bg-fc_fqd px-20 py-5" + (selected === i ? null : " hidden")}>
            {item.answer}
          </p>
        </article>
      ))}
    
    </section>
    </>
  )
}

export default Faq