import Link from "next/link";

export default function NotFound () {
    return(
        <div> 
            <h1> Not Found</h1>
            <Link href={'/'}> Go to Home Page</Link>
        </div>
    )
}