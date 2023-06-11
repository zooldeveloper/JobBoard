<template>
	<ion-list>
		<ion-item>
			<ion-select
				label="Action Sheet Interface"
				interface="action-sheet"
				placeholder="Select fruit"
				cancel-text="Cancel Choice"
			>
				<ion-select-option value="apples">Apples</ion-select-option>
				<ion-select-option value="oranges">Oranges</ion-select-option>
				<ion-select-option value="bananas">Bananas</ion-select-option>
			</ion-select>
		</ion-item>
	</ion-list>
</template>

<script>
import { 
    IonList, 
    IonItem, 
    IonSelect, 
    IonSelectOption, 
    IonLabel 
} from "@ionic/vue";

export default {
	components: {
		IonList,
		IonItem,
		IonSelect,
		IonSelectOption,
        IonLabel,
	},
	setup() {
		return {};
	},
};
</script>