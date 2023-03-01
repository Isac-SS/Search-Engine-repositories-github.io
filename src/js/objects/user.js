const user = {
    avatarUrl: '',
    avatarName: '',
    bio: '',
    userName: '',
    repositories: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this
    },
    setRepositories(repositories) {
        this.repositories = repositories
    }
}

export { user }