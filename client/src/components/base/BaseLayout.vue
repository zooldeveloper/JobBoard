<template>
    <ion-page>
		<ion-header :translucent="true">
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
				</ion-buttons>
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
	IonBackButton,
	IonButtons,
} from "@ionic/vue";

export default {
    props: { 
        pageTitle: String,
		pageDefaultBackLink: String
    },
    components: {
		IonPage,
		IonHeader,
		IonToolbar,
		IonContent,
		IonTitle,
		IonBackButton,
		IonButtons,
    },
}
</script>
