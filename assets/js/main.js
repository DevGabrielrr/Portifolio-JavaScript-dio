function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.localidade

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    //hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.nome}" title="${skill.nome}"></li>`).join('')
    hardSkills.innerHTML = profileData.skills.hardSkills
        .map(skill => {
            if (skill.nome === "PHP") {
                return `<li><img src="${skill.logo}" alt="${skill.nome}" title="${skill.nome}" style="max-width: 90px;"></li>`;
            } else if (skill.nome === "Docker") {
                return `<li><img src="${skill.logo}" alt="${skill.nome}" title="${skill.nome}" style="max-width: 88px;"></li>`;
            } else {
                return `<li><img src="${skill.logo}" alt="${skill.nome}" title="${skill.nome}"></li>`;
            }
        })
        .join('');
}

function updateIdiomas(profileData) {
    const idiomas = document.getElementById('profile.idiomas')
    idiomas.innerHTML = profileData.idiomas.map(skill => `<li>${skill.nome} (${skill.nivel})</li>`).join('')
}

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
            <li>
                <h3 class="title">${experience.name}</h3>
                <p class="period">${experience.period}</p>
                <p>${experience.description}</p>
            </li>
        `
    }).join('')
}


function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join('')
}

function updateEducacao(profileData) {
    const educacao = document.getElementById('profile.educacao')
    educacao.innerHTML = profileData.educacao.map(skill =>
        `<li>
            <h3 class="title">${skill.nome} | ${skill.instituicao}</h3>
            <p class="period">${skill.periodo.inicio} | ${skill.periodo.fim}</p>
            <p>${skill.descricao}</p>
        </li>`
    ).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateIdiomas(profileData)
    updateProfessionalExperience(profileData)
    updatePortfolio(profileData)
    updateEducacao(profileData)
})()