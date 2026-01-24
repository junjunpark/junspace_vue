<script setup>
import Card from '../features/Card.vue'
import Button from '../common/Button.vue'
import { ref, onMounted, nextTick } from 'vue'

const activeFilter = ref('*')

const handleFilterClick = (filter) => {
    activeFilter.value = filter

    // 카드 필터링
    const cards = document.querySelectorAll('.card-box')
    cards.forEach(card => {
        const category = card.getAttribute('data-category')

        if (filter === '*' || category === filter) {
            card.classList.remove('hidden')
            card.removeAttribute('aria-hidden')
        } else {
            card.classList.add('hidden')
            card.setAttribute('aria-hidden', 'true')
        }
    })
}

onMounted(async () => {
    await nextTick()
    handleFilterClick('*')
})
</script>

<template>
<section class="py-14 md:py-24 bg-bg">
    <div class="inner">
        <h2 class="text-h1 pb-6 font-blacksans font-bold">WORK</h2>
        <div class="tab">
            <div class="tab-btns btn-wrap flex flex-wrap gap-2 mb-6" role="tablist" aria-label="category tab">
                <Button
                    text="전체"
                    variant="gray"
                    size="sm"
                    :active="activeFilter === '*'"
                    :data-attrs="{ filter: '*' }"
                    :aria-attrs="{
                        selected: activeFilter === '*' ? 'true' : 'false',
                        controls: 'panel-all'
                    }"
                    @click="handleFilterClick('*')"
                />
                <Button
                    text="반응형"
                    variant="gray"
                    size="sm"
                    :active="activeFilter === 'cate1'"
                    :data-attrs="{ filter: 'cate1' }"
                    :aria-attrs="{
                        selected: activeFilter === 'cate1' ? 'true' : 'false',
                        controls: 'panel-cate1'
                    }"
                    @click="handleFilterClick('cate1')"
                />
                <Button
                    text="웹·모바일"
                    variant="gray"
                    size="sm"
                    :active="activeFilter === 'cate2'"
                    :data-attrs="{ filter: 'cate2' }"
                    :aria-attrs="{
                        selected: activeFilter === 'cate2' ? 'true' : 'false',
                        controls: 'panel-cate2'
                    }"
                    @click="handleFilterClick('cate2')"
                />
            </div>
            <div class="tab-panel" role="tabpanel" aria-labelledby="tab-all">
                <!-- project list -->
                <Card />
                <!-- // project list -->
            </div>
        </div>
    </div>
</section>
</template>
