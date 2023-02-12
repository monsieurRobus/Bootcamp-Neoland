const songList =  []
const url = "https://63e8fa084f3c6aa6e7c60ba5.mockapi.io/v1/"

export const getSongList = async () => {
    return await fetch(`${url}songs`).then(res=>res.json())
}

