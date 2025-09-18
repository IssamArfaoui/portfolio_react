

import img_profile from '../../images/2024_12_19_12_17_IMG_2092.png'
import Title from '../../titles/Title'

export default function About() {

    return (
        <div id='about' className='lg:py-14'>
            <Title title="About Me" />

            <div className='flex justify-center py-12 px-4'>
                <div className='grid md:grid-cols-2 w-[840px] items-center gap-4'>
                    <div className='flex justify-center'>
                        <img className='w-[450px] h-[470px] rounded-lg object-contain' src={img_profile} alt='' />
                    </div>
                    <div className='p-5 px-2'>
                        <div className='grid grid-cols-2 justify-center gap-4 text-center mb-3.5'>
                            <div className='px-3 py-3 rounded-2xl border border-black '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hi-outline hi-academic-cap inline-block size-12">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/>
                                </svg>
                                <p className='text-xl font-bold'>Education</p>
                                <p className='text-lg text-gray-400'>Bac+2 </p>
                                <p className='text-lg text-gray-400'> Dvlp Web </p>

                            </div>
                            <div className='px-3 py-3 rounded-2xl border border-black'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="hi-outline hi-academic-cap inline-block size-12"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" /><path d="M9 12l2 2l4 -4" /></svg>
                                <p className='text-xl font-bold'>Completed</p>
                                <p className='text-lg text-gray-400 py-2'></p>
                                <p className='text-lg text-gray-400'>10 + Projects</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-lg text-gray-500'>
                               I am a passionate Fullstack Web Developer with a solid foundation in Laravel and React.js. I enjoy building modern, user-friendly web applications and 
                               I'm always motivated to learn new technologies and improve my skills.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}