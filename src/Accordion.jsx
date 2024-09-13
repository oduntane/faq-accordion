/* eslint-disable react/prop-types */
import {useState} from 'react'
import minusIcon from './assets/icon-minus.svg'
import plustIcon from './assets/icon-plus.svg'

const faqList = [
    {
        title: "What is Frontend Mentor, and how will it help me?",
        content: `
            Frontend Mentor offers realistic coding challenges to help 
            developers improve their frontend coding skills with projects in
            HTML, CSS, and JavaScript. It's suitable for all levels and ideal
            for portfolio building.
        `
    },
    {
        title: "Is Frontend Mentor free?",
        content: `
            Yes, Frontend Mentor offers both free and premium coding challenges,
            with the free option providing access to a range of projects 
            suitable for all skill levels.
        `
    },
    {
        title: "Can I use Frontend Mentor projects in my portfolio?",
        content: `
            Yes, you can use projects completed on Frontend Mentor in your
            portfolio. It's an excellent way to showcase your skills to 
            potential employers!
        `
    },
    {
        title: "How can i get help if I'm stuck on a Frontend Mentor challenge?",
        content: `
            The best place to get help is inside Frontend Mentor's Discord 
            community. There's a help channel where you can ask questions and 
            seek support from other community members.
        `
    }
]

function AccordionItem({index, title, children, selected, onSelectedChange}) {


    return (
        <div className="accordion">
          <div>
            <h2>{title}</h2>
            <span onClick={() => {
                selected ? onSelectedChange(null) : onSelectedChange(index)
            }}>
                {
                    selected ?
                    <img src={minusIcon} alt="Active"/>:
                    <img src={plustIcon} alt="Not Active" />
                }
              
            </span>
          </div>
          {
            selected && <p>
            {children}
          </p>
          }
        </div>
    )
}

export default function Accordion() {
    const [selected, setSelected] = useState(null)


    return (
        <>
        {
            faqList.map((item, index) => {
                return (
                    <AccordionItem key={index} title={item.title} 
                                selected={selected == index}
                                index={index}
                                onSelectedChange={setSelected}>
                                    {
                                        item.content
                                    }
                    </AccordionItem>
                )
            })
        }
        
        </>
    )

}