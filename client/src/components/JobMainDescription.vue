<template>
	<ion-card class="w-9/12 h-96 bg-white border-2 border-olive m-auto p-7 rounded-2xl">
        <div class="flex justify-between mb-8">
            <div class="!w-14 !h-14 rounded-full bg-yallow"></div>
                    <ion-card-header class="w-fit">
                        <ion-card-title class="text-4xl font-bold">{{ 'Agent de Stockage' }}</ion-card-title>
                        <ion-card-subtitle class="text-left text-sm text-olive">{{ 'Détails de l\'offre' }}</ion-card-subtitle>
                    </ion-card-header>
        </div>
        <icon-content class="text-black">
            <div
                v-for="(detail, index) in details"
                :key="index"
                class="flex justify-start items-center"
            >
                <h2 class="mr-10 w-44 text-start text-lg font-medium">{{ detail.title }}</h2>
                <p class="text-lg font-light">{{ detail.description }}</p>
            </div>
        </icon-content>
	</ion-card>
</template>

<script>
import {
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonCardSubtitle,
    IonContent,
} from "@ionic/vue";

export default {
	components: {
		IonCard,
		IonCardHeader,
		IonCardTitle,
		IonCardSubtitle,
        IonContent,
		},
    props: {
        job: Object
    },
    data() {
        return {
            details: []
        }
    },
    watch: {
        job: function () {
            this.setJob();
        }, 
        immediate: true
    },
    methods: {
        setJob() {
            this.details = [
                {
                    title: 'Secteur d\'acctivité :',
                    description: this.job.job_industry,
                },
                {
                    title: 'Taux horaire :',
                    description: this.job.hourly_rate + '€',
                },
                {
                    title: 'Type de contrat :',
                    description: this.job.contract_type,
                },
                {
                    title: 'Ville :',
                    description: this.job.city,
                },
                {
                    title: 'Code postal :',
                    description: this.job.zip_code,
                }
            ]
        }
    }
};
</script>
