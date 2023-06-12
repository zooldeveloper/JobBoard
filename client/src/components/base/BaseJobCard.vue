<!-- This component is isolated for now! -->
<template>
    <ion-card :class="cssRulesContainer">
        <div :class="cssRulesCompanyLogo"></div>
        <ion-card-header class="w-fit">
            <ion-card-title>{{ jobTitle }}</ion-card-title>
            <ion-card-subtitle>{{ jobLocation }}</ion-card-subtitle>
        </ion-card-header>
        <slot />
    </ion-card>
</template>

<script>
import {
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonCardSubtitle,
} from "@ionic/vue";

export default {
	components: {
		IonCard,
		IonCardHeader,
		IonCardTitle,
		IonCardSubtitle,
	},
    porps: {
        jobTitle: String,
        jobLocation: String, 
        cssRules: String,
        cssRulesContainer: String,
        cssRulesCompanyLogo: String,
    },
    setup () {
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>