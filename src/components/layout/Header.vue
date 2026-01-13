<script setup>
import logo from '@/assets/images/jlogo.svg'
</script>

<template>
<!-- [s] header -->
<header id="header" class="header">
    <div class="inner">
        <h1 id="logo" class="logo">
            <a href="/" class="logo">
                <img :src="logo" alt="JUN Portfolio">
            </a>
        </h1>
        <nav class="nav" id="nav">
            <ul class="gnb">
                <li class="active"><a href="#">HOME</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <button class="nav-toggle-btn" aria-expanded="false" aria-controls="nav">
            <span class="sr-only">메뉴 열기</span>
        </button>
    </div>
</header>
<!-- // [e] header -->
</template>
