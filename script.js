const toggleSharingBar = () => {
    const sharingBar = document.querySelector('.sharing-bar');
    const authorInfo = document.querySelector('.author-info');
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

    if (width < 576) {
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
    } else {
        if (sharingBar.classList.contains("active-step-2")) {
            sharingBar.classList.remove("active-step-1", "active-step-2");
            authorInfo.classList.remove("inactive-step-1", "inactive-step-2");
        } else {
            sharingBar.classList.add("active-step-1", "active-step-2");
            authorInfo.classList.add("inactive-step-1", "inactive-step-2");
        }
    }
}