import { isMobile } from 'mobile-device-detect'

export default (req, res) => {
    let { query: { slug, subid } } = req

    isMobile ? subid = subid + "m" : subid = subid

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