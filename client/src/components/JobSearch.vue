<template>
	<ion-grid class="mt-8">
		<ion-row>
			<ion-col>
				<ion-searchbar
					placeholder="Métier ou mots-clés"
					class="text-black max-w-md"
				>
				</ion-searchbar>
			</ion-col>
			<ion-col>
				<ion-searchbar
					:search-icon="locationOutline"
					placeholder="Ville ou code postal"
					class="text-black max-w-md"
				>
				</ion-searchbar>
			</ion-col>
            <ion-button color="secondary" shape="round" class="h-11 mt-2 text-lg font-normal normal-case">
                Rechercher
            </ion-button>
		</ion-row>
	</ion-grid>
</template>

<script>
import {
	IonGrid,
	IonRow,
	IonCol,
	IonInput,
	IonSearchbar,
	IonButton,
} from "@ionic/vue";
import { locationOutline } from "ionicons/icons";

export default {
	components: {
		IonGrid,
		IonRow,
		IonCol,
		IonInput,
		IonSearchbar,
		IonButton,
	},
	setup() {
		return { locationOutline };
	},
};
</script>
