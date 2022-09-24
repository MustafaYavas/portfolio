import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div
            name='Contact'
            className='bg-gradient-to-b from-black via-slate-900 to-slate-900 w-full h-screen p-5 text-white'
        >
            <div className='max-w-screen-lg flex flex-col p-5 justify-center mx-auto h-full'>
                <div className='pb-10'>
                    <p className='text-4xl font-bold border-b-4 border-slate-700 inline'>Contact</p>
                    <p className='py-5'>Don't hesitate to say hi!</p>
                </div>

                <ContactForm />
            </div>
        </div>
    )
}

export default Contact;