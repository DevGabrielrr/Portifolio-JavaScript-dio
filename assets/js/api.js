
async function fetchProfileData() {
    const url = '';
    const fetching = await fetch(url)
    return await fetching.json()
}
