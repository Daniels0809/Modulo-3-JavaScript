const routes = {
    "/user": "./user.html",
    "/newuser": "./newuser.html",
    "/about": "./about.html"

}

document.body.addEventListener("click", e => {
    if(e.target.matches("[data-link")){
        e.preventDefault();
        navigate(e.target.getAttribute("href"))
        // console.log(e.target.getAttribute("href"));
        // console.log(history);
        console.log(window);

    }
});

async function navigate(pathname){
    const route = routes[pathname]
    console.log(route);
    const html = await fetch(route).then(res => res.text())
    document.getElementById("content").innerHTML = html
    history.pushState({},"",pathname);

}

window.addEventListener("popstate", () => navigate(location.pathname));
