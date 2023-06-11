<template>
	<base-layout pageTitle="Candidats Intérim">
		<main class="max-w-4xl m-auto">
			<h1 class="mt-12 text-3xl font-normal">Trouvez plus de 20+ 
				<span class="text-yallow">d'offres d'emploi</span>
			</h1>
			<job-search></job-search>
			<div class="flex justify-between mt-12 gap-5">
				<job-filter></job-filter>
				<job-description></job-description>
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
import JobDescription from '../components/JobDescription.vue';

export default {
    components: {
		IonList,
		IonItem,
		JobSearch,
		JobFilter,
		JobDescription,
    },
}
</script>

<style scoped>
/* #container {
	text-align: center;

	position: absolute;
	left: 0;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
}

#container strong {
	font-size: 20px;
	line-height: 26px;
}

#container p {
	font-size: 16px;
	line-height: 22px;

	color: #8c8c8c;

	margin: 0;
}

#container a {
	text-decoration: none;
} */
</style>
