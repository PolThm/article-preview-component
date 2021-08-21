const toggleSharingBar = () => {
    let sharingBar = document.querySelector('.sharing-bar');
    let authorInfo = document.querySelector('.author-info');

    if (sharingBar.classList.contains("active-step-2")) {
        sharingBar.classList.remove("active-step-2");
        setTimeout(() => {
            authorInfo.classList.remove("inactive-step-2");
            sharingBar.classList.remove("active-step-1");
            setTimeout(() => {
                authorInfo.classList.remove("inactive-step-1");
            }, 100)
        }, 200)
    } else {
        authorInfo.classList.add("inactive-step-1");
        setTimeout(() => {
            sharingBar.classList.add("active-step-1");
            authorInfo.classList.add("inactive-step-2");
            setTimeout(() => {
                sharingBar.classList.add("active-step-2");
            }, 100)
        }, 200)

    }
}