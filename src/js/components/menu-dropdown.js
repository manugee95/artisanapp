init(() => {
	Alpine.data("menuNdropdown", () => ({
		open: false,
		showMe() {
			this.open = true;
		},
		hideMe() {
			this.open = false;
		},
		get isOpen() {
			return this.open;
		},
	}));
});
