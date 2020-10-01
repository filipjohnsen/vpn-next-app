export default (req, res) => {
    const { query: { slug, subid } } = req

    res.send(redirectToProvider(slug, subid))
}

function redirectToProvider(slug, subid) {
    switch (slug) {
        case "expressvpn":
            return "https://expressvpn.com/" + subid
        case "nordvpn":
            return "https://nordvpn.com/" + subid
        case "ultravpn":
            return "https://ultravpn.com/" + subid
        case "surfshark":
            return "https://surfshark.com/" + subid
        case "cyberghost":
            return "https://cyberghost.com/"
        default:
            return "/"
    }
}