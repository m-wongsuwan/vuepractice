const app = new Vue({
    el: '#app',
    data: {
        firstName: '',
        lastName: '',
        patron: '',
        yearsWarlocking: 0,
        picSelect: 'feminine'
    },
    computed: {
        fealtyLevel: {
            get: function() {
                if (this.yearsWarlocking < 5) {
                    return 'Bronze'
                } else if (this.yearsWarlocking < 10) {
                    return 'Silver'
                } else {
                    return 'Diamond'
                }
            },
            set: function(newFealtyLevel) {
                if (newFealtyLevel == 'Bronze') {
                    this.yearsWarlocking = 0
                } else if (newFealtyLevel == 'Silver') {
                    this.yearsWarlocking = 5
                } else if (newFealtyLevel == 'Diamond') {
                    this.yearsWarlocking = 10
                }
            }
        },
        fullName: function() {
            if (this.firstName && this.lastName) {
                return this.firstName + ' ' + this.lastName
            } else if (this.firstName || this.lastName) {
                return this.firstName || this.lastName
            } else {
                return "Accursed One"
            }
        },
        specialMessage: function() {
            if (this.yearsWarlocking === 666) {
                return "Congratulations on your 666th year of fealty!"
            } else {
                return "Thank you for your fealty."
            }
        },
        thankYouText: function() {
            let yearsText = ""
            let patronThanksText = ""
            if (this.yearsWarlocking) {
                yearsText = ` for ${this.yearsWarlocking} years`
            }
            if (this.patron) {
                patronThanksText = ` ${this.patron} thanks you for your fealty.`
            }
            return `Thank you for being a warlock${yearsText}.${patronThanksText}`
        },
        imgSrc: function() {
            if (this.picSelect === 'feminine') {
                return './images/femmelock.png'
            } else if (this.picSelect === 'masculine') {
                return './images/boylock.png'
            }
        }

    },
    // watch: {
    //     yearsWarlocking: function(newYearCount, oldYearCount) {
    //         if (newYearCount == 666) {
    //             this.specialMessage = "Congratulations on the 666th anniversary of your unholy union!"
    //         }
    //     }
    // },
    methods: {
        resetAll: function() {
            this.firstName = '';
            this.lastName = '';
            this.patron = '';
            this.yearsWarlocking = 0;
            this.picSelect = 'feminine'
        },
        resetYears: function() {
            this.yearsWarlocking = 0
        }
    }
    
})