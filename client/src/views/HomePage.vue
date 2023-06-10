<template>
	<base-layout pageTitle="Candidats Intérim">
		<h1 class="mt-12 text-3xl font-normal">Trouvez plus de 20+ 
			<span class="text-yallow">d'offres d'emploi</span>
		</h1>
		<search-filter></search-filter>
	</base-layout>
</template>

<script>
import {
	IonList,
	IonItem,
} from "@ionic/vue";
import SearchFilter from '../components/SearchFilter.vue';

export default {
    components: {
		IonList,
		IonItem,
		SearchFilter,
    },
}
</script>

<style scoped>
#container {
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
}

#container h1 {
	font-size: 15rem;
}
</style>
