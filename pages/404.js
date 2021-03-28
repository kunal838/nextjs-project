import Link from "next/link";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>
                oooooppppss......
            </h1>
            <h2>
                this page cannot be found
            </h2>
            <p>Go back to the</p><Link href="/"><a>Homepage</a></Link>
        </div>
     );
}
 
export default NotFound;