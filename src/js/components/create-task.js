init(() => {
	Alpine.data("createTask", () => ({
		currentStep: 1,
		nextStep() {
			this.currentStep++;
		},
		prevStep() {
			this.currentStep--;
		},
	}));
});
