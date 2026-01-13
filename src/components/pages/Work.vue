<script setup>
import Card from '../features/Card.vue'
import Button from '../common/Button.vue';

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
