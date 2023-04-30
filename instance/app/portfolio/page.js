import Link from "next/link";

export default function Portfolio() {
    return(
        <div>
            <h1 className="title">Hyunowo Joo</h1>
            <div className="project">
                <Link href="/portfolio/bestshot">
                    <h4>잘나왔닷</h4>
                </Link>
            </div>
            <div className="project">
                <Link href="/portfolio/robot">
                    <h4>robot</h4>
                </Link>
            </div>
        </div>
    )
}