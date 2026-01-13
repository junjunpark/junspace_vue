<script setup>
import Card from '../features/Card.vue'
import Button from '../common/Button.vue'
import { onMounted, nextTick } from 'vue'

onMounted(async () => {
  await nextTick()

  // Work 페이지의 탭 초기화
  const tabContainers = document.querySelectorAll('.tab')

  tabContainers.forEach(container => {
    const tabBtns = container.querySelectorAll('.tab-btn')
    const cards = container.querySelectorAll('.card-box')

    tabBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter')

        tabBtns.forEach(b => {
          b.classList.remove('active')
          b.setAttribute('aria-selected', 'false')
        })
        this.classList.add('active')
        this.setAttribute('aria-selected', 'true')

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
      })
    })
  })
})
</script>

<template>

<section class="section sec03" >
    <div class="section-inner">
        <h2 class="h2">WORK</h2>
        <div class="tab">
            <div class="tab-btns btn-wrap" role="tablist" aria-label="category tab">
                <Button
                text="전체"
                class-name="sm gray tab-btn active"
                :data-attrs="{ filter: '*' }"
                :aria-attrs="{ selected: 'true', controls: 'panel-all' }"
                />
                <Button
                text="반응형"
                class-name="sm gray tab-btn"
                :data-attrs="{ filter: 'cate1' }"
                :aria-attrs="{ selected: 'false', controls: 'panel-cate1' }"
                />
                <Button
                text="웹·모바일"
                class-name="sm gray tab-btn"
                :data-attrs="{ filter: 'cate2' }"
                :aria-attrs="{ selected: 'false', controls: 'panel-cate2' }"
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
