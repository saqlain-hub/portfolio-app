import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2020,
        title: 'Content Creator',
        duration: '3 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nemo accusamus obcaecati illum. Deleniti, dolore explicabo. Vero, rem? Voluptates, itaque. Nisi ipsa blanditiis dolorum ex aut praesentium natus, reprehenderit voluptas totam dolorem? Laudantium nostrum iure impedit odio doloremque quia dolorem magnam sapiente repellendus? Voluptatibus a, cumque saepe aut repudiandae maiores, cupiditate ducimus atque excepturi aliquam sapiente minima, iste dolorem. Natus, laborum aliquid nulla, eaque ipsam, perferendis ab expedita pariatur neque nihil necessitatibus? Esse ab dignissimos beatae soluta repellat officiis natus est! Perspiciatis sint officia tempora modi fugit sit labore nisi excepturi! Eaque atque amet, voluptas libero vero obcaecati maiores dolore.',
    },
    {
        year: 2017,
        title: 'Google',
        duration: '3 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nemo accusamus obcaecati illum. Deleniti, dolore explicabo. Vero, rem? Voluptates, itaque. Nisi ipsa blanditiis dolorum ex aut praesentium natus, reprehenderit voluptas totam dolorem? Laudantium nostrum iure impedit odio doloremque quia dolorem magnam sapiente repellendus? Voluptatibus a, cumque saepe aut repudiandae maiores, cupiditate ducimus atque excepturi aliquam sapiente minima, iste dolorem. Natus, laborum aliquid nulla, eaque ipsam, perferendis ab expedita pariatur neque nihil necessitatibus? Esse ab dignissimos beatae soluta repellat officiis natus est! Perspiciatis sint officia tempora modi fugit sit labore nisi excepturi! Eaque atque amet, voluptas libero vero obcaecati maiores dolore.',
    },
    {
        year: 2015,
        title: 'Amazon',
        duration: '2 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nemo accusamus obcaecati illum. Deleniti, dolore explicabo. Vero, rem? Voluptates, itaque. Nisi ipsa blanditiis dolorum ex aut praesentium natus, reprehenderit voluptas totam dolorem? Laudantium nostrum iure impedit odio doloremque quia dolorem magnam sapiente repellendus? Voluptatibus a, cumque saepe aut repudiandae maiores, cupiditate ducimus atque excepturi aliquam sapiente minima, iste dolorem. Natus, laborum aliquid nulla, eaque ipsam, perferendis ab expedita pariatur neque nihil necessitatibus? Esse ab dignissimos beatae soluta repellat officiis natus est! Perspiciatis sint officia tempora modi fugit sit labore nisi excepturi! Eaque atque amet, voluptas libero vero obcaecati maiores dolore.',
    },
    {
        year: 2012,
        title: 'Facebook',
        duration: '3 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nemo accusamus obcaecati illum. Deleniti, dolore explicabo. Vero, rem? Voluptates, itaque. Nisi ipsa blanditiis dolorum ex aut praesentium natus, reprehenderit voluptas totam dolorem? Laudantium nostrum iure impedit odio doloremque quia dolorem magnam sapiente repellendus? Voluptatibus a, cumque saepe aut repudiandae maiores, cupiditate ducimus atque excepturi aliquam sapiente minima, iste dolorem. Natus, laborum aliquid nulla, eaque ipsam, perferendis ab expedita pariatur neque nihil necessitatibus? Esse ab dignissimos beatae soluta repellat officiis natus est! Perspiciatis sint officia tempora modi fugit sit labore nisi excepturi! Eaque atque amet, voluptas libero vero obcaecati maiores dolore.',
    },
];

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl mb-8 font-bold text-center text-[#001b5e] '>Work</h1>

        {data.map((item, idx) => (
            <WorkItem 
                key={idx} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                details={item.details}
            />
        ))}

    </div>
  )
}

export default Work