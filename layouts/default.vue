<template>

    <div class="default">
        <header>
            <h1>
                <NuxtLink to="/">キャリアバース株式会社</NuxtLink>
            </h1>

            <nav class="pc-nav">
                <ul>
                    <li><NuxtLink to="/#introduce">Member</NuxtLink></li>
                     <!-- <li><a href="#introduce">ABOUT</a></li> -->
                    <li><NuxtLink to="/services">SERVICE</NuxtLink></li>
                    <li><NuxtLink to="/overview">COMPANY</NuxtLink></li>
                    <li><NuxtLink to="/inquiry">CONTACT</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <slot />

        <footer>
            <p>&copy; 2024 career birth.Inc All rights reserved.</p>
        </footer>
    </div>
</template>
<style>
header{
    width:100%;
    height: 100px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 3rem;
    z-index: 100;
}
ul {
    display: flex;
    list-style: none;
}
li {
    margin: 0 1rem;
}
a {
    color: #334466;
    text-decoration: none;
}
a:hover {
    opacity: 0.3;
    transition: 0.3s;
}



footer {
    text-align: center;
}
footer p {
    border-top: 1px solid rgba(128, 128, 128, 0.3);
    margin-top: 2rem;
    padding-top: 3rem
}
</style>
