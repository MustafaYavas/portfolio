import styles from './Contact.module.css'

const ContactForm = () => {
    return (
        <div className='flex justify-center items-center h-1/2 mt-5'>
            <form 
                action='https://getform.io/f/84328699-a897-4ade-b76b-6c8efbbc567e' 
                method='POST'
                className='flex flex-col w-full md:w-1/2'
            >
                <input 
                    type='text' 
                    name='name' 
                    placeholder='Enter your name' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                />

                <input 
                    type='email' 
                    name='email' 
                    placeholder='Enter your email' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-5'
                />

                <textarea 
                    name='message'
                    rows={5}
                    placeholder='What do you want to say?'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-full'
                >
                </textarea>

                <button className={`${styles.button} mt-5 mx-auto`}>
                    <div className={styles['svg-wrapper-1']}>
                        <div className={styles['svg-wrapper']}>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
                                <path fill='none' d='M0 0h24v24H0z'></path>
                                <path fill='currentColor' d='M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z'></path>
                            </svg>
                        </div>
                    </div>
                    <span>Send</span>
                </button>
            </form>
        </div>
    )
}

export default ContactForm;