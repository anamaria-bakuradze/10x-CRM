function Nav() {
    document.getElementById("navContainer").innerHTML = `
    <img src="../components/logo.png" alt="Logo" class="logo" />
    <!-- <button class="hamburger" id="hamburger" aria-label="Menu"> -->

        <nav class="navigation">
            <ul>
                <li><a href="dashboard.html">Dashboard</a></li>
                <li><a href="clients.html">Clients</a></li>
                <li><a href="profile.html">Profile</a></li>
            </ul>
        </nav>

        <div class="mobile-nav" id="mobileNav">
            <ul>
                <li><button id="logOutBtn">Log out</button></li>
            </ul>
        </div>

        <button id="logOut">
            <!-- <span></span>
            <span></span>
            <span></span> -->
        </button>

        <button id="themeToggle" aria-label="Toggle Theme"></button>

        <!-- <div class="overlay" id="overlay"></div> -->`;

    const hamburger = document.getElementById('logOut');
    const mobileNav = document.getElementById('mobileNav');
    // const overlay = document.getElementById('overlay');

    function toggleMenu() {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('open');
        // overlay.classList.toggle('visible');
    }

    hamburger.addEventListener('click', toggleMenu);
    // overlay.addEventListener('click', toggleMenu);

}


