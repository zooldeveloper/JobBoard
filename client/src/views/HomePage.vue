<template>
	<base-layout pageTitle="Candidats Intérim">
		<main class="max-w-4xl m-auto p-3">
			<h1 class="mt-12 text-3xl font-bold">Trouvez plus de 20+ 
				<span class="text-yallow">d'offres d'emploi</span>
			</h1>
			<job-search v-on:set-user-input="setUserInput"></job-search>
			<div class="flex justify-between mt-12 gap-5">
				<job-filter :filterJobs="filterJobs"></job-filter>
				<div>
					<job-brief-description 
						:jobs="jobs"
						:inexistedValue="inexistedValue"
					>
					</job-brief-description>
				</div>
			</div>
		</main>
	</base-layout>
</template>

<script>
import {
	IonList,
	IonItem,
} from "@ionic/vue";
import JobSearch from '../components/JobSearch.vue';
import JobFilter from '../components/JobFilter.vue';
import JobBriefDescription from '../components/JobBriefDescription.vue';

export default {
    components: {
		IonList,
		IonItem,
		JobSearch,
		JobFilter,
		JobBriefDescription,
    },
	data() {
		return {
			data: [],
			jobs: this.data,
			inexistedValue: '',
		}
	},
	mounted() {
		this.getAllJobs();
	},
	methods: {
		getAllJobs() {
			fetch('http://localhost:3001/jobs')
				.then(res => res.json())
				.then(data => {
					this.data = data
					this.jobs = this.data
				})
				.catch(err => console.log(err))
		},
		
		setUserInput({ searchType, userInputValue }) {
			this.jobs = this.data;

			const isNumericalCharacter = /\d/.test(userInputValue);

			if(userInputValue.trim().length > 0) {
				this.jobs = this.jobs.filter(job => {
					if(searchType === 'city' && isNumericalCharacter) {
							return job.zip_code.toLowerCase().includes(userInputValue.trim().toLowerCase());
					} else {
						return job[searchType].toLowerCase().includes(userInputValue.trim().toLowerCase());
					}
				});
			} 
			if(this.jobs.length < 1) this.inexistedValue = userInputValue;
		},

		filterJobs(filterType, filterValue) {
			this.jobs = this.data
			if(filterValue !== 'all') {
				this.jobs = this.jobs.filter(job => {
					return	job[filterType].toLowerCase().includes(filterValue.trim().toLowerCase())
				})
			}
		},
	}
}
</script>
