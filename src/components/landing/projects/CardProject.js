

export default function CardProject({image_project , title , description , stack , href}) {

    return (
        <div>
            <div className="bg-gray-200 p-4 rounded-xl h-full">
                <article class="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg h-full bg-white">

                    <img
                    src={image_project} alt="no signal" 
                    class="h-60 w-full lg:object-cover"
                    />

                    <div class=" p-4 sm:p-6  ">
                        <time datetime="2022-10-10" class="block text-xs text-gray-500"> {title}</time>

                        <h3 class="mt-0.5 text-gray-900">{description}</h3>


                        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            
                            {stack}
                        </p>
                        <div className="text-center mt-4">
                            <a href={href} target="blank" >
                                <button
                                    class="bg-black hover:bg-transparent border hover:border-black hover:text-black text-white font-bold py-2 px-4 rounded transition group">
                                    <span>GitHub </span>
                                    <i class="fa-solid fa-arrow-right text-sm group-hover:translate-x-2 transition duration-300"></i>
                                </button>
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}