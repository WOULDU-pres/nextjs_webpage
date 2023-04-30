import Image from "next/image";
import team_img from '/public/dev1.jpg'

export default function SKTproject() {
    let team = ['Frontend Developer', 'Backend Developer', 'Machine Learning Engineer']
    let team_img = ['/dev1.jpg', '/dev2.jpg', '/dev3.jpg']

    

    return (
        <div>
            <h1>SKTproject</h1>
            <div>
                {team.map((item, index) => {
                    return (
                        <div className="project" key={index}>
                            <img src={team_img[index]} style={{ width: "90%", height: "90%", objectFit: "cover" }} />
                            <h4>{item}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}