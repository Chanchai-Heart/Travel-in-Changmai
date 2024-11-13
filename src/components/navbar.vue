<template>
    <main>
        <nav class="fixed top-0 left-0 right-0 w-full bg-white shadow-lg items-center flex justify-around px-4 py-1 ">
            <div>
                <img class="w-16 cursor-pointer"
                    src="https://cdn-icons-png.freepik.com/256/2892/2892301.png?ga=GA1.1.873522104.1730518889&semt=ais_hybrid"
                    alt="...">
            </div>
            <div
                class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-7">
                <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-black">
                    <li>
                        <router-link class="hover:text-gray-500" to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link class="hover:text-gray-500" to="/popular">Travel</router-link>
                    </li>
                    <li>
                        <a class="hover:text-gray-500" href="#">Resource</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-500" href="#">Developers</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-500" href="#">Pricing</a>
                    </li>
                    <!-- Search -->
                    <form class="max-w-md mx-auto">
                        <label for="default-search"
                            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-3 h-3 text-gray-700 dark:text-gray-600" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search"
                                class="block w-full p-2.5 ps-7 pl-7 pr-20 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-300 focus:border-gray-300 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-[#345830] dark:focus:border-[#345830]"
                                placeholder="Search..." required />
                            <button type="submit"
                                class="text-white absolute end-2 bottom-2 bg-[#4e7558] hover:bg-[#345830] focus:ring-2 focus:outline-none focus:ring-[#345830] font-medium rounded-lg text-xs px-2 py-1 dark:bg-[#4e7558] dark:hover:bg-[#345830] dark:focus:ring-[#345830]">Search</button>
                        </div>
                    </form>
                    <!-- login -->
                </ul>
            </div>
            <div class="flex items-center gap-6">
                <router-link to="/login"><button
                        class="bg-[#4e7558] text-white px-5 py-2 rounded-full hover:bg-[#345830]">Sign
                        in</button></router-link>
                <ion-icon @click="onToggleMenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon>
            </div>
        </nav>
    </main>

</template>

<script>
const navLinks = document.querySelector('.nav-links')
export default {
    name: 'navbar',

    methods: {
        onToggleMenu(e) {
            e.name = e.name === 'menu' ? 'close' : 'menu'
            navLinks.classList.toggle('top-[9%]')
        }
    }
}
</script>

<style></style>