export class SidebarForm extends FormApplication {
    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            id: "ptu-sidebar",
            classes: ["pokemon", "ptu", "ptu-sidebar"],
            title: "PTU Sidebar",
            template: "systems/ptu/templates/forms/sidebar-form.hbs",
        });
    }

    /** @override */
    getData() {
        // Get current value
        const x = $(window).width();
        const y = $(window).height();

        this.position.left = x - 515;
        this.position.top = Math.round(y * 0.005);
        this.position.width = 200;
        this.position.height = Math.round(y * 0.985);
        
        var obj = this;
        $(window).resize(function() {
            obj.setPosition({left: $(window).width() - 515})
        })

        // Return data
        return {
            isGM: game.user.isGM,
            menu: this.object.menu,
        };

    }

    /** @override */
    _updateObject(event, formData) {}

    /** @override */
    async close(options = {}) {}

    /** @override */
    activateListeners(html) {

    }
}