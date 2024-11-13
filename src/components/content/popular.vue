<template>
    <main>
        <div class="h-[100px] mt-[70px] ml-[20px] mb-3">
            <!-- breadcrumb -->
            <div class="text-[14px] flex flex-row justify-start items-center font-poppins pt-6 pl-4">
                <a href="#">
                    <span class="mr-2 text-slate-500 hover:underline">หน้าเเรก</span>
                </a>
                <a href="#">
                    <span class="text-slate-800"> / ค้นหาสถานที่ท่องเที่ยว</span>
                </a>
            </div>
            <div class="text-[24px] flex flex-row justify-start items-center font-poppins pl-4">
                <h3 class="text-slate-800">ค้นหาสถานที่ท่องเที่ยวและจุดกางเต็นท์ยอดนิยม</h3>
            </div>
        </div>
        <!-- allbox component -->
        <div class="w-[100%] flex flex-row">
            <div class="w-[17%] h-[100vh] bg-slate-100 ml-8 mb-10 rounded-2xl shadow-md">
                <!-- checkbox 1 -->
                <div class="border-b border-slate-400 ml-[15px] mr-[15px] mt-[20px] pb-[20px]">
                    <span class="text-[16px] text-slate-800 font-poppins font-bold ml-1">ค้นหาตามประเภท</span>
                    <div class="form-control">
                        <label class="label cursor-pointer justify-start">
                            <input type="radio" name="radio-1" class="radio checked:bg-slate-600 bg-slate-300" />
                            <span class="label-text ml-2 text-slate-800">มีค่าบริการ</span>
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="label cursor-pointer justify-start">
                            <input type="radio" name="radio-1" class="radio checked:bg-slate-600 bg-slate-300" />
                            <span class="label-text ml-2 text-slate-800">ไม่มีค่าบริการ</span>
                        </label>
                    </div>
                </div>
                <!-- checkbox 2 -->
                <div class="border-b border-slate-400 ml-[15px] mr-[15px] mt-[20px] pb-[20px]">
                    <span class="text-[16px] text-slate-800 font-poppins font-bold ml-1">ค้นหาตามเรตติ้ง</span>
                    <div class="form-control">
                        <label class="label cursor-pointer justify-start">
                            <input type="radio" name="radio-10" class="radio checked:bg-slate-600 bg-slate-300" />
                            <span class="label-text ml-2 text-slate-800">3.5+</span>
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="label cursor-pointer justify-start">
                            <input type="radio" name="radio-10" class="radio checked:bg-slate-600 bg-slate-300" />
                            <span class="label-text ml-2 text-slate-800">4.5+</span>
                        </label>
                    </div>
                </div>
                <!-- checkbox 3 -->
                <div class="border-b border-slate-400 ml-[15px] mr-[15px] mt-[20px] pb-[20px]">
                    <div class="form-control">
                        <label class="label cursor-pointer justify-start">
                            <input type="checkbox" class="checkbox bg-slate-300" />
                            <span class="label-text ml-2 text-slate-800">ที่พัก</span>
                        </label>
                    </div>
                    <div class="form-control mt-1">
                        <label class="label cursor-pointer justify-start">
                            <input type="checkbox" class="checkbox bg-slate-300" />
                            <span class="label-text ml-2 text-slate-800">ที่จอดรถ</span>
                        </label>
                    </div>
                    <div class="form-control mt-1">
                        <label class="label cursor-pointer justify-start">
                            <input type="checkbox" class="checkbox bg-slate-300" />
                            <span class="label-text ml-2 text-slate-800">ห้องน้ำ</span>
                        </label>
                    </div>
                </div>
                <!-- checkbox 4 -->
                <div class="border-b border-slate-400 ml-[15px] mr-[15px] mt-[20px] pb-[20px]">
                    <div class="form-control">
                        <label class="label cursor-pointer justify-start">
                            <input type="checkbox" class="checkbox bg-slate-300" />
                            <span class="label-text ml-2 text-slate-800">บริการ Wi-Fi</span>
                        </label>
                    </div>
                    <div class="form-control mt-1">
                        <label class="label cursor-pointer justify-start">
                            <input type="checkbox" class="checkbox bg-slate-300" />
                            <span class="label-text ml-2 text-slate-800">จุดกางเต็นท์</span>
                        </label>
                    </div>
                    <div class="form-control mt-1">
                        <label class="label cursor-pointer justify-start">
                            <input type="checkbox" class="checkbox bg-slate-300" />
                            <span class="label-text ml-2 text-slate-800">จุดชมวิว</span>
                        </label>
                    </div>
                </div>
                <!-- End checkbox -->
            </div>
            <!-- allbox 2 -->
            <div class="w-[70%] min-h-screen ml-24 mr-10  grid grid-cols-2 place-items-center gap-4">
                <!-- box 1 -->
                <div class="w-[500px] h-[250px] bg-slate-100 rounded-2xl shadow-lg text-slate-700">
                    <div class="flex flex-row justify-around m-2">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/head/news1.jpg" alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel/in1.jpg" alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel/ni2.jpg" alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel/in3.jpg" alt="">
                    </div>
                    <div class="flex flex-row justify-between ml-4 mr-3 h-10">
                        <span class="text-xl text-slate-600 font-poppins font-bold pt-1.5">ดอยอินทนนท์</span>
                        <div class="flex flex-row justify-end">
                            <button class="btn btn-ghost">
                                <a href="https://maps.app.goo.gl/rCwSwEudAGxzyrBp9"><img class="w-[25px]"
                                        src="https://cdn-icons-png.freepik.com/256/5629/5629176.png?ga=GA1.1.873522104.1730518889&semt=ais_hybrid"
                                        alt=""></a>
                            </button>
                            <button class="btn btn-ghost">
                                <img class="w-[25px]" src='../../assets/icon/bookmark-outline.svg' alt="">
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-row ml-4 mt-2">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <span class="text-sm ml-1">4.6</span>
                        <span class="text-sm ml-3">50 reviews</span>
                        <span class="text-sm ml-2">มีค่าบริการ 50-200 บาท</span>
                    </div>
                    <div class="flex flex-row ml-4 mt-2">
                        <a href="#">
                            <span class="text-sm text-slate-600 font-poppins font-bold hover:underline ">จุดชมวิว</span>
                        </a>
                        <a href="#">
                            <span
                                class="text-sm text-slate-600 font-poppins font-bold hover:underline ml-3">จุดกางเต็นท์</span>
                        </a>
                        <div class="ml-56">
                            <button class="btn btn-outline shadow-xl">Reviews</button>
                        </div>
                    </div>
                </div>
                <!-- box 2 -->
                <div class="w-[500px] h-[250px] bg-slate-100 rounded-2xl shadow-lg text-slate-700">
                    <div class="flex flex-row justify-around m-2">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/head/news10.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel/dpui1.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel/dpui2.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel/dpui3.jpg"
                            alt="">
                    </div>
                    <div class="flex flex-row justify-between ml-4 mr-3 h-10">
                        <span class="text-xl text-slate-600 font-poppins font-bold pt-1.5">ดอยปุย</span>
                        <div class="flex flex-row justify-end">
                            <button class="btn btn-ghost">
                                <a href="https://maps.app.goo.gl/gVzcqvGJCi6i4xGV6"><img class="w-[25px]"
                                        src="https://cdn-icons-png.freepik.com/256/5629/5629176.png?ga=GA1.1.873522104.1730518889&semt=ais_hybrid"
                                        alt=""></a>
                            </button>
                            <button class="btn btn-ghost">
                                <img class="w-[25px]" src='../../assets/icon/bookmark-outline.svg' alt="">
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-row ml-4 mt-2">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <span class="text-sm ml-1">4.6</span>
                        <span class="text-sm ml-3">40 reviews</span>
                        <span class="text-sm ml-2">มีค่าบริการ 10-100 บาท</span>
                    </div>
                    <div class="flex flex-row ml-4 mt-2">
                        <a href="#">
                            <span class="text-sm text-slate-600 font-poppins font-bold hover:underline ">จุดชมวิว</span>
                        </a>
                        <a href="#">
                            <span
                                class="text-sm text-slate-600 font-poppins font-bold hover:underline ml-3">จุดกางเต็นท์</span>
                        </a>
                        <div class="ml-56">
                            <button class="btn btn-outline shadow-xl">Reviews</button>
                        </div>
                    </div>
                </div>
                <!-- box 3 -->
                <div class="w-[500px] h-[250px] bg-slate-100 rounded-2xl shadow-lg text-slate-700">
                    <div class="flex flex-row justify-around m-2">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel/dlung1.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel/dlung2.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel/dlung3.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel/dlung4.jpg"
                            alt="">
                    </div>
                    <div class="flex flex-row justify-between ml-4 mr-3 h-10">
                        <span class="text-xl text-slate-600 font-poppins font-bold pt-1.5">ดอยหลวงเชียงดาว</span>
                        <div class="flex flex-row justify-end">
                            <button class="btn btn-ghost">
                                <a href="https://maps.app.goo.gl/kETQgb57dcG75cX5A"><img class="w-[25px]"
                                        src="https://cdn-icons-png.freepik.com/256/5629/5629176.png?ga=GA1.1.873522104.1730518889&semt=ais_hybrid"
                                        alt=""></a>
                            </button>
                            <button class="btn btn-ghost">
                                <img class="w-[25px]" src='../../assets/icon/bookmark-outline.svg' alt="">
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-row ml-4 mt-2">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <span class="text-sm ml-1">4.6</span>
                        <span class="text-sm ml-3">45 reviews</span>
                        <span class="text-sm ml-2">มีค่าบริการ 20-200 บาท</span>
                    </div>
                    <div class="flex flex-row ml-4 mt-2">
                        <a href="#">
                            <span class="text-sm text-slate-600 font-poppins font-bold hover:underline ">จุดชมวิว</span>
                        </a>
                        <a href="#">
                            <span
                                class="text-sm text-slate-600 font-poppins font-bold hover:underline ml-3">จุดกางเต็นท์</span>
                        </a>
                        <div class="ml-56">
                            <button class="btn btn-outline shadow-xl">Reviews</button>
                        </div>
                    </div>
                </div>
                <!-- box 4 -->
                <div class="w-[500px] h-[250px] bg-slate-100 rounded-2xl shadow-lg text-slate-700">
                    <div class="flex flex-row justify-around m-2">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel/ม่อยสน1.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel/ม่อยสน2.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel/ม่อนสน3.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel/ม่อนสน4.jpg"
                            alt="">
                    </div>
                    <div class="flex flex-row justify-between ml-4 mr-3 h-10">
                        <span class="text-xl text-slate-600 font-poppins font-bold pt-1.5">ม่อนสน ดอยอ่างขาง</span>
                        <div class="flex flex-row justify-end">
                            <button class="btn btn-ghost">
                                <a href="https://maps.app.goo.gl/XJpQ3Px5xPa7xsRY9"><img class="w-[25px]"
                                        src="https://cdn-icons-png.freepik.com/256/5629/5629176.png?ga=GA1.1.873522104.1730518889&semt=ais_hybrid"
                                        alt=""></a>
                            </button>
                            <button class="btn btn-ghost">
                                <img class="w-[25px]" src='../../assets/icon/bookmark-outline.svg' alt="">
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-row ml-4 mt-2">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <span class="text-sm ml-1">4.5</span>
                        <span class="text-sm ml-3">50 reviews</span>
                        <span class="text-sm ml-2">มีค่าบริการจุดกางเต็นท์ 30-200 บาท</span>
                    </div>
                    <div class="flex flex-row ml-4 mt-2">
                        <a href="#">
                            <span class="text-sm text-slate-600 font-poppins font-bold hover:underline ">จุดชมวิว</span>
                        </a>
                        <a href="#">
                            <span
                                class="text-sm text-slate-600 font-poppins font-bold hover:underline ml-3">จุดกางเต็นท์</span>
                        </a>
                        <div class="ml-56">
                            <button class="btn btn-outline shadow-xl">Reviews</button>
                        </div>
                    </div>
                </div>
                <!-- box 5 -->
                <div class="w-[500px] h-[250px] bg-slate-100 rounded-2xl shadow-lg text-slate-700">
                    <div class="flex flex-row justify-around m-2">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel/ห้วยน้ำด้ง1.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel/ห้วยน้ำด้ง2.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel/ห้วยน้ำด้ง3.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel/ห้วยน้ำด้ง4.jpg"
                            alt="">
                    </div>
                    <div class="flex flex-row justify-between ml-4 mr-3 h-10">
                        <span
                            class="text-xl text-slate-600 font-poppins font-bold pt-1.5">อุทยานแห่งชาติห้วยน้ำดัง</span>
                        <div class="flex flex-row justify-end">
                            <button class="btn btn-ghost">
                                <a href="https://maps.app.goo.gl/BbD1gLwVHWPmunRS9"><img class="w-[25px]"
                                        src="https://cdn-icons-png.freepik.com/256/5629/5629176.png?ga=GA1.1.873522104.1730518889&semt=ais_hybrid"
                                        alt=""></a>
                            </button>
                            <button class="btn btn-ghost">
                                <img class="w-[25px]" src='../../assets/icon/bookmark-outline.svg' alt="">
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-row ml-4 mt-2">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <span class="text-sm ml-1">4.6</span>
                        <span class="text-sm ml-3">60 reviews</span>
                        <span class="text-sm ml-2">มีค่าบริการจุดกางเต็นท์คนละ 30 บาท</span>
                    </div>
                    <div class="flex flex-row ml-4 mt-2">
                        <a href="#">
                            <span class="text-sm text-slate-600 font-poppins font-bold hover:underline ">จุดชมวิว</span>
                        </a>
                        <a href="#">
                            <span
                                class="text-sm text-slate-600 font-poppins font-bold hover:underline ml-3">จุดกางเต็นท์</span>
                        </a>
                        <div class="ml-56">
                            <button class="btn btn-outline shadow-xl">Reviews</button>
                        </div>
                    </div>
                </div>
                <!-- box 6 -->
                <div class="w-[500px] h-[250px] bg-slate-100 rounded-2xl shadow-lg text-slate-700">
                    <div class="flex flex-row justify-around m-2">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel/ห่มปก1.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel/ห่มปก2.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel/ห่มปก3.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/head/news4.jpg" alt="">
                    </div>
                    <div class="flex flex-row justify-between ml-4 mr-3 h-10">
                        <span
                            class="text-xl text-slate-600 font-poppins font-bold pt-1.5">อุทยานแห่งชาติดอยผ้าห่มปก</span>
                        <div class="flex flex-row justify-end">
                            <button class="btn btn-ghost">
                                <a href="https://maps.app.goo.gl/fuzWGkPnXDwibkGY6"><img class="w-[25px]"
                                        src="https://cdn-icons-png.freepik.com/256/5629/5629176.png?ga=GA1.1.873522104.1730518889&semt=ais_hybrid"
                                        alt=""></a>
                            </button>
                            <button class="btn btn-ghost">
                                <img class="w-[25px]" src='../../assets/icon/bookmark-outline.svg' alt="">
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-row ml-4 mt-2">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <span class="text-sm ml-1">4.5</span>
                        <span class="text-sm ml-3">40 reviews</span>
                        <span class="text-sm ml-2">ค่าเข้าอุทยาน 50 บาท/ค่ากางเต็นท์ 30 บาท</span>
                    </div>
                    <div class="flex flex-row ml-4 mt-2">
                        <a href="#">
                            <span class="text-sm text-slate-600 font-poppins font-bold hover:underline ">จุดชมวิว</span>
                        </a>
                        <a href="#">
                            <span
                                class="text-sm text-slate-600 font-poppins font-bold hover:underline ml-3">จุดกางเต็นท์</span>
                        </a>
                        <div class="ml-56">
                            <button class="btn btn-outline shadow-xl">Reviews</button>
                        </div>
                    </div>
                </div>
                <!-- box 7 -->
                <div class="w-[500px] h-[250px] bg-slate-100 rounded-2xl shadow-lg text-slate-700">
                    <div class="flex flex-row justify-around m-2">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel2/ม่อนแจ่ม1.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel2/ม่อนแจ่ม2.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel2/ม่อนแจ่ม3.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/head/news7.jpg" alt="">
                    </div>
                    <div class="flex flex-row justify-between ml-4 mr-3 h-10">
                        <span class="text-xl text-slate-600 font-poppins font-bold pt-1.5">ม่อนแจ่ม</span>
                        <div class="flex flex-row justify-end">
                            <button class="btn btn-ghost">
                                <a href="https://maps.app.goo.gl/qmLYte4SmaiNiFdV7"><img class="w-[25px]"
                                        src="https://cdn-icons-png.freepik.com/256/5629/5629176.png?ga=GA1.1.873522104.1730518889&semt=ais_hybrid"
                                        alt=""></a>
                            </button>
                            <button class="btn btn-ghost">
                                <img class="w-[25px]" src='../../assets/icon/bookmark-outline.svg' alt="">
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-row ml-4 mt-2">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <span class="text-sm ml-1">4.4</span>
                        <span class="text-sm ml-3">40 reviews</span>
                        <span class="text-sm ml-2">ไม่มีค่าบริการ</span>
                    </div>
                    <div class="flex flex-row ml-4 mt-2">
                        <a href="#">
                            <span class="text-sm text-slate-600 font-poppins font-bold hover:underline ">จุดชมวิว</span>
                        </a>
                        <a href="#">
                            <span
                                class="text-sm text-slate-600 font-poppins font-bold hover:underline ml-3">จุดกางเต็นท์</span>
                        </a>
                        <div class="ml-56">
                            <button class="btn btn-outline shadow-xl">Reviews</button>
                        </div>
                    </div>
                </div>
                <!-- box 8 -->
                <div class="w-[500px] h-[250px] bg-slate-100 rounded-2xl shadow-lg text-slate-700">
                    <div class="flex flex-row justify-around m-2">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel2/ชัวญ่า1.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel2/ชัวญ่า2.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel2/ชัวญ่า3.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/head/news8.jpg" alt="">
                    </div>
                    <div class="flex flex-row justify-between ml-4 mr-3 h-10">
                        <span class="text-xl text-slate-600 font-poppins font-bold pt-1.5">ดอยชัวร์ญ่า</span>
                        <div class="flex flex-row justify-end">
                            <button class="btn btn-ghost">
                                <a href="https://maps.app.goo.gl/MFjTP3kwpnbNaNmJ9"><img class="w-[25px]"
                                        src="https://cdn-icons-png.freepik.com/256/5629/5629176.png?ga=GA1.1.873522104.1730518889&semt=ais_hybrid"
                                        alt=""></a>
                            </button>
                            <button class="btn btn-ghost">
                                <img class="w-[25px]" src='../../assets/icon/bookmark-outline.svg' alt="">
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-row ml-4 mt-2">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <span class="text-sm ml-1">4.2</span>
                        <span class="text-sm ml-3">30 reviews</span>
                        <span class="text-sm ml-2">มีค่าบริการที่พักเเละจุดกางเต็นท์</span>
                    </div>
                    <div class="flex flex-row ml-4 mt-2">
                        <a href="#">
                            <span class="text-sm text-slate-600 font-poppins font-bold hover:underline ">จุดชมวิว</span>
                        </a>
                        <a href="#">
                            <span
                                class="text-sm text-slate-600 font-poppins font-bold hover:underline ml-3">จุดกางเต็นท์</span>
                        </a>
                        <div class="ml-56">
                            <button class="btn btn-outline shadow-xl">Reviews</button>
                        </div>
                    </div>
                </div>
                <!-- box 9 -->
                <div class="w-[500px] h-[250px] bg-slate-100 rounded-2xl shadow-lg text-slate-700">
                    <div class="flex flex-row justify-around m-2">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel2/ค้ำฟ้า1.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel2/ค้ำฟ้า2.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel2/ค้ำฟ้า3.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel2/ค้ำฟ้า4.jpg"
                            alt="">
                    </div>
                    <div class="flex flex-row justify-between ml-4 mr-3 h-10">
                        <span class="text-xl text-slate-600 font-poppins font-bold pt-1.5">ดอยค้ำฟ้า</span>
                        <div class="flex flex-row justify-end">
                            <button class="btn btn-ghost">
                                <a href="https://maps.app.goo.gl/LW3tG3du9EGTthTX6"><img class="w-[25px]"
                                        src="https://cdn-icons-png.freepik.com/256/5629/5629176.png?ga=GA1.1.873522104.1730518889&semt=ais_hybrid"
                                        alt=""></a>
                            </button>
                            <button class="btn btn-ghost">
                                <img class="w-[25px]" src='../../assets/icon/bookmark-outline.svg' alt="">
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-row ml-4 mt-2">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <span class="text-sm ml-1">4.7</span>
                        <span class="text-sm ml-3">40 reviews</span>
                        <span class="text-sm ml-2">ไม่มีค่าบริการ</span>
                    </div>
                    <div class="flex flex-row ml-4 mt-2">
                        <a href="#">
                            <span class="text-sm text-slate-600 font-poppins font-bold hover:underline ">จุดชมวิว</span>
                        </a>
                        <a href="#">
                            <span
                                class="text-sm text-slate-600 font-poppins font-bold hover:underline ml-3">จุดกางเต็นท์</span>
                        </a>
                        <div class="ml-56">
                            <button class="btn btn-outline shadow-xl">Reviews</button>
                        </div>
                    </div>
                </div>
                <!-- box 10 -->
                <div class="w-[500px] h-[250px] bg-slate-100 rounded-2xl shadow-lg text-slate-700">
                    <div class="flex flex-row justify-around m-2">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel2/ม่อนจอง1.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel2/ม่อนจอง2.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel2/ม่อนจอง3.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel2/ม่อนจอง4.jpg"
                            alt="">
                    </div>
                    <div class="flex flex-row justify-between ml-4 mr-3 h-10">
                        <span class="text-xl text-slate-600 font-poppins font-bold pt-1.5">ดอยม่อนจอง</span>
                        <div class="flex flex-row justify-end">
                            <button class="btn btn-ghost">
                                <a href="https://maps.app.goo.gl/Hd69mv5hubKz4xiBA"><img class="w-[25px]"
                                        src="https://cdn-icons-png.freepik.com/256/5629/5629176.png?ga=GA1.1.873522104.1730518889&semt=ais_hybrid"
                                        alt=""></a>
                            </button>
                            <button class="btn btn-ghost">
                                <img class="w-[25px]" src='../../assets/icon/bookmark-outline.svg' alt="">
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-row ml-4 mt-2">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <span class="text-sm ml-1">4.9</span>
                        <span class="text-sm ml-3">50 reviews</span>
                        <span class="text-sm ml-2">ไม่มีค่าบริการ</span>
                    </div>
                    <div class="flex flex-row ml-4 mt-2">
                        <a href="#">
                            <span class="text-sm text-slate-600 font-poppins font-bold hover:underline ">จุดชมวิว</span>
                        </a>
                        <a href="#">
                            <span
                                class="text-sm text-slate-600 font-poppins font-bold hover:underline ml-3">จุดกางเต็นท์</span>
                        </a>
                        <div class="ml-56">
                            <button class="btn btn-outline shadow-xl">Reviews</button>
                        </div>
                    </div>
                </div>
                <!-- box 11 -->
                <div class="w-[500px] h-[250px] bg-slate-100 rounded-2xl shadow-lg text-slate-700">
                    <div class="flex flex-row justify-around m-2">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel2/ป่าสน1.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel2/ป่าสน2.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel2/ป่าสน3.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel2/ป่าสน4.jpg"
                            alt="">
                    </div>
                    <div class="flex flex-row justify-between ml-4 mr-3 h-10">
                        <span class="text-xl text-slate-600 font-poppins font-bold pt-1.5">ป่าสนวัดจันทร์</span>
                        <div class="flex flex-row justify-end">
                            <button class="btn btn-ghost">
                                <a href="https://maps.app.goo.gl/b7iUvmXca9xpK8mm9"><img class="w-[25px]"
                                        src="https://cdn-icons-png.freepik.com/256/5629/5629176.png?ga=GA1.1.873522104.1730518889&semt=ais_hybrid"
                                        alt=""></a>
                            </button>
                            <button class="btn btn-ghost">
                                <img class="w-[25px]" src='../../assets/icon/bookmark-outline.svg' alt="">
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-row ml-4 mt-2">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <span class="text-sm ml-1">4.6</span>
                        <span class="text-sm ml-3">30 reviews</span>
                        <span class="text-sm ml-2">มีค่าบริการที่พัก</span>
                    </div>
                    <div class="flex flex-row ml-4 mt-2">
                        <a href="#">
                            <span class="text-sm text-slate-600 font-poppins font-bold hover:underline ">จุดชมวิว</span>
                        </a>
                        <a href="#">
                            <span
                                class="text-sm text-slate-600 font-poppins font-bold hover:underline ml-3">จุดกางเต็นท์</span>
                        </a>
                        <div class="ml-56">
                            <button class="btn btn-outline shadow-xl">Reviews</button>
                        </div>
                    </div>
                </div>
                <!-- box 12 -->
                <div class="w-[500px] h-[250px] bg-slate-100 rounded-2xl shadow-lg text-slate-700">
                    <div class="flex flex-row justify-around m-2">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel2/บ่อหลวง1.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel2/บ่อหลวง2.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel2/บ่อหลวง3.jpg"
                            alt="">
                        <img class="rounded-2xl h-[100px] w-[115px] shadow-lg" src="../../assets/travel2/บ่อหลวง4.jpg"
                            alt="">
                    </div>
                    <div class="flex flex-row justify-between ml-4 mr-3 h-10">
                        <span class="text-xl text-slate-600 font-poppins font-bold pt-1.5">สวนป่าดอยบ่อหลวง</span>
                        <div class="flex flex-row justify-end">
                            <button class="btn btn-ghost">
                                <a href="https://maps.app.goo.gl/LHaZekrcbG3HjaQNA"><img class="w-[25px]"
                                        src="https://cdn-icons-png.freepik.com/256/5629/5629176.png?ga=GA1.1.873522104.1730518889&semt=ais_hybrid"
                                        alt=""></a>
                            </button>
                            <button class="btn btn-ghost">
                                <img class="w-[25px]" src='../../assets/icon/bookmark-outline.svg' alt="">
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-row ml-4 mt-2">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <span class="text-sm ml-1">4.4</span>
                        <span class="text-sm ml-3">30 reviews</span>
                        <span class="text-sm ml-2">มีค่าบริการที่พักและจุดกางเต็นท์</span>
                    </div>
                    <div class="flex flex-row ml-4 mt-2">
                        <a href="#">
                            <span class="text-sm text-slate-600 font-poppins font-bold hover:underline ">จุดชมวิว</span>
                        </a>
                        <a href="#">
                            <span
                                class="text-sm text-slate-600 font-poppins font-bold hover:underline ml-3">จุดกางเต็นท์</span>
                        </a>
                        <div class="ml-56">
                            <button class="btn btn-outline shadow-xl">Reviews</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END ALL BOX -->
        </div>
        <!-- Add Travel -->
        <div class="flex flex-row justify-end mt-12 mr-[435px] pb-12">
            <button class="btn btn-outline shadow-lg">
                <ion-icon name="add-outline"></ion-icon>
                <a href="">
                    <span class="text-sm ml-2">เพิ่มสถานที่เที่ยวใหม่ใน Travel in Changmai</span>
                </a>
            </button>
        </div>
    </main>

</template>

<script>
export default {
    name: 'popular'
}
</script>

<style></style>