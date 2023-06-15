<template>
    <div class="w text-left">
        <ion-button 
            color="secondary"
            fill="outline"
            class="mb-8 normal-case"
            @click="resetAllFilters( 'all')"
        >
            Tout réinitialiser
        </ion-button>
        <div class="flex flex-col mb-7">
            <h2 class="mb-5 font-bold">Type de Contrat</h2>
            <ion-checkbox 
                v-for="(contractType, index) in contractTypes"
                :key="index"
                v-model="contractType.selected"
                @ionChange="setJobFilters('contract_type')"
            >
                {{ contractType.title }}
            </ion-checkbox>
        </div>
        <div class="flex flex-col my-5">
            <h2 class="mb-5 font-bold">Secteur d'Activité</h2>
            <ion-checkbox 
                v-for="(jobIndustry, index) in jobIndustries"
                :key="index"
                v-model="jobIndustry.selected"
                @ionChange="setJobFilters('job_industry')"
            >
                {{ jobIndustry.title }}
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
                { title: 'Intérim', selected: false },
                { title: 'CDD', selected: false },
                { title: 'CDI', selected: false },
            ],
            jobIndustries: [ 
                { title: 'Livraison', selected: false },
                { title: 'Logistique', selected: false },
                { title: 'Préparation de Colis', selected: false },
                { title: 'Opérations de Supermarché', selected: false },
                { title: 'Immobilier', selected: false },
            ],
        }
    },
    setup() {
      return {
        pinFormatter: (value) => `${value}%`,
      };
    },
    methods: {
        setJobFilters(filterType) {
            if(filterType === 'contract_type') {
                this.$emit('set-job-filters', { 
                    filterType: filterType, filterValues: this.contractTypes 
                });
            } else if(filterType === 'job_industry') {
                this.$emit('set-job-filters', { 
                    filterType: filterType, filterValues: this.jobIndustries 
                });
            }
        },
        resetAllFilters(filterType) {
            this.$emit('set-job-filters', { filterType: filterType });

            this.contractTypes = this.contractTypes.map(contractType => {
               return {...contractType, selected: contractType.selected = false };
            });

            this.jobIndustries = this.jobIndustries.map(jobIndustry => {
               return {...jobIndustry, selected: jobIndustry.selected = false };
            });
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
