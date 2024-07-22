
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/DevGabrielrr/Breadcrumbsdesafio-js-2-portifolio-dio/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}
