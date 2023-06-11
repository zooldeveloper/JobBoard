<template>
    <base-layout 
        pageTitle="Agen de Stockage"
        pageDefaultBackLink="/jobs"
    >
    <main class="max-w-4xl mt-10 m-auto p-3">
        <job-main-description :job="job"></job-main-description>
    </main>
    </base-layout>
</template>

<script>
import JobMainDescription from '../components/JobMainDescription.vue';

export default {
    components: {
        JobMainDescription,
    },
    setup() {
		return {
            job: {},
        };
	},
    mounted() {
        this.getOnJob();
    },
    methods: {
        getOnJob() {
            fetch(`http://localhost:3001/jobs/${this.$route.params.id}`)
				.then(res => res.json())
				.then(data => this.job = data)
				.catch(err => console.log(err));
                console.log(this.job)
        }
    }
}
</script>