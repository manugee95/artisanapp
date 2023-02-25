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

		nextStep() {
			this.currentStep++;
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

	Alpine.data("tasks", () => ({
		currentTab: "accepted",
		setTab(tab) {
			this.currentTab = tab;
		},

		get isAccepted() {
			return this.currentTab === "accepted";
		},

		get isDeclined() {
			return this.currentTab === "declined";
		},

		get isCompleted() {
			return this.currentTab === "completed";
		},
	}));
	Alpine.data("reviews", () => ({
		showAll: false,
		checkReviews() {
			const reviews = document.querySelectorAll(".revBox");
			if (reviews.length > 2) {
				reviews.forEach((review, i) => {
					if (i > 1) {
						review.style.display = "none";
					}
				});
			}
		},
		showAllReviews() {
			const reviews = document.querySelectorAll(".revBox");
			reviews.forEach((review, i) => {
				review.style.display = "block";
			});
			this.showAll = true;
		},
	}));
});
