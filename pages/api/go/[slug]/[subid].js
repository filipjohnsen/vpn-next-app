export default (req, res) => {
    const { query: { slug, subid } } = req

    redirectToProvider(res, slug, subid)
}

function redirectToProvider(res, slug, subid) {
    switch(slug) {
        case "expressvpn":
            res.send("https://expressvpn.com/" + subid)
            break;
        case "nordvpn":
            res.send("https://nordvpn.com/" + subid)
            break;
        case "surfshark":
            res.send("https://surfshark.com/" + subid)
            break;
        default:
            res.redirect("/")
            break;
    }
}