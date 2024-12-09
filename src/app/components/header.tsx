import Image from "next/image"
import pic from "../navbar-dark.jpg"
import Link from "next/link"
export default function Header() {
    return (
        <div>
            <div>
                <Image src={pic} alt="aaa" width={1332} height={55} />
            </div>

            <div className="child-container">
                <div>
                    <h1>Bandage</h1>
                </div>
                <div>
                    <ul  className="header-items">
                        <Link href="/"><li>Home</li></Link>
                        <Link href="./product"><li>Shop</li></Link>
                        <Link href="./productlist"><li>List</li></Link>
                        <Link href="./about"><li>About</li></Link>
                        <Link href="./pricing"><li>Pricing</li></Link>
                        <Link href="./contact"><li>Contact</li></Link>
                        <Link href="./team"><li>Team</li></Link>
                    </ul>
                </div>
<div className="login">
    <h2>Login/Register</h2>
</div>
            </div>
        </div>
    )
}