import type {NextPage} from 'next'
import Link from 'next/link'
import Image from "next/image"

const Home: NextPage = () => {
    return (
        <>
            <h1>
                Honey I am home
            </h1>
            <ul>
                <li>
                    <Link href="/users/1">
                        <a className="styleLink">Users</a>
                    </Link>
                </li>
                <li>
                    <Link href={{
                        pathname: '/wheels/[id]/[color]/[type]',
                        query: {id: 1, color: 'red', type: 'round'}
                    }}>Go to wheels</Link>
                </li>
            </ul>
            <div>
                <Image alt="Horse" src="/images/image_one.jpeg" layout="responsive" width={6016} height={4016} />
            </div>
        </>
    )
}

export default Home
