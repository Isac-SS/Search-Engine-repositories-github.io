import { baseUrl, repositoriesQuantity } from "../variables"
// "/src/script/variables.js

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
}

export { getRepositories }