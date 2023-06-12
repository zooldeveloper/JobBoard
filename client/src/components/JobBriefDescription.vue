<template>
	<ion-card
        v-for="job in jobs"
        :key="job.id"
		class="flex justify-between items-center border-2 border-olive bg-black rounded-2xl p-2 gap-2 mb-5"
	>
        <div class="!w-10 !h-10 rounded-full bg-olive"></div>
		<ion-card-header class="w-fit">
			<ion-card-title>{{ job.job_title }}</ion-card-title>
			<div class="flex justify-center gap-1">
				<ion-card-subtitle>{{ job.zip_code }},</ion-card-subtitle>
				<ion-card-subtitle>{{ job.city }}</ion-card-subtitle>
			</div>
		</ion-card-header>
		<ion-button
            :router-link="`/jobs/${job.id}`"
            color="secondary" 
            class="normal-case"
        >
            Voir l'offre
        </ion-button>
	</ion-card>
</template>

<script>
import {
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonCardSubtitle,
	IonButton,
} from "@ionic/vue";

export default {
	components: {
		IonCard,
		IonCardHeader,
		IonCardTitle,
		IonCardSubtitle,
		IonButton,
	},
    props: {
        jobs: Array
    },
	setup() {
		return {};
	},
};
</script>
