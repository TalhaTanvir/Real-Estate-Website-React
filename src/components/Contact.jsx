import React from 'react'

function Contact() {
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make aa Move? Let's Build Your Future Togather</p>


        <form>
            <div>
                <div>
                    Your Name
                    <input type="text" placeholder='Your Name' required/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Contact