<template>
    <li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
            <h6 class="my-0">{{ item.title }} x {{ item.quantity }}</h6>
            <small class="text-muted">{{ item.description }}</small>
        </div>
        <span class="text-muted">${{ item.price * item.quantity }}</span>
    </li>
</template>

<script>
export default {
    name: 'CartItem',
    props: {
        item: Object
    }
}
</script>