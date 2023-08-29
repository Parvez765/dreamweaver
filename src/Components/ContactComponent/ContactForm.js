import React from 'react';
import "./ContactForm.css"
import Swal from 'sweetalert2';

const ContactForm = () => {

    
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const firstName = form.firstName.value
        const lastName = form.lastName.value
        const email = form.email.value
        const phone = form.phone.value
        const option = form.eventType.value; 
        const date = form.eventDate.value; 
        const location = form.location.value; 
        const dress = form.dress.value; 
        const venue = form.venue.value; 
        const guest = form.number.value;
        const hour = new Date().getHours()
        const min = new Date().getMinutes()
        const seconds = new Date().getSeconds()
        const time = `${hour}:${min}:${seconds}`
        const referrer = form.referrer.value;
        const message = form.message.value
        
        const user = {
            firstName, lastName, email, phone, option, date, location, dress, venue, guest, time, referrer, message
        }
        
        if(user){
            Swal.fire(
                'Thank You!',
                'We Will Contact With You!',
                'success'
              )
              form.reset()
        }

        
        
    }

    return (
        <div className='container mx-auto'>
            <div className='text-white'>
                <h1 className='mt-[80px] text-[30px] lg:text-[40px]'>Get In Touch</h1>
                <p className='lg:w-[650px] block mx-auto mt-[10px]'>If you are interested in having Cassandra document your wedding day, please fill out the contact form below and she will respond as soon as possible.</p>
            </div>
            <div className='mt-[50px]'>
                <form onSubmit={handleOnSubmit}>
                    <div className='grid lg:grid-cols-2 items-center gap-[75px]'>
                        <div className='flex flex-col'>
                            <label className='text-white mb-[15px] text-[20px] text-left'>First Name *</label>
                            <input type="text" name="firstName" className='w-full  lg:h-[50px] block mx-auto inputField text-white glowing-input' required placeholder='First Name' />
                        </div>
                        <div className='flex flex-col items-start'>
                            <label className='text-white mb-[15px] text-[20px] text-left'>Last Name *</label>
                            <input type="text" name="lastName" className='w-full  lg:h-[50px] block mx-auto inputField text-white  glowing-input' required placeholder='Last Name' />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 items-center gap-[75px] mt-[15px]'>
                        <div className='flex flex-col'>
                            <label type="email" className='text-white mb-[15px] text-[20px] text-left'>Email *</label>
                            <input type="email" name="email" className='w-full  lg:h-[50px] block mx-auto inputField text-white glowing-input' required placeholder='Email' />
                        </div>
                        <div className='flex flex-col items-start'>
                            <label type="phone" className='text-white mb-[15px] text-[20px] text-left'>Phone *</label>
                            <input type="number" name="phone" className='w-full  lg:h-[50px] block mx-auto inputField text-white  glowing-input' required placeholder='Phone Number' />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 items-center gap-[75px] mt-[15px]'>
                        <div className='flex flex-col'>
                            <label type="email" className='text-white mb-[15px] text-[20px] text-left'>Event Type *</label>
                            <select  name='eventType' className='w-full  lg:h-[50px] block mx-auto inputField text-white  glowing-input'>
                                <option value='Wedding' className='text-black'>Weeding</option>
                                <option value='Commercial' className='text-black'>Commercial</option>
                                <option value='Other' className='text-black'>Other</option>
                            </select>
                        </div>
                        <div className='flex flex-col items-start'>
                            <label type="" className='text-white mb-[15px] text-[20px] text-left'>Event Date *</label>
                            <input type="date" name="eventDate"  className='w-full  lg:h-[50px] block mx-auto inputField text-white  glowing-input' required placeholder='Phone Number' />
                        </div>
                    </div>
                    <div className='flex flex-col items-start mt-[15px]'>
                        <label type="" className='text-white mb-[15px] text-[20px] text-left'>Event Location *</label>
                        <input type="text" name="location" className='w-full  lg:h-[50px] block mx-auto inputField text-white  glowing-input' required placeholder='Event Location' />
                    </div>
                    <div className='flex flex-col items-start mt-[15px]'>
                        <label type="" className='text-white mb-[15px] text-[20px] text-left'>Dress Designer/Attire *</label>
                        <input type="text" name="dress" className='w-full  lg:h-[50px] block mx-auto inputField text-white  glowing-input' required placeholder='Event Location' />
                    </div>
                    <div className='grid lg:grid-cols-2 items-center gap-[75px] mt-[15px]'>
                        <div className='flex flex-col'>
                            <label type="" className='text-white mb-[15px] text-[20px] text-left'>Venue Name </label>
                            <input type="text" name="venue" className='w-full  lg:h-[50px] block mx-auto inputField text-white  glowing-input' placeholder='Venue Name' />
                        </div>
                        <div className='flex flex-col items-start'>
                            <label type="text" className='text-white mb-[15px] text-[20px] text-left'>Number of Guests </label>
                            <input type="number" name="number" className='w-full  lg:h-[50px] block mx-auto inputField text-white  glowing-input' placeholder='Number of Gusts' />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 items-center gap-[75px] mt-[15px]'>
                        <div className='flex flex-col'>
                            <label type="" className='text-white mb-[15px] text-[20px] text-left'>Ceremony Time </label>
                            <input type="time" name="eventTime" className='w-full  lg:h-[50px] block mx-auto inputField text-white  glowing-input' placeholder='Ceremony Time' />
                        </div>
                        <div className='flex flex-col items-start'>
                            <label type="text" className='text-white mb-[15px] text-[20px] text-left'>Referrer </label>
                            <input type="text" name="referrer" className='w-full  lg:h-[50px] block mx-auto inputField text-white  glowing-input' placeholder='Referrer Name' />
                        </div>
                    </div>
                    <div className='flex flex-col items-start mt-[15px]'>
                        <label type="text" className='text-white mb-[15px] text-[20px] text-left'>Message * </label>
                        <textarea name="message" class='w-full lg:h-[150px] block mx-auto inputField text-white glowing-input p-[15px]' required></textarea>
                    </div>
                    <div>
                        <button type="submit" className='submitButton w-full mt-[30px]'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;