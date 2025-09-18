

export default function Mylinks() {

    const Mylinks = [
        {id:1 , content:"About" , path:"#about" },
        {id:2 , content:"Skills" , path:"#Skills"},
        {id:3 , content:"Projects" , path:"#projects"},
        {id:4 , content:"Contact" , path:"#contact"},
    ]
    const Links = Mylinks.map(link => {
        
        return <li className="p-5" key={link.id}>
                <a className=" hover:border-b hover:text-gray-500 border-gray-500 transition-all " href={link.path}>{link.content}</a>
                </li>
        }
    )

    return (
        <>
            {Links}
        </> 
    )
}