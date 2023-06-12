<template>
    <div class="w text-left">
        <ion-button 
            color="secondary"
            fill="outline"
            class="mb-8 normal-case"
            @click="() => filterJobs('all')"
        >
            Tout réinitialiser
        </ion-button>
        <div class="flex flex-col mb-7">
            <h2 class="mb-5 font-bold">Type de Contrat</h2>
            <ion-checkbox 
                v-for="(contractType, index) in contractTypes"
                :key="index"
                @ionChange="() => filterJobs('contract_type', contractType)"
            >
                {{ contractType }}
            </ion-checkbox>
        </div>
        <div class="flex flex-col my-5">
            <h2 class="mb-5 font-bold">Secteur d'Acctivité</h2>
            <ion-checkbox 
                v-for="(jobIndustry, index) in jobIndustries"
                :key="index"
                @ionChange="() => filterJobs('job_industry', jobIndustry)"
            >
                {{ jobIndustry }}
            </ion-checkbox>
        </div>
        <div class="flex flex-col mb-7">
            <h2 class="mb-5 font-bold">Taux Horaire</h2>
            <ion-range aria-label="Range with pin" :pin="true" :pin-formatter="pinFormatter"></ion-range>
        </div>
    </div>
    
</template>

<script>
import { 
    IonCheckbox,
    IonRange,
    IonButton,
} from "@ionic/vue";

export default {
	components: {
        IonCheckbox,
        IonRange,
        IonButton,
	},
    props: {
        filterJobs: Function
    },
    data() {
        return {
            contractTypes: [ 'Intérim', 'CDD', 'CDI'],
            jobIndustries: [ 
                'Livraison', 
                'Logistique', 
                'Prépration de colis', 
                'Opérations de supermarché'
            ],
        }
    },
    setup() {
      return {
        pinFormatter: (value) => `${value}%`,
      };
    },
};
</script>

<style>
    ion-checkbox {
        --size: 26px;
        --checkbox-background-checked: var(--ion-color-secondary);
        margin: 2px;
    }

    ion-checkbox::part(container) {
        border-radius: 6px;
        border: 2px solid var(--ion-color-secondary);
    }
</style>
