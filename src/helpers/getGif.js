export const handleGetApiData = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=N2dOKMsS2THqUH0aaaz3v0bKoxHrplXj`

    const gift = await fetch(url)
    const { data } = await gift.json()

    const info = data.map((img) => {
        return {
            url: img.images.downsized_medium.url,
            id: img.id,
            title: img.title
        }
    })

    return info

}