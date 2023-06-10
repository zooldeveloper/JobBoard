<template>
    <ion-page>
		<ion-header :translucent="true">
			<ion-toolbar>
				<ion-title class="text-center uppercase font-sans font-bold">{{ pageTitle }}</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true" class="text-center">
			<slot />
		</ion-content>
	</ion-page>
</template>

<script>
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonContent,
	IonTitle,
} from "@ionic/vue";

export default {
    props: { 
        pageTitle: String 
    },
    components: {
		IonPage,
		IonHeader,
		IonToolbar,
		IonContent,
		IonTitle,
    },
}
</script>
