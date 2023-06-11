<template>
	<ion-card
		class="flex justify-between items-center border-2 border-olive bg-black rounded-2xl p-2 gap-10"
	>
        <div class="w-10 h-10 rounded-full bg-olive"></div>
		<ion-card-header class="w-fit">
			<ion-card-title>Développeur web</ion-card-title>
			<ion-card-subtitle>Entreprise</ion-card-subtitle>
		</ion-card-header>
		<ion-button color="secondary" class="normal-case">Voir l'offre</ion-button>
	</ion-card>
</template>

<script>
import {
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonCardSubtitle,
	IonCardContent,
	IonButton,
} from "@ionic/vue";

export default {
	components: {
		IonCard,
		IonCardHeader,
		IonCardTitle,
		IonCardSubtitle,
		IonCardContent,
		IonButton,
	},
	setup() {
		return {};
	},
};
</script>
