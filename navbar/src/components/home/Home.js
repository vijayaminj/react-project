import React from 'react'

function Home() {
  return (
    <section className='h-full mt-64 md:mt-20'>
    <div className='flex flex-col sm:flex-row justify-around sm:justify-around items-center h-[50rem] sm:h-96 bg-teal-800'>
        <img src='https://images.pexels.com/photos/4855477/pexels-photo-4855477.jpeg?auto=compress&cs=tinysrgb&w=600' 
        className='h-80 w-80 rounded-xl shadow-lg'/>
        <div className='w-80 h-80 bg-lime-300 rounded-lg'>
            <h2 className='text-lg font-bold text-center'>About of reading</h2>
            <p className='p-3'>
                Reading is typically an individual activity, done silently, although on occasion a person reads out loud for other listeners; or reads aloud for one's own use, for better comprehension. Before the reintroduction of separated text (spaces between words) in the late Middle Ages, 
                the ability to read silently was considered rather remarkable. </p> 
        </div>
      
    </div>
    <div className='flex flex-wrap gap-2 justify-evenly  items-center cursor-pointer my-4 h-[54rem] md:h-[30rem] lg:h-96 border-2 border-red-500'>
        <div className='w-80 h-32 rounded-lg bg-red-400 hover:scale-105 transition all ease-in-out delay-75 duration-200 shadow-2xl'>
          <img src=''/>          

        </div>
        <div className='w-96 h-32 rounded-lg bg-purple-400 hover:scale-110 transition all ease-in-out delay-75 duration-200'>
          <img src=''/>          

        </div>
        <div className='w-80 h-32 rounded-lg bg-green-400'>
          <img src=''/>          

        </div>
        <div className='w-80 h-32 rounded-lg bg-pink-400'>
          <img src=''/>          

        </div>
        <div className='w-96 h-32 rounded-lg bg-yellow-400'>
          <img src=''/>          

        </div>
        <div className='w-80 h-32 rounded-lg bg-blue-400'>
          <img src=''/>          

        </div>

    </div>
    <div className='h-60'>
        <article className='h-[30rem] md:h-72 lg:h-48 w-auto p-8 mb-4 border-solid border-2 border-indigo-500 '>
        In the academic field, some view literacy in a more philosophical manner and
         propose the concept of "multiliteracies". For example, they say, "this huge shift
          from traditional print-based literacy to 21st century multiliteracies reflects
           the impact of communication technologies and multimedia on the evolving nature 
           of texts, as well
         as the skills and dispositions associated with the consumption, production, evaluation, and distribution of those texts (Borsheim, Meritt, & Reed, 2008, p. 87)".[30][31] According to cognitive neuroscientist Mark Seidenberg these "multiple literacies" have allowed educators to change the topic from reading and writing to "Literacy". He goes on to say that some educators, when faced with criticisms of how reading is taught,
         "didn't alter their practices, they changed the subject".

        </article>
    </div>
    </section>

    
  )
}

export default Home
