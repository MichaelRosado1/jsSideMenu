const openNavBar = () => {
    document.getElementById('sideNav').style.width = "250px"
    document.getElementById('main').style.marginLeft = "250px"
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)"

}

const closeNav = () => {
    document.getElementById('sideNav').style.width = "0"
    document.getElementById('main').style.marginLeft = "0"
    document.body.style.backgroundColor = "white"
}