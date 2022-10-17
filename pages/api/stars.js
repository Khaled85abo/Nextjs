const page1 = "https://swapi.dev/api/people/?page=1"

export async function getChars(api = null) {
    console.log('api: ', api)
    if (!api) {
        const res = await fetch(page1)
        const data = await res.json()
        return data;
    } else {
        const res = await fetch(api)
        const data = await res.json()
        return data;
    }
    // const res = await fetch(api).then(res => res.json()).then(data => output= data)
}