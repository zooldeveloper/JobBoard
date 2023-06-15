<template>
	<ion-grid class="mt-8">
		<ion-row>
			<ion-col>
				<ion-searchbar
                    class="text-black max-w-md"
                    placeholder="Métier ou mots-clés"
                    v-model="jobTitleValue"
                    @ionInput="setUserInput('job_title')"
                    
				>
				</ion-searchbar>
			</ion-col>
			<ion-col>
				<ion-searchbar
                    class="text-black max-w-md"
					placeholder="Ville ou code postal"
                    v-model="locationValue"
					:search-icon="locationOutline"
                    @ionInput="setUserInput('city')"
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
	data() {
		return { 
            locationOutline,
            jobTitleValue: '',
            locationValue: '',
        };
	},
    methods: {
        setUserInput(searchType) {
            if(searchType === 'job_title') {
                this.$emit('set-user-inputs', { searchType: searchType, userInputValue: this.jobTitleValue});
            }
             else {
                this.$emit('set-user-inputs', { searchType: searchType, userInputValue: this.locationValue })
            };
        }
    }
};
</script>
