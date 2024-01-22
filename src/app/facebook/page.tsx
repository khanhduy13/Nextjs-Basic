'use client'

import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';


const HoidanIT = () => {
    const router = useRouter()
    const handleBtn = () => {
        router.push('/')
    }
    return (
        <> 
        <div>
            facebook
            <div>
                <Button variant='success'>Hoi dan IT</Button>
            <button onClick={() => handleBtn() }>back home</button>
            </div>
        </div>
        </>
    )
}
export default HoidanIT;