const app = Vue.createApp({
    data() {
        return {
            name: "Walter White",
            profession: "Teacher",
            age: 55,
            showData: true
        }
    },

    methods: {
        increaseAge() {
            this.age++
            console.log(this.age)
        },
        decreaseAge() {
            this.age--
            console.log("Decrease Age")
        },
        toggleShowData() {
            this.showData = !this.showData
        },
        handleEvent(e, data) {
            console.log(e, e.type, data);
        }
    }
})

app.mount('#app')