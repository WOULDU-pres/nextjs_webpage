import Image from "next/image";
import team_img from '/public/dev.jpg'

export default function SKTproject() {
    let team = ['Frontend Developer', 'Backend Developer', 'Machine Learning Engineer']
    let team_img = ['/dev.jpg', '/dev.jpg', '/dev.jpg']

    

    return (
        <div>
            <h1>SKTproject</h1>
            <div>
                {team.map((item, index) => {
                    return (
                        <div className="project" key={index}>
                            <img src={team_img[index]} style={{ width: "50%", height: "50%", objectFit: "cover" }} />
                            <h4>{item}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}