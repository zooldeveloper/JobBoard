<template>
    <div class="w text-left">
        <ion-button 
            color="secondary"
            fill="outline"
            class="mb-8 normal-case"
            @click="() => this.$emit('set-job-filters', 'all')"
        >
            Tout réinitialiser
        </ion-button>
        <div class="flex flex-col mb-7">
            <h2 class="mb-5 font-bold">Type de Contrat</h2>
            <ion-checkbox 
                v-for="contractType in contractTypes"
                :key="contractType.id"
                v-model="contractType.selected"
                
            >
                {{ contractType.title }}
            </ion-checkbox>
        </div>
        <div class="flex flex-col my-5">
            <h2 class="mb-5 font-bold">Secteur d'Activité</h2>
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
    data() {
        return {
            contractTypes: [ 
                { id: 1, title: 'Intérim', selected: false },
                { id: 2, title: 'CDD', selected: false },
                { id: 3, title: 'CDI', selected: false },
            ],
            jobIndustries: [ 
                'Livraison', 
                'Logistique', 
                'Préparation de colis', 
                'Opérations de supermarché'
            ],
        }
    },
    setup() {
      return {
        pinFormatter: (value) => `${value}%`,
      };
    },
    watch: {
        contractTypes: {
            handler() {
               this.$emit('set-job-filters', { 
                    filterType: 'contract_type', filterValues: this.contractTypes 
                });
            },
            deep: true
        }
    }
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
