init(() => {
	Alpine.data("createTask", () => ({
		currentStep: 1,
		taskInfo: {
			title: "",
			taskDate: "",
			address: "",
			summary: "",
			budget: 0,
		},

		nextStep(el) {
			if (el !== undefined) {
				if (this.currentStep === 4) {
					el.submit();
				} else {
					this.currentStep++;
				}
			}
		},

		prevStep() {
			this.currentStep--;
		},

		initDatePicker(input, container) {
			flatpickr(input, {
				appendTo: container,
				enableTime: true,
				dateFormat: "Z",
				altInput: true,
				altFormat: "D j M, h:i K",
				minDate: "today",
				onChange: (_, dateStr) => {
					this.taskInfo.taskDate = dateStr;
				},
			});
		},
	}));
});
