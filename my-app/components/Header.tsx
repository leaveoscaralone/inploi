import Image from 'next/image'

export const Header = () => {
    return (
        <aside>
            <Image src='/Paradigmo_Logo.png' alt='logo' width='64' height='64'/>
            <button>Login</button>
        </aside>
    )
}