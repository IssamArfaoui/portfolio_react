
import Title from "../../titles/Title";

import mol_terrain from "../../images/mol_terrain.png"
import dream_fashion from "../../images/dream_fashion.png"
import cosmetique from "../../images/Cosmetique.png"
import CardProject from "./CardProject";


export default function Projects() {

    return (

        <div>
            <div id="projects">
                <Title title="Projects"  />
                <div className="mt-10 p-10">
                    <div className="grid md:grid-cols-2 gap-10 ">
                        <CardProject 
                            image_project={mol_terrain}
                            title={"Mol_Terrain"}
                            description={"Mol Terrain is a web platform that allows users to easily book local football fields. The system includes features like scheduling, virtual payments, and field management for owners."}
                            stack={"Laravel | blade| MySQL | tailwindCss | Livewire"}
                            href={"https://github.com/IssamArfaoui/mol_terrain"}
                        />
                        <CardProject 
                            image_project={dream_fashion}
                            title={"Dream_Fashion"}
                            description={"Dream_Fashion is an e-commerce web application that allows users to browse, search, and purchase fashion products online. It offers a simple and modern shopping experience with a secure and user-friendly interface."}
                            stack={"Php | MySQL | JavaScript | Bootstrap Css"}
                            href={"https://github.com/IssamArfaoui/dream_fashion"}
                        />
                        <CardProject 
                            image_project={cosmetique}
                            title={"Cosmetique "}
                            description={"Cosmetique is an online cosmetics store that allows users to explore and purchase beauty products. The platform provides a smooth shopping experience with an intuitive design ."}
                            stack={"Php | MySQL | JavaScript | Bootstrap Css"}
                            href={"https://github.com/IssamArfaoui/project_cosmetique"}
                        />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}