import { useEffect, useState } from 'react';
import { getChars } from './api/stars';
const wars = () => {
    const [loading, setLoading] = useState(false)

    const [chars, setChars] = useState(null)
    const getData = async (api) => {
        setLoading(true)
        const data = await getChars(api)
        console.log('chars from components: ', data)
        setLoading(false)
        setChars(data)
    }

    const handleGetNext = () => {
        console.log(chars)
        if (chars.next) {
            console.log(chars.next)
            getData(chars.next)
        }
    }
    const handleGetPrev = () => {
        if (chars.previous) {
            getData(chars.previous)
        }
    }
    useEffect(() => {
        getData()

    }, [])

    return (
        <div>

            {loading ? <h1>Loading...</h1> : chars && chars.results.map((char, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="https://source.unsplash.com/1VV1MRafd7A/50x50" style={{ borderRadius: '50%' }} />

                    <span >{char.name}</span>

                </div>
            ))}


            {chars && chars.previous && <button disabled={loading} onClick={handleGetPrev}>Previous</button>}
            {chars && chars.next && <button disabled={loading} onClick={handleGetNext}>Next</button>}
        </div>
    )
}

export default wars